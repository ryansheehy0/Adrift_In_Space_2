import { z } from 'zod'
import React from 'react'
import { useState } from 'react'

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

/*
AfterEventInfo
  - changesInCrew: z.number().array()
  - changesInFuel: z.number().array()
  - changesIn

When loaded into event, after the event has happened the array will be gone through and applied to the global state information.
  - These changes will be displayed above the bottom bar. Positive will be green, negative will be red
*/

const Event: React.FC<z.infer<typeof EventSchema>> = (event) => {

  // When the user picks the option for the event
  return (
  )

  // When event is done. Display continue button.
  return (
    
  )
}

export default Event