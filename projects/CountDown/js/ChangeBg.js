//(() => {
//  const urls = ['images/pixelNightBg.png','images/pixelMainBG2.png','images/pixelDayBg.png','images/pixelDayBg.gif',
//];
//
//  setInterval(() => {
//    let value = Math.floor(Math.random() * 4);
//    document.body.style.backgroundImage = `url(${urls[value]})`;
//      console.log(value);
//  }, 5000);
//})();


function randomBg (){
    const URLS = ['images/pixelNightBg.png','images/pixelMainBG2.png','images/pixelDayBg.png','images/pixelDayBg.gif',];
    
    let value = Math.floor(Math.random() * 4);
    document.body.style.backgroundImage = `url(${URLS[value]})`;
    console.log(value);
    setTimeout(randomBg, 5000);
};
randomBg();