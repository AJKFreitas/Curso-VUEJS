new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
        }
    },
    watch: {
        resultado(){
            setTimeout(()=>{
                this.valor = 0
            },5000)
        }
    },
    methods: {
        somar5(){
            this.valor += 5
        },
        somar1(){
            this.valor ++
        }
    }

});