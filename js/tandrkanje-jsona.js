/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 5/12/2018
 * Time: 12:25 PM
 */
"use strict";
(function() {
    // var racun = [
    //     {
    //         brojRacuna: 123,
    //         datum     : 2345,
    //         artikli   : [
    //             {
    //                 naziv  : "carapa",
    //                 cena   : 123,
    //                 prodato: 5
    //
    //             },
    //             {
    //                 naziv  : "gace",
    //                 cena   : 345,
    //                 prodato: 3
    //             }
    //         ]
    //     },
    //     {
    //         brojRacuna: 123,
    //         datum     : 2345,
    //         artikli   : [
    //             {
    //                 naziv  : "carapa",
    //                 cena   : 123,
    //                 prodato: 5
    //             },
    //             {
    //                 naziv  : "gace",
    //                 cena   : 345,
    //                 prodato: 6
    //             }
    //         ]
    //     }
    // ];

    $.ajax({
        // url    : './test.json',
        url    : 'https://jsonplaceholder.typicode.com/posts/3/comments',
        method:'GET',
        dataType:'json',
        success: function(data) {
            // var racun = data;
            // console.log(countTotal(racun))
            console.log(data);
        },
        error  : function(data) {
            console.log('ERROR', data);
        }

    });

    function countTotal(ulazniRacun) {
        var totalRacuna = ulazniRacun.length;
        var suma = 0;
        for(var i = 0; i < totalRacuna; i++) {
            var currentRacun = ulazniRacun[i];
            var stavkeLength = currentRacun.artikli.length;
            for(var j = 0; j < stavkeLength; j++) {
                var currentStavka = currentRacun.artikli[j];
                suma += currentStavka.cena * currentStavka.prodato;

            }
        }

        return suma;
    }

    // ;

}());