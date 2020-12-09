const socket = io();
const x_class = "x";
const circle_class = "circle";
var turn = false;
const cellElements = document.querySelectorAll('[data-cell]');
cellElements.forEach(function(cell) {
  cell.addEventListener('click', handleClick, {
    once: true
  });
});


function handleClick(e) {
  // send the id name to the Server
  const idName = e.target.id;
  socket.emit("add-class", {
    id: idName,
  });
  //check for winner
}

// take Id name and class Name  from Server and apply to all user
socket.on("broadcast", function(data) {
  document.getElementById(data.id).classList.add(data.className);
  // alert(checkWinner(data.className));
  checkWinner(data.className);
});

// check for winner
function checkWinner(className) {
  if (document.querySelector("#box-1").classList.contains(className) &&
    document.querySelector("#box-2").classList.contains(className) &&
    document.querySelector("#box-3").classList.contains(className)) {
    document.querySelector("#box-1").style.backgroundColor = "green";
    document.querySelector("#box-2").style.backgroundColor = "green";
    document.querySelector("#box-3").style.backgroundColor = "green";
    return true;
  } else if (document.querySelector("#box-4").classList.contains(className) &&
    document.querySelector("#box-5").classList.contains(className) &&
    document.querySelector("#box-6").classList.contains(className)) {
    document.querySelector("#box-4").style.backgroundColor = "green";
    document.querySelector("#box-5").style.backgroundColor = "green";
    document.querySelector("#box-6").style.backgroundColor = "green";
    return true;
  } else if (document.querySelector("#box-7").classList.contains(className) &&
    document.querySelector("#box-8").classList.contains(className) &&
    document.querySelector("#box-9").classList.contains(className)) {
    document.querySelector("#box-7").style.backgroundColor = "green";
    document.querySelector("#box-8").style.backgroundColor = "green";
    document.querySelector("#box-9").style.backgroundColor = "green";
    return true;
  } else if (document.querySelector("#box-1").classList.contains(className) &&
    document.querySelector("#box-4").classList.contains(className) &&
    document.querySelector("#box-7").classList.contains(className)) {
    document.querySelector("#box-1").style.backgroundColor = "green";
    document.querySelector("#box-4").style.backgroundColor = "green";
    document.querySelector("#box-7").style.backgroundColor = "green";
    return true;
  } else if (document.querySelector("#box-2").classList.contains(className) &&
    document.querySelector("#box-5").classList.contains(className) &&
    document.querySelector("#box-8").classList.contains(className)) {
    document.querySelector("#box-2").style.backgroundColor = "green";
    document.querySelector("#box-5").style.backgroundColor = "green";
    document.querySelector("#box-8").style.backgroundColor = "green";
    return true;
  } else if (document.querySelector("#box-3").classList.contains(className) &&
    document.querySelector("#box-6").classList.contains(className) &&
    document.querySelector("#box-9").classList.contains(className)) {
    document.querySelector("#box-3").style.backgroundColor = "green";
    document.querySelector("#box-6").style.backgroundColor = "green";
    document.querySelector("#box-9").style.backgroundColor = "green";
    return true;
  } else if (document.querySelector("#box-1").classList.contains(className) &&
    document.querySelector("#box-5").classList.contains(className) &&
    document.querySelector("#box-9").classList.contains(className)) {
    document.querySelector("#box-1").style.backgroundColor = "green";
    document.querySelector("#box-5").style.backgroundColor = "green";
    document.querySelector("#box-9").style.backgroundColor = "green";
    return true;
  } else if (document.querySelector("#box-3").classList.contains(className) &&
    document.querySelector("#box-5").classList.contains(className) &&
    document.querySelector("#box-7").classList.contains(className)) {
    document.querySelector("#box-3").style.backgroundColor = "green";
    document.querySelector("#box-5").style.backgroundColor = "green";
    document.querySelector("#box-7").style.backgroundColor = "green";
    return true;
  } else {
    return false;
  }
}
