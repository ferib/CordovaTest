let Network = function () {
    let init = function(){
        //_getState();
        setInterval(_getState, 1000);
    };
    let _getState = function(){
        let networkState = navigator.connection.type;

        console.log("Network state: ", navigator.connection.type);

        let states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        $('#networkState').text('Netwerk : ' + states[networkState]);
    };
    return {
        init: init
    };
}();