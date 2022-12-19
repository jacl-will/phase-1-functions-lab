function distanceFromHqInBlocks(distance) {
    if (distance > 42)
        return distance - 42
    else (distance < 42)
        return 42 - distance
//or return distance > 42 ? distance - 42 : 42 - distance
}

function distanceFromHqInFeet(distance) {
   return distanceFromHqInBlocks(distance) * 264;
  /*  if (pickUp1 > 42)
        return (pickUp1 - 42) * 264
    if (pickUp1 < 42)
        return (42 - pickUp1) * 264
        this is what I had that worked but watched walk 
        through and they simplified it */
}

function distanceTravelledInFeet(starting, ending) {
    if (starting > ending)
        return (starting - ending) * 264
    else (starting < ending)
        return (ending - starting) * 264
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400) {
        return 0
    } else if(distance > 400 && distance < 2000){
        return (distance - 400) * .02
    
    } else if(distance >= 2000 && distance < 2500){
        return 25
    } else if(distance > 2500){
        return 'cannot travel that far'
    }
}