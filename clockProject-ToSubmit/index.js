function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var noon = document.getElementById("ampm");

    var time = new Date();
    hours.innerHTML = time.getHours();
    minutes.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds();
    

}

function addTimeInTextBox(str) {
    var textarea,data;
    if(str == "wake up time: ")
    {
         textarea = document.getElementById("morningTimeText");
         data = document.getElementById('time_options');
    }
    else if(str == "Lunch time: ")
    {
         textarea = document.getElementById("afterNoonTimeText");
         data = document.getElementById('time_afternoon_options');
    }
    else 
    {
         textarea = document.getElementById("nightTimeText");
         data = document.getElementById('time_night_options');
    }
    
    
    
    var times = data.options[data.selectedIndex].innerHTML;
    console.log(times);
    textarea.innerHTML = str+""+times; 
}

setInterval(clock,1000);

function setMorningTime() {
    var time = document.getElementById('time_options').value;
    var currentTime = new Date().getHours();
     if(time == currentTime)
     {
         document.getElementById("imageDisplayArea").style.background = "url(wakeUp-Image.png)"
         document.getElementById("imageDisplayArea").style.backgroundSize = "100% 100%"
         document.getElementById("textDisplay").innerHTML = "Have some breaak fast"
     }

     addTimeInTextBox("wake up time: ");
}
function setAfterNoonTime() {
    var time = document.getElementById('time_afternoon_options').value;
    var currentTime = new Date().getHours();
     if(time == currentTime)
     {
         document.getElementById("imageDisplayArea").style.background = "url(AfterNoon-Image.png)"
         document.getElementById("imageDisplayArea").style.backgroundSize = "100% 100%"
         document.getElementById("textDisplay").innerHTML = "Have some lunch"
     }

     addTimeInTextBox("Lunch time: ");
}
function setNightTime() {
    var time = document.getElementById('time_night_options').value;
    var currentTime = new Date().getHours();
     if(time == currentTime)
     {
         document.getElementById("imageDisplayArea").style.background = "url(night-Image.png)"
         document.getElementById("imageDisplayArea").style.backgroundSize = "100% 100%"
         document.getElementById("textDisplay").innerHTML = "Have some dinner"
     }

     addTimeInTextBox("Nap time: ");
}

function setTime() {
    setAfterNoonTime();
    setMorningTime();
    setNightTime();
}