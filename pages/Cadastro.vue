<template>
	<div class="flex w-full h-screen">
		<img src="../static/images/pexels-rania-alhamed-2454533 1.png" alt="Vários pratos de comidas" 
			class="hidden lg:block">
		<div class="flex justify-center items-center w-full">
			<section class="flex flex-col items-center justify-around w-full h-screen py-10 px-5 max-w-lg lg:w-2/3 lg:py-20">
				<h2 class="text-2xl font-bold lg:text-3xl text-[#223263]">Vamos começar!</h2>
				<p class="text-[#9098B1] font-normal">Crie uma nova conta</p>
				<InputLogin 
					type="text" 
					imagem="User" 
					descricao="Nome completo"/>
				<InputLogin 
					type="text" 
					imagem="Message" 
					descricao="Seu e-mail"/>
				<InputLogin 
					type="password" 
					imagem="Password" 
					descricao="Senha"/>
				<InputLogin 
					type="password" 
					imagem="Password" 
					descricao="Confirme a senha"/>
				<BotaoLoginEntrar/>
				<p class="text-[#9098B1] font-normal">Já tem uma conta? 
					<nuxt-link to="/" class="text-[#40BFFF] font-medium">Entrar</nuxt-link>
				</p>
			</section>
		</div>
	</div>
</template>

<script>
import InputLogin from '~/components/atoms/InputLogin.vue';
import BotaoLoginEntrar from '~/components/atoms/BotaoLoginEntrar.vue';

export default {
    name: "cadastro",
    components: { InputLogin, BotaoLoginEntrar }
}
</script>
