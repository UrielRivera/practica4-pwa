const STATIC_CACHE_NAME  = 'static-cache-v1.1'
const INMUTABLE_CACHE_NAME  = 'inmutable-cache-v1.1'
const DYNAMIC_CACHE_NAME  = 'dynamic-cache-v1.1'


self.addEventListener('install', (event) =>{
        console.log("SW: INSTALADO");

        
    const promiseCache = caches.open(STATIC_CACHE_NAME).then( cache => {
        return cache.addAll([
            '/',
            '/index.html', 
            '/css/style.css',
             '/js/app.js', 
             '/images/icons/android-launchericon-48-48.png',
             '/images/icons/android-launchericon-72-72.png',
             '/images/icons/android-launchericon-96-96.png',
             '/images/icons/android-launchericon-144-144.png',
             '/images/icons/android-launchericon-192-192.png',
             '/images/icons/android-launchericon-512-512.png',
             '/manifest.json'
        ]);
    } );

    const respCacheInmutable = caches.open(INMUTABLE_CACHE_NAME).then((cache)=>{
            return cache.addAll([
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.woff2',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.ttf',
                'https://images.unsplash.com/photo-1579347380110-d27a8be59b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGxhc2h8ZW58MHx8MHx8&w=1000&q=80'
                
            ])
    })

    event.waitUntil(Promise.all([promiseCache, respCacheInmutable]));

})


self.addEventListener('fetch', event => {

    console.log(event.request);
    const respCache = caches.match(event.request);
    event.respondWith(respCache);
});
