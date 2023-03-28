/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1 utilizzando una proprietá nell'oggetto restituito dalla funzione data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const { createApp } = Vue

createApp({
    data() {
        return {
            texth1: 'Ciao Vue.js!',
            h1Style: 'text-center p-3',
            urlImg: './assets/img/vue-js-logo-png-transparent-png.png'
        }
    }
}).mount('#app')