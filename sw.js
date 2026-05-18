const CACHE_NAME = 'jlpt-n5-v4';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',

    './srs.js',
    './stroke.js',
    './handwriting.js',
    './drills.js',
    './drills_data.js',
    './kanji_particles.js',
    './grammar_full.js',
    './data.js',
    './lessons.js',
    './mnemonics.js',
    './search.js',
    './vocab1.js',
    './vocab2.js',
    './vocab3.js',
    './vocab4.js'
];

self.addEventListener('install', event => {
    self.skipWaiting(); // Activate new SW immediately
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', event => {
    // Delete old caches
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // Network-first: try network, fall back to cache
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
