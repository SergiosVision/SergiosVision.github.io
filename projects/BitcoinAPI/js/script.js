window.addEventListener('load', function () {
    getCoin(); // Call XHR Request
});

// Start XHR Function

function getCoin() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {
            var item = JSON.parse(request.responseText);
            var output = '';
            var list = '';
            var getBpi = item.bpi;
            for(var items in getBpi) {
                var getBpiItems = getBpi[items];
                var arrTo = Object.keys(getBpiItems).map(function (t) { return getBpiItems[t] });
                list  += '<li class="'+ arrTo[0] +'"><label for="'+ arrTo[0] +'" class="element-radio" "><span>'+ arrTo[0] +'</span></label><input id="'+ arrTo[0] +'" class="radioCtrl" name="radio-status" type="radio" data-val="'+ items +'"></li>';
                output += '<div class="boxSwitch" data-value="'+ items +'">';
                output += '<h3 class="usdCurrency">Валюта: <span>'+ arrTo[0] +'</span></h3>';
                output += '<p class="currencyDescription">Полное название валюты: <span>'+ arrTo[3] +'</span></p>';
                output += '<p class="currencyRate">Курс валюты: <span>'+ arrTo[2] +'</span> <i>'+ arrTo[1] +'</i></p>';
                output += '</div>';
            }

            var nameOfCurrency = document.querySelector('.nameOfCurrency').innerHTML = item.chartName;
            document.querySelector('.containerControls').innerHTML = list;
            document.querySelector('.container').innerHTML = output;
            getCliks(); // Clicks Function Call
        }
    };
    request.send();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Clicks Function

function getCliks() {
    // Variables
    var getAllBoxesl = document.querySelectorAll('.boxSwitch');
    var getAllinputs = document.querySelectorAll('.containerControls li input');
    var getAllRadio = document.querySelectorAll('.radioCtrl');
    var getAllList = document.querySelectorAll('.containerControls li');
    var getlabelEl = document.querySelectorAll('.element-radio');
    var getlabelElSpan = document.querySelectorAll('.element-radio span');
    // Set params for fisrt elements
    getAllBoxesl[0].style.display = 'block';
    getAllinputs[0].setAttribute('checked', true);
    getAllList[0].querySelector('span').classList.add('active');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Watch clicks and change active classes
    getlabelEl.forEach(function (data) {
       data.addEventListener('click', function () {
           getlabelElSpan.forEach(function (newData) {
               newData.classList.remove('active');
           });
           this.querySelector('span').classList.add('active');
       }, false)
    });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Watch changes of radio buttons and switch content
    getAllRadio.forEach(function (t) {
        t.addEventListener('change', function () {
            var getVal = this.getAttribute('data-val');
            getAllBoxesl.forEach(function (t2) {
               t2.style.display = "none";
               t2.classList.remove('anim');
            });
            document.querySelector('.boxSwitch[data-value="'+ getVal +'"]').classList.add('anim');
            document.querySelector('.boxSwitch[data-value="'+ getVal +'"]').style.display = "block";
        }, false);
    });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
