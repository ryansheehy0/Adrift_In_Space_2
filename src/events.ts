import { z } from 'zod'

const EventSchema = z.object({
	title: z.string(),
	paragraph: z.string(),
	option1: z.string(),
	option2: z.string(),
	image: z.string(),
	width: z.number(),
	height: z.number(),
	option1Function: z.function(),
	option2Function: z.function(),
})

const EventsSchema = z.array(EventSchema)

const AfterEventInfoSchema = z.object({
	text: z.string(),
	crew: z.number(),
	fuel: z.number(),
	food: z.number(),
	lightYears: z.number()
})

const asteroid: z.infer<typeof EventSchema> = {
	title: "Asteroid",
	paragraph: "A single asteroid approaches your location. If you do nothing you will be hit.",
	option1: "Go to the left of the asteroid.",
	option2: "Go to the right of the asteroid.",
	image: "/events/asteroid.png",
	width: 128,
	height: 128,
	option1Function: function(setAfterEventInfo){
		setAfterEventInfo((afterEventInfo: z.infer<typeof AfterEventInfoSchema>) => {
			return {
				...afterEventInfo,
				text: ""
			}
		})
	},
	option2Function: function(){

	}
}

const events: z.infer<typeof EventsSchema> = [
	asteroid
]

export default events

function(){
  setAfterEventInfo((afterEventInfo) => {
    return {
      ...afterEventInfo,
      text: "",
      crew: afterEventInfo.crew + 1,
      fuel: afterEventInfo.fuel + 1,
      food: afterEventInfo.food + 1,
      lightYears: afterEventInfo.lightYears + 1
    }
  })
}