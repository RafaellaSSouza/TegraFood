<template >
    <div class="w-full flex">
        <MenuLateral/>
        <div class="w-full ml-64">
            <Cabecalho/>
            <MainAdmin/>
        </div>
    </div>
</template>

<script>
import MenuLateral from '~/components/organisms/MenuLateral.vue'
import MainAdmin from '~/components/organisms/MainAdmin.vue'
import Cabecalho from '~/components/organisms/Cabecalho.vue'

export default {
    name: 'Pizzas',
    components: { MenuLateral, MainAdmin, Cabecalho },
    mounted() {
        $nuxt.$emit('Pizzas')
    },
}
</script>
