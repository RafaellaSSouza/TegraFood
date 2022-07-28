<template >
    <div class="flex h-32 pb-5">
        <Alert :msg="mensagem" v-if="alert"/>
        <p class="text-3xl font-bold text-[#223263] w-full">
            <a href="" class="offset hover:underline  hover:text-[#DC9000]">Produtos</a>
            <a href="" class="pl-4 offset hover:underline  hover:text-[#DC9000]">
                <nuxt-link to="todos">Todos</nuxt-link>
            </a>
        </p>
        <img src="../../static/icons/sort_by_alpha.png" alt="filtro A á Z" 
            class="self-end pb-2 pr-3 hover:cursor-pointer" :class="{ grayscale: ativo}"
            @click="exibirMensagem(), organizar()"/>
        <button class="box self-end w-1/4 h-12 rounded font-bold mr-1 ml-3 bg-[#dc9000] text-white"
            @click="MostrarModal()">Adicionar +
        </button>
    </div>
</template>

<script>
import Alert from './Alert.vue'
import FiltroPreco from './FiltroPreco.vue';

export default {
    name: "SectionAdmin",
    components: { Alert, FiltroPreco },
    data() {
        return {
            MostrarModal: () => {
                $nuxt.$emit("abrir");
            },
            ativo: false
        }; 
    },
    props:{
        alert: false,
        mensagem: null  
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

        }
    }   
}
</script>

<style scoped>
    .offset:hover {
        text-underline-offset: 8px;
    }
    .box {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .nuxt-link-active {
        text-underline-offset: 8px;
        text-decoration: underline;
        color: #DC9000;
    }
</style>
