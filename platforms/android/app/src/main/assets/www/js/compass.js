let Compass = function () {
    let myCompass;
    let options = {
        frequency: 200     //default is 100 (ms)
    };
    let init = function () {
        start();
    };
    let _compassSuccess =  function(heading) {
        console.log(heading);
        let degr = parseInt(heading.magneticHeading);
        let txt = degr + ' &deg;';
        _update(txt, degr);
    };
    let _compassError = function (error) {
        let degr = '0';
        let txt = '<b>Fout: </b>' + error.code;
        _update(txt, degr);
    };
    let _update = function (txt, degr) {
        $('#compass').html(txt);
    };
    let start = function () {
        myCompass = navigator.compass.watchHeading(_compassSuccess, _compassError, options);
    };
    //  /usr/lib/jvm/java-11-openjdk-amd64/bin/java

    return {
        init: init,
        start: start,
        stop: stop
    };
}();