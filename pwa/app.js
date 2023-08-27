//validamos el service worker que lo soporte el navegador
if("serviceWorker" in navigator){
    navigator.serviceWorker.register('/pwa/sw.js').then((res) =>{
        console.log('registrando...');
        console.log(res);
    })
    .catch((error) =>{
        console.log('error en el registro');
    });
} else{
    console.log('El navegador no soporta el serviceWorker')
}