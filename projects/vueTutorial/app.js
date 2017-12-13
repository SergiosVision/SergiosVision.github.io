// new Vue({
//    el: '#app',
//     data: {
//         name: 'SergiosVision',
//         job: 'Nigga',
//         site: 'http://sergiosvision.github.io',
//         siteTag: '<a href="http://sergiosvision.github.io" target="_blank">SergiosVision Website</a>'
//     },
//     methods: {
//        greet: function () {
//            this.data.name;
//            return 'Most danger nigga in LosSantos'
//        }
//     }
// });

// new Vue({
//     el: '#app',
//     data: {
//         age: 55,
//         x: 0,
//         y: 0
//     },
//     methods: {
//         add: function (inc) {
//             this.age += inc;
//         },
//         subtract: function (dec) {
//             this.age -= dec;
//         },
//         updateXY: function (e) {
//             this.x = e.offsetX;
//             this.y = e.offsetY;
//         },
//         doThis: function () {
//             alert('Ne jmi men9');
//         }
//     }
// });
// new Vue({
//    el: '#app',
//     data: {
//         name: '',
//         age: ''
//    },
//     methods: {
//         logName: function () {
//
//         },
//         logAge: function () {
//
//         }
//     }
// });

// new Vue({
//    el: '#app',
//    data: {
//         age: 55,
//         a: 0,
//         b: 0
//    },
//    methods: {
//        // addToA: function () {
//        //     return this.a + this.age;
//        // },
//        // addToB: function () {
//        //     return this.b + this.age;
//        // }
//    },
//    computed: { // Предотвращение вызова двух функций
//        addToA: function () {
//            console.log('addToA');
//            return this.a + this.age;
//        },
//        addToB: function () {
//            console.log('addToB');
//            return this.b + this.age;
//        }
//    }
// });


// new Vue({
//     el: '#app',
//     data: {
//         available: false,
//         nearby: false
//     },
//     methods: {
//
//     },
//     computed: {
//         compClasses: function () {
//             return {
//                 available: this.available,
//                 nearby: this.nearby
//
//             }
//         }
//     }
// });

// new Vue({
//     el: '#app',
//     data: {
//         error: false,
//         success: false
//     },
//     methods: {
//
//     },
//     computed: {
//
//     }
// });


// new Vue({
//     el: '#app',
//     data: {
//         characters: ['Mario','Luigi', 'Sergios', 'Takeshi'],
//         niggas: [
//             {name: 'Guccie', age: '30'},
//             {name: 'Waka', age: '30'},
//             {name: 'Vert', age: '25'},
//         ]
//     },
//     methods: {
//
//     },
//     computed: {
//
//     }
// });

new Vue({
    el: '#app',
    data: {
        health: 100,
        ended: false

    },
    methods: {
        punch: function () {
            this.health -= 10;

            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    }
});