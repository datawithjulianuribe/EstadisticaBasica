// cuando se instala el service worker
self.addEventListener('install', (e)=>{
    console.log('instalando servicios');
    console.log(e);
});

//activar el servicio (service worker)
self.addEventListener('activate', (e)=>{
    console.log('activando los servicios');
    console.log(e);
});

// evento para descargar la app
self.addEventListener('fetch', (e)=>{
    console.log('fetch app', e);
});