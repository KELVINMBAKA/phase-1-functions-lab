// Code your solution in this file!
function distanceFromHqInBlocks ( scuberBlock) {
  if (scuberBlock > 42) {
    return scuberBlock - 42;
  } else {
    return 42 - scuberBlock;
  }
}

function distanceFromHqInFeet (scuberBlock) {
  return distanceFromHqInBlocks(scuberBlock) * 264;
}
function distanceTravelledInFeet (pickup, dropup) {
  if (pickup < dropup) {
    return (dropup - pickup) * 264;
  } else {
    return (pickup - dropup) * 264;
  }
}

function calculatesFarePrice (pickup, dropup) {
  const distance = distanceTravelledInFeet(pickup, dropup);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}



