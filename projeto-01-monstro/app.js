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

    },
    watch:{

    }
})