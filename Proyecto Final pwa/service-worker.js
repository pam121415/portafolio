const CACHE_NAME = "portafolio-cache-v1";

// Lista de archivos que quieres cachear
const urlsToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./manifest.json",
  "./img/192x192.png",
  "./img/512x512.png",
  "./contacto.html",
  "./proyectos.html", 
  "./media/video.mp4",
  "./img/1.jpeg",
  "./img/10.jpeg",
  "./img/12.jpeg",
  "./img/13.jpeg",
  "./img/18.png",
  "./img/2.jpeg",
  "./img/20.jpeg",
  "./img/22.jpeg",
  "./img/3.jpeg",
  "./img/4.jpeg",
  "./img/5.jpeg",
  "./img/6.jpeg",
  "./img/7.jpeg",
  "./img/8.jpeg",
  "./img/9.jpeg",
  "./img/C1.png",
  "./img/C2.png",
  "./img/C3.png",
  "./img/logo.jpg",
  "./img/logopam.png",
  "./img/n1.png",
  "./img/n2.png",
  "./img/n3.png",
  "./img/pamela.png",
  "./service-worker.js",
  "./img/portadavideo.jpeg",
  "./img/utna.png"
    // Asegúrate de agregar todos los archivos multimedia que necesitas
];

// Instalación del service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Archivos cacheados");
      return cache.addAll(urlsToCache);  // Cachea todos los archivos listados
    })
  );
});

// Activación del service worker y limpieza de caché viejo
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Cache antiguo eliminado:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Intercepta las peticiones y responde desde el cache o la red
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;  // Devuelve la respuesta cacheada si existe
      }
      // Si no está en caché, intenta la red
      return fetch(event.request);  // Si hay conexión, hace la solicitud a la red
    })
  );
});

