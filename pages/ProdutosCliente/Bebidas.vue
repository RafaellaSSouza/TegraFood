<template>
    <div class="w-full flex relative">
        <MenuLateral/>
        <div class="w-full lg:ml-64">
            <Cabecalho icone="carrinho" link="/carrinho"/>
            <main class="w-full p-3">
                <SectionCliente/>
                <CardAdmin botao="Comprar" />
            </main>
        </div>
    </div>
</template>

<script>
import MenuLateral from '~/components/organisms/MenuLateral.vue';
import Cabecalho from '~/components/organisms/Cabecalho.vue';
import CardAdmin from '~/components/molecula/CardAdmin.vue';
import SectionCliente from '~/components/molecula/SectionCliente.vue';

export default {
    name: "Bebidas",
    components: { MenuLateral, Cabecalho, CardAdmin, SectionCliente },
    mounted() {
        $nuxt.$emit('Bebidas')
    },
}
</script>