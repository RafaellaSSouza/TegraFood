<template>
    <div class="bg-white rounded-lg shadow-lg fixed z-50 w-80  right-0 sm:w-96 h-28 top-[8vh] md:right-[20vh]">
        <p class="text-center font-semibold mb-4">Filtrar por preço:</p>
        <div class="flex justify-around h-12">
            <button class="bg-[#DC9000] text-white text-sm w-1/4 rounded-md"
                @click="$nuxt.$emit('filtroBaixo'), $emit('fecharFiltro')">R$5 à R$25
            </button>
            <button class="bg-[#DC9000] text-white text-sm w-1/4 rounded-md"
                @click="$nuxt.$emit('filtroMedio'), $emit('fecharFiltro')">R$26 à R$45
            </button>
            <button class="bg-[#DC9000] text-white text-sm w-1/4 rounded-md" 
                @click="$nuxt.$emit('filtroAlto'), $emit('fecharFiltro')">R$46 ou mais
            </button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'FiltroPreco',
    emits: [ 'fecharFiltro']  
}
</script>