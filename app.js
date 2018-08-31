(function () {
    'use strict';

    $(document).ready(function(){
        $('#pushMsgId').click(function(){
            if (navigator.serviceWorker.controller.postMessage)
            navigator.serviceWorker.controller.postMessage({
                message: 'Hello, World!!!'
            });
        });
    });

}());

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            debugger;
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });

    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (navigator.serviceWorker.controller.postMessage)
            navigator.serviceWorker.controller.postMessage({
                message: 'Hello, World!!!'
            });
    });
}
else
    console.log('Service Worker is not supported by your browser!!!');