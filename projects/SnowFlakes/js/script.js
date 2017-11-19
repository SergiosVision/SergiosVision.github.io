window.onload = function () {

    // Создание канвас блока. Можно удалить эти строки, и поместить его в HTML.

    var crtCnavas = document.createElement('canvas');
    crtCnavas.setAttribute('id', 'canvas');
    this.document.body.appendChild(crtCnavas);

    ////////////////////////////////////////////////////////////////////////////////////////////////


    // Инициализация Canvas

    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');

    // Габариты Canvas

    var W = window.innerWidth;
    var H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    // Снежинки

    var mp = 300; // Максимум частиц
    var particles = [];
    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random()*W, // Получаем координату X
            y: Math.random()*H, // Получаем координату Y
            r: Math.random()*2+1, // Радиус
            d: Math.random()*mp // Плотность
        })
    }

    // Рисуем снежинки
    
    function draw() {
        ctx.clearRect(0,0,W,H);

        ctx.fillStyle = "rgba(255,255,255,.8)";
        ctx.beginPath();
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            ctx.moveTo(p.x,p.y);
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
        }
        ctx.fill();
        update();
    }

    // Функция перемещения снежинок
    var angle = 0;
    function update()
    {
        angle += 0.01;
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            // Обновление координат X И Y
            // Мы добавим 1 к функции cos, чтобы предотвратить отрицательные значения
            // Каждая частица имеет свою плотность, которая может быть использована для того, чтобы движение вниз было различным для снежинки
            p.y += Math.cos(angle+p.d) + 1 + p.r/2;
            p.x += Math.sin(angle) * 2;

            // Отправка снежинок наверх когда они выходят из зоны
            // Также добавим снежжинки выходящие слева и справа
            if(p.x > W+5 || p.x < -5 || p.y > H) {
                if(i%3 > 0) { //66.67% снежинок
                    particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};

                } else {
                    //Если снежинки выхлят за правый край
                    if(Math.sin(angle) > 0) {
                        // Заходят слева
                        particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                    } else {
                        // Заходят справа
                        particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                }
            }
        }
    }

    // Анисационный цикл
    setInterval(draw, 33);

};