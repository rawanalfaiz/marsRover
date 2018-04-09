 var myRover = { direction: "N" , posision: [0,0], travelLog: [x,y] };
 
var y = 0;

var x = 0;

var myLimits = {
  gridX: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  gridY: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};


function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
  console.log("New Direction is " + rover.direction);
}

turnLeft(myRover);


function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("New Direction is " + rover.direction);
}

turnRight(myRover);


function moveForward(rover){
  switch (rover.direction) {
    case 'N':
      rover.position[1]++;
        break;
    case 'E':
      rover.position[0]++;
        break;
    case 'S':
      rover.position[1]--;
        break;
    case 'W':
      rover.position[0]--;
        break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function moveBackward(rover){

  switch (rover.direction) {
    case 'N':
      rover.position[1]--;
        break;
    case 'E':
      rover.position[0]--;
        break;
    case 'S':
      rover.position[1]++;
        break;
    case 'W':
      rover.position[0]++;
        break;
  };
  
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] ")
}

mo


function receiveCommands(commands) {

  var directions = commands.split("");
  var arr = [directions];

  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'f':
        moveForward(myRover);
        break;
      case 'b':
        moveBackward(myRover);
        break;
      case 'r':
        turnRight(myRover);
        break;
      case 'l':
        turnLeft(myRover);
        break;
    };
  }
}

myRover.travelLog.push(posision);
console.log("Rover's current location: " + position);