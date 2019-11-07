
new Vue({
    el:'#desafio',
    data: {
        nome:'Angelo Freitas',
        idade:'31',
        imagem_vue:'./assets/vue.png'
    },
    methods: {
        randomico(){
            return Math.random(1)
        }
    },
})