new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('Alerta exibido!')
        },
        escultaEvento(event){
            this.valor = event.target.value
        }
    },
})