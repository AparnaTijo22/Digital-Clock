var myInterval;

$("#start").click(function (e) { 
    myInterval = setInterval(showTime, 1000);
});

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour == 0) {
        hr = 12;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
            + min + ":" + sec;

    $("h1").text(currentTime);
}

$("#stop").click(function (e) { 
    clearInterval(myInterval);
});

function showDate(){
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    if(date < 10){
        date = '0' + date;
    }
    if(month < 10){
        month = '0' + month;
    }

    $("#show_date").text((`${date}/${month}/${year}`));
}

showDate();