const lightbulb = document.getElementById("lightbulb");
const lightswitch = document.getElementById("lightswitch");
const status = document.getElementById("status");

let IsLightOn = false;

lightswitch.addEventListener("click",function() {
	if(IsLightOn) {
		lightbulb.src = "lightoff.png";
		lightswitch.src = "switchoff.png";
		status.textContent = "Turn on the light!";
	}else{
		lightbulb.src = "lighton.png";
		lightswitch.src = "switchon.png";
		status.textContent = "Hip hip hooray! Turn it off!";
	}
    IsLightOn = !IsLightOn;
}

);