<template>
    <main class="w-full p-3 relative ">
        <SectionAdmin :alert="alert" :mensagem="mensagem" />
        <!-- Modal -->
        <Teleport to="main">
            <div v-if="abrir" class="box absolut right-[33%] left-[33%] bottom-[10%] flex flex-col 
                justify-around p-8 fixed z-50 w-5/12 h-4/5 bg-[#6A0000] rounded-lg text-[#DC9000] font-bold">
                <p class="text-2xl">Novo Item</p>
                <div class="grid grid-cols-3 grid-rows-5 gap-y-4 gap-x-3 p-3 mt-10 h-2/4">
                    <input class="col-span-2 row-span-1 rounded pl-1 focus:outline-none" 
                        type="text" placeholder="Nome" >
                    <input class="row-span-4 rounded focus:outline-none inputImagem" 
                        placeholder="Adicione uma imagem">
                    <input class="col-span-2 row-span-1 rounded pl-1 focus:outline-none" 
                        type="text" placeholder="Categoria">
                    <input class="col-span-2 row-span-2 rounded pl-1 focus:outline-none" 
                        type="text" placeholder="Descrição">
                    <input class="col-span-1 row-span-1 rounded pl-1 focus:outline-none" 
                        type="number" placeholder="Valor">
                </div>
                <div class="flex justify-end text-white mt-auto">
                    <button @click="abrir=false" class="mr-10">Cancelar</button> 
                    <button class="bg-[#dc9000] w-32 h-10 rounded" @click="mostarAlert()">Cadastrar</button>
                </div>
            </div>
        </Teleport>
    
        <CardAdmin botao="Editar" />
      </main>
</template>

<script>
import SectionAdmin from '~/components/molecula/SectionAdmin.vue'
import CardAdmin from '~/components/molecula/CardAdmin.vue'

export default {
    name:'MainAdmin',
    components: {SectionAdmin, CardAdmin},
    data() {
        return {
            abrir: false,
            alert: false,
            mensagem: null
        };
    },
    created() {
        this.$nuxt.$on('abrir', () => {
            this.abrir = true
        })
    },
    methods: {
        mostarAlert() {
            this.alert = true;
            this.mensagem = 'Produto cadastrado';
            setTimeout(() => {
                this.alert = false
                this.mensagem = ''
            }, "3000");
            this.abrir = false 
        }
    },
}
</script>

<style scoped>
    input::placeholder {
        font-size: 12px;
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 4px;
    }
    .inputImagem::placeholder {
        position: relative;
        text-align: center;
    }
</style>