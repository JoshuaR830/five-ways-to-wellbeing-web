var CACHE_NAME = 'five-ways-to-wellbeing-cache-v1'

var urlsToCache = [
    '/',
    '/css/site.css',
    '/js/site.js',
    '/js/colors.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache)
            })
    )
})

self.addEventListener('fetch', () => { });

