if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js');
}

// if(window.caches){
//     // Obtiene un cache y si no existe lo crea
//     console.log('Se soporta cache');
//     caches.open('cache-v1');
//     caches.keys().then( keys => {
//         console.log(keys);
//     } );

//     caches.has('cache-v1').then( (resp) => {
//         console.log(resp);
//     } );

//     caches.open('cache-v1').then( cache => {
//         // cache.add('/index.html');
//         // cache.add('/images/balon.png');
//         // cache.add('/css/style.css');
//         //cache.delete('cache-v3');

//         console.log("Below the cache");
//         console.log(cache);

//         cache.addAll(
//             [
//                 '/index.html',
//                 '/images/balon.png',
//                 '/css/style.css',
//             ]
//         ).then( () => {
//             cache.delete('/images/balon.png');
//         } );


//         cache.match('/index.html').then( resp => {

//             resp.text().then( text => {
//                 console.log('match', text);
//             } )
//         } );

//     } );

// }
