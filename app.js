(function () {
    'use strict';


}());

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        
        navigator.serviceWorker.register('./sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

            setTimeout(function (){
                navigator.serviceWorker.controller.postMessage({
                    message: 'Hello, World!!!'
                });
            }, 3000);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}