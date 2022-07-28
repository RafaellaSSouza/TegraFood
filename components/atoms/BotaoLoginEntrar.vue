<template>
    <div class="w-full relative flex justify-center items-center">
        <ModalProvisorio v-if="modalProvisorio"/>
        <button @click="modalProvisorio = true" class="w-full h-14 p-4 bg-[#DC9000] rounded text-white font-bold
                    hover:bg-[#E5A11F]
                    active:bg-[#C8C8C8]">
            Entrar
        </button>     
    </div>
</template>

<script>
import ModalProvisorio from './ModalProvisorio.vue';
export default {
    name: "BotaoLoginEntrar",
    components: { ModalProvisorio },
    data() {
        return {
            modalProvisorio: false
        }
    },
}
</script>
