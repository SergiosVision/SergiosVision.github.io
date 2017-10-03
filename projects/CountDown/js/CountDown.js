
function countDown () {
    let now = new Date();
    let eventDate = new Date(2100, 5, 26);
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    
    let remTime = eventDate - currentTime;
    
    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);
    
    h %= 24;
    m %= 60;
    s %= 60;
    
    
    if(h < 10) h = "0" + h;
    if(m < 10) m = "0" + m;
    if(s < 10) s = "0" + s;
    
    document.getElementById("days").textContent = d;
    document.getElementById("days").innerHTML = d;
    
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countDown, 1000);
};
countDown();