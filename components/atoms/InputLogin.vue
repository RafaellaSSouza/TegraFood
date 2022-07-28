<template>
    <div class="w-full h-12 border border-solid border-[#EBF0FF] rounded flex items-center justify-around">
        <img :src="require(`~/static/icons/${ imagem }.png`)" alt="icone" class="w-6 h-6">
        <input :type="type" :placeholder= "descricao" class="w-11/12 pl-1 focus:outline-none">
    </div>
</template>

<script>
export default {
    name: 'inputLogin',
    props: {
        type: {
            type: String,
            default: () => ""
        },
        imagem: {
            type: String,
            default: () => "Message"
        },
        descricao: {
            type: String,
            default: () => "Colocar descrição"
        }
    }
    
}
</script>
