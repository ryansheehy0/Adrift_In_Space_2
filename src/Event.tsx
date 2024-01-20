import { z } from 'zod'
import React from 'react'

const EventSchema = z.object({
  title: z.string(),
  paragraph: z.string(),
  option1: z.string(),
  option2: z.string(),
  svg: z.string(),
  width: z.number(),
  height: z.number(),
  option1Function: z.function(),
  option2Function: z.function(),
})

/*
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
*/

const Event: React.FC<z.infer<typeof EventSchema>> = (event) => {

  return (
    
  )
}

export default Event