<template>
	<div class="w-full flex">
		<MenuLateral />
		<div class="w-full ml-64">
			<Cabecalho/>
			<MainAdmin/>
		</div>
	</div>
</template>

<script>
import MenuLateral from "~/components/organisms/MenuLateral.vue";
import Cabecalho from "~/components/organisms/Cabecalho.vue";
import MainAdmin from '~/components/organisms/MainAdmin.vue';

export default {
	name: "Bebidas",
	components: { MenuLateral, Cabecalho, MainAdmin },
	mounted() {
		$nuxt.$emit('Bebidas')
	}, 
};
</script>