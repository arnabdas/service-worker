(function () {
    'use strict';


}());

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });

    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        // Let's see if you have a subscription already
        return serviceWorkerRegistration.pushManager.getSubscription();
    }).then(function (subscription) {
        if (!subscription) {
            console.log('You do not have subscription');
        }
        // You have subscription.
        // Send data to service worker
        setTimeout(function () {
            navigator.serviceWorker.controller.postMessage({
                message: 'Hello, World!!!'
            });
        }, 3000);
    })
}
else
    console.log('Service Worker is not supported by your browser!!!');