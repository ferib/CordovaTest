$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    console.log('Device is ready');
    Device.init();
    Network.init();
    Compass.init();
};

$('.sidenav').sidenav();	/* https://materializecss.com/sidenav.html */

$('.sidenav a').click(function () {
    $('.spa').hide();
    $('#' + $(this).data('show')).show();
    $('.sidenav').sidenav('close');
});
