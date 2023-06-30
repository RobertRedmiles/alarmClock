let alarmTime = {
	hour: 0,
	minutes: 0,
	seconds: 0,
	PM: false,
	alarmSet: false
}
function showTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }

    if(hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
	if (alarmTime.alarmSet && hours == alarmTime.hour && minutes == alarmTime.minutes && alarmTime.seconds == seconds) {
		window.alert("Alert")
		alarmTime.alarmSet = false;
	}

    const time = hours + ":" + minutes + ":" + seconds + session;
   

    document.getElementById("myClock").innerText = time;
    setTimeout(showTime, 1000);
}

showTime();

const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "DeepPink",
		value: "#FF1493"
	},
	{
		color: "DarkOrchid",
		value: "#9932CC"
	}

];

const element = document.getElementById("box")
let count = 0;

setInterval(() => {
	if (count > colours.length - 1) {
		count = 0;
	}

	element.style.backgroundColor = colours[count].value;
	

	count++;
}, 5000);

function setAlarm() {
	let hour = document.getElementById("hourInput").value;
	let minutes = document.getElementById("minuteInput").value;
	let seconds = document.getElementById("secondsInput").value;
	const PM = document.getElementById("AM-PM").checked;
	if(hour < 10 && hour.charAt(0) != 0){
		hour = 0 + hour;
	}
	if(minutes < 10 && minutes.charAt(0) != 0){
		minutes = 0 + minutes;
	}

	if(seconds < 10 && seconds.charAt(0) != 0) {
		seconds = 0 + seconds;
	}
	alarmTime.hour = hour;
	alarmTime.minutes = minutes;
	alarmTime.seconds = seconds;
	alarmTime.PM = PM;
	alarmTime.alarmSet = true;
	window.alert("Alarm Set");
	console.log(alarmTime)
}