<template>
    <header class="w-full h-14 lg:h-20 bg-[#DC9000] flex justify-between items-center">
        <img src="../../static/icons/menu.png" alt="" class="ml-3 lg:hidden" 
            @click="$nuxt.$emit('menu')"> 
        <div class="w-full flex justify-end items-center">
            <nuxt-link :to="link">
                <img :src="require(`~/static/icons/${ icone }.png`)" alt="icone" class="w-6 mr-5 lg:w-auto lg:mr-8">
            </nuxt-link>
            <img src="~/static/icons/notifications.png" alt="" class="w-6 mr-5 lg:w-auto lg:mr-8">
            <img src="~/static/icons/unsplash_mEZ3PoFGs_k.png" alt="" class="w-8 mr-4  rounded-full lg:w-auto lg:mr-8">
        </div>
    </header>
</template>

<script>
export default {
    name: 'cabecalho',
    props: {
        link: {
            type: String,
            default: () => "/"
        },
        icone: {
            type: String,
            default: () => "shopping_cart"
        }
    }
}
</script>



 