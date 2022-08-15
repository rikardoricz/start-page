const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function displayTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  //adding zeros to single digit units of time
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds;
  let date = today.toLocaleDateString("en-US", dateOptions);

  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time;
}

//run function displayTime every second
setInterval(displayTime, 1000);

function greetingTime() {
  let today = new Date();
  let hours = today.getHours();
  console.log(hours);
  const greeting = document.getElementById("greeting");
  if (hours > 5 || hours < 12) {
    greeting.innerHTML = "Good Morning";
  }
  if (hours > 12 || hours < 18) {
    greeting.innerHTML = "Good Afternoon";
  }
  if (hours > 18 || hours < 5) {
    greeting.innerHTML = "Good Evening";
  }
  greeting.innerHTML += ", Tom!";
}
greetingTime();
