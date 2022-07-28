<template>
    <div id="menu-lateral" class="w-64 h-screen flex-col bg-[#6A0000] lg:flex fixed" :class="{hidden: desativado }">
        <img src="../../static/icons/botao-x.png" alt="" class="mt-3 ml-3 lg:hidden" @click="desativado = true">
        <img class="lg:pt-8 pr-12 pb-9 pl-9" src="~/static/images/Logo laranja 1.png" alt="Logo Tegrafood">
        <ul class="cursor-pointer">
            <li class="flex flex-col h-11 text-white my-border items-center justify-center ">
                <nuxt-link class="w-full h-full flex justify-center items-center" to="todos">Todos</nuxt-link>
            </li>
            <li class="flex flex-col h-11  text-white my-border items-center justify-center">
                <nuxt-link class="w-full h-full flex justify-center items-center " to="pizzas">Pizzas</nuxt-link>
            </li>
            <li class="flex flex-col h-11  text-white my-border items-center justify-center">
                <nuxt-link class="w-full h-full flex justify-center items-center" to="sobremesas">Sobremesas</nuxt-link>
            </li>
            <li class="flex flex-col h-11 text-white my-border items-center justify-center">
                <nuxt-link class="w-full h-full flex justify-center items-center" to="lanches">Lanches</nuxt-link>
            </li>
            <li class="flex flex-col h-11 text-white my-border items-center justify-center">
                <nuxt-link class="w-full h-full flex justify-center items-center" to="acai">Açaí</nuxt-link>
            </li>
            <li class="flex flex-col h-11 text-white my-border items-center justify-center">
                <nuxt-link class="w-full h-full flex justify-center items-center" to="bebidas">Bebidas</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'meuLateral',
    data() {
        return {
            desativado: true
        }
    },
    created() {
        this.$nuxt.$on('menu', () => {
            this.desativado = false
        })
    }
}
</script>

<style scoped>
    .my-border {
        border-top: 1px solid #ffff;
        border-bottom: 1px solid #ffff;
    }
    .nuxt-link-active {
        background-color: #dc9000;
    }
</style>