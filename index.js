function showTime() {
    var date = new Date();
    console.log("Date" + date);
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var currentTime = `${hour}:${min}:${sec}`;
    document.getElementById("time").innerText = currentTime;
    setTimeout(showTime, 1000);
}

showTime();