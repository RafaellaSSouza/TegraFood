<template>
    <div>
        <div class="h-32 mt-2 border-[0.25px] border-[#000000de] border-solid rounded-lg flex items-center justify-around box" 
        v-for="produto in produtos" :key="produto.id">
            <img :src="produto.image" alt="imagem de comida" class="w-1/5 mr-2 ml-3 lg:mr-5 lg:ml-3">
            <div class="w-full p-3">
                <h3 class="font-bold text-[#223263] text-base md:text-lg lg:text-2xl text-shadow">{{ produto.title }}</h3>
                <p class="font-medium text-[#00000080] text-sm md:text-base ">({{ produto.description }})</p>
            </div>
            <div class="w-2/5 lg:w-1/4 pr-3">
                <p class="font-bold text-lg md:text-xl pb-1 text-[#223263] text-center">R$ {{ produto.price }}</p>
                <button class="box w-full h-10 lg:h-12 bg-[#DC9000] rounded text-white md:font-bold"
                    @click="mostrarAlert()">{{ botao }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardAdmin',
    data() {
        return {
            produtos: [],
            rota: this.$route.path
        } 
    },
    props: {
        botao: String,
    },
    created() { 
        this.$nuxt.$on('Todos', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&order=ASC')
            .then((response)=> {
                this.produtos = response.data
            })
        })
        
        this.$nuxt.$on('Pizzas', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&order=ASC&filter=pizza')
            .then((response)=> {
                this.produtos = response.data
            })
        })

         this.$nuxt.$on('Sobremesas', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&order=ASC&filter=sobremesa')
            .then((response)=> {
                this.produtos = response.data
            })
        })

        this.$nuxt.$on('Lanches', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&filter=x-')
            .then((response)=> {
                this.produtos = response.data
            })
        })

        this.$nuxt.$on('Acais', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&filter=a%C3%A7ai')
            .then((response)=> {
                this.produtos = response.data
            })
        })

        this.$nuxt.$on('Bebidas', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&filter=bebida')
            .then((response)=> {
                this.produtos = response.data
            })
        })

        // Filtros de preços

        this.$nuxt.$on('filtroBaixo', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&max=25&min=5')
            .then((response)=> {
                this.produtos = response.data  
            })     
        })

        this.$nuxt.$on('filtroMedio', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&max=45&min=26')
            .then((response)=> {
                this.produtos = response.data  
            })     
        })

        this.$nuxt.$on('filtroAlto', () => {
            this.$axios.$get('https://tegra-food-skyot.herokuapp.com/products?page=1&max=1000&min=46')
            .then((response)=> {
                this.produtos = response.data  
            })     
        })

        // Filtro de A á Z

        this.$nuxt.$on('organizar', () => {
           this.produtos.sort(function(a,b) {
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0; 
           })
        })
    },
    methods: {
        mostrarAlert() {
            $nuxt.$emit('mensagemCarrinho')
        }, 
    },      
}
</script>

<style scoped>    
    .box {
        box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.502);;
    }
</style>