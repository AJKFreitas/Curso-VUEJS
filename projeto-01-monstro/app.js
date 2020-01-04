new Vue({
    el:'#app',
    data:{
        playerLife:00,
        monsterLife:100,
        running:false,

    },
    computed:{
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack(especial){
            this.hurt('playerLife',4,10,especial)
            this.hurt('monsterLife',7,12,especial)
        },
        getRandom(min,max){
            const value = Math.random() * (min - max) + min
            return Math.round (value)
        },
        hurt(prop,min,max,especial){
            const plus = especial? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)

        }
    },
    watch:{
        hasResult(value){
            if (value) this.running = false
        }
    }
})