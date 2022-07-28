<template>
    <div class="flex mt-2 lg:mt-5 mb-5 pb-5 lg:pl-5 items-center ">
        <FiltroPreco v-if="filtro" @fecharFiltro="filtro = false"/>
        <Alert :msg="mensagem" :botao="textoBotao" v-if="alert"/>
        <p class="text-xl lg:text-3xl font-bold text-[#223263] w-full">
            <a href="" class="offset hover:underline  hover:text-[#DC9000]">Produtos</a>
            <a href="/produtosCliente/todos" class="pl-4 offset hover:underline  hover:text-[#DC9000]">
                <nuxt-link to="todos">Todos</nuxt-link>
            </a>
        </p>
        <img src="../../static/icons/filter_alt.png" alt="filtro de preço" @click="filtro = true" 
            class="w-5 h-5 mr-6 lg:self-end lg:mr-6 lg:w-9 lg:h-9 hover:cursor-pointer" />
        <img src="../../static/icons/sort_by_alpha.png" alt="filtro A á Z" @click="exibirMensagem(), organizar()" 
            class="w-6 h-6 mr-4 lg:self-end lg:mr-6 lg:w-11 lg:h-11 lg:pt-1 hover:cursor-pointer" :class="{ grayscale: ativo}"/>
    </div>
</template>

<script>
import Alert from './Alert.vue';
import FiltroPreco from './FiltroPreco.vue';

export default {
    name:'SectionCliente',
    components: { Alert, FiltroPreco },
    data() {
        return {
            alert: false,
            mensagem: null,
            textoBotao: 'Cancelar',
            filtro: false,
            ativo: false
        }
    },
    methods: {
        exibirMensagem() {
            this.alert = true;
            this.mensagem = 'Itens organizados de A à Z';
            setTimeout(() => {
                this.alert = false
                this.mensagem = ''
            }, "3000");
        },
        organizar() {
            $nuxt.$emit("organizar")
            this.ativo = true
        },
    },
    created() {
        this.$nuxt.$on('mensagemCarrinho', () => {
            this.alert = true;
            this.mensagem = 'Item adicionado ao carrinho';
            this.textoBotao = 'Abrir carrinho'
            setTimeout(() => {
                this.alert = false
                this.mensagem = ''
                this.textoBotao = "Cancelar"
            }, "3000");
        } )
    },
}
</script>
<style scoped>
    .offset:hover {
            text-underline-offset: 8px;
        }
    .nuxt-link-active {
        text-underline-offset: 8px;
        text-decoration: underline;
        color: #DC9000;
    }   
</style>