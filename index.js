function distanceFromHqInBlocks(blocks) {
    return(Math.abs(blocks - 42));
  }

function distanceFromHqInFeet(blocks) {
    return((Math.abs(blocks - 42)) * 264 );
}

function distanceTravelledInFeet(start, end) {
    return((Math.abs(start - end)) * 264 );
}

function calculatesFarePrice(start, destination) {
    let dist = ((Math.abs(start - destination)) * 264 );
    switch(true){
        case dist < 400:
            return(0);
            break;
        case dist > 400 && dist < 2001:
            return(((dist - 400) * 2) / 100);
            break;
        case dist > 2000 && dist < 2501:
            return(25);
            break;
        default:
            return("cannot travel that far");
            break;    
    }
}