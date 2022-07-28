<template>
	<div class="flex w-full h-screen">
		<img src="~/static/images/pexels-rania-alhamed-2454533 1.png" alt="Vários pratos de comidas" 
			class="hidden lg:block">
		<div class="flex justify-center items-center w-full ">
			<section class="flex flex-col items-center justify-around w-full h-screen py-10 px-5 
							max-w-lg lg:w-2/3 lg:py-20 ">
				<h2 class="text-2xl font-bold lg:text-3xl text-[#223263]">Bem Vindo!</h2>
				<p class="text-[#9098B1] font-normal">Faça o login para continuar</p>
				<InputLogin 
					type="text" 
					imagem="Message" 
					descricao="Seu e-mail" />
				<InputLogin 
					type="password" 
					imagem="Password" 
					descricao="Senha"/>
				<BotaoLoginEntrar/>
				<p class="text-[#9098B1]"><strong>ou</strong></p>
				<BotaoLoginGoogle/>
				<p class="text-[#9098B1] font-normal">Não tem uma conta? 
					<nuxt-link to="/cadastro" class="text-[#40BFFF] font-medium">Cadastre-se</nuxt-link>
				</p>
			</section>
		</div>
	</div>
</template>

<script>
import InputLogin from '~/components/atoms/InputLogin.vue';
import BotaoLoginEntrar from '~/components/atoms/BotaoLoginEntrar.vue';
import BotaoLoginGoogle from '~/components/atoms/BotaoLoginGoogle.vue';

export default {
    name: "login",
    components: { InputLogin, BotaoLoginEntrar, BotaoLoginGoogle }
}
</script>
