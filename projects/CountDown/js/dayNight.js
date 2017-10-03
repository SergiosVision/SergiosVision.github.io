function dayNight (){
    var d = new Date();
    var n = d.getHours();
    if (n > 19 || n < 6){
        document.body.className = "night";
        document.body.removeClass = "day";
    }else{
        document.body.className = "day";
        document.body.removeClass = "night";
    }
    setTimeout(dayNight, 1000);
}

document.body.onload = dayNight;