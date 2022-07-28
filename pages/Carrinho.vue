<template>
    <div class="w-full ">
        <MenuLateral class="lg:hidden"/>
        <Cabecalho icone="carrinho" link="/carrinho"/>
        <main class="w-full px-4 lg:px-8 mt-16">
            <h2 class="text-xl lg:text-3xl font-bold text-[#223263] ml-7 mb-7 ">Meu Carrinho</h2>
            <section class="flex items-center w-full" v-for="dado in dados" :key="dado">
                <!-- Card -->
                <div class="w-full lg:w-11/12 h-32 mt-2 border-[0.25px] border-[#000000] border-solid rounded-lg flex items-center justify-around box">
                    <img :src="dado.imagem" alt="imagem de comida" class="w-1/5 mr-2 ml-3 lg:mr-5 lg:ml-3 ">
                    <div class="w-full p-3">
                        <h3 class="font-bold text-[#223263] text-base md:text-lg lg:text-2xl text-shadow">{{dado.titulo}}</h3>
                        <p class="font-medium text-[#00000080] text-xs lg:text-sm md:text-base ">({{dado.descricao}})</p>
                    </div>
                    <div class="w-2/5 lg:w-1/4 lg:pr-3 flex flex-col items-center">
                        <p class="font-bold text-base md:text-xl pb-1 text-[#223263] text-center">R$ {{dado.preco}}</p>
                        <button class="box w-4/5 h-10 lg:h-12 bg-[#DC9000] rounded text-white md:font-bold">1x</button>
                    </div>
                    <img src="../static/icons/close.png" alt="" class="self-start mt-2 mr-2 lg:hidden">
                </div>
                <img src="../static/icons/delete.png" alt="" class="ml-6 hidden lg:block">
            </section>
            <section class="lg:flex lg:justify-between lg:max-w-[91.666667%] ">
                <div class="w-full lg:w-3/5 h-28 mt-2 border-[0.25px] border-[#000000de] border-solid rounded-lg flex items-center justify-center box">
                    <h3 class="mr-2 font-bold text-[#223263] text-base md:text-lg lg:text-2xl text-shadow" >Cupom de desconto</h3>
                    <form action="/" class="h-11 w-1/2 border-[0.25px] border-[#00000080] rounded-md flex justify-between">
                        <input class="border-0 w-full focus:outline-none" type="text">
                        <button class="bg-[#DC9000] text-white m-[0.26px] px-2 rounded" >Adicionar</button>
                    </form>   
                </div>
                <table class="w-1/2 lg:w-[38%] ml-auto mt-2 h-36">
                    <tr class="h-1/3">
                        <td class="uppercase font-bold px-2 border-2">Subtotal</td>
                        <td class="border-l font-bold text-lg text-right px-2 text-[#223263] border rounded-r-md">R$83,00</td>
                    </tr>
                    <tr class="border rounded-md h-1/3">
                        <td class="uppercase font-bold px-2 border-2">Entrega</td>
                        <td class="border-l font-bold text-right px-2 underline"><a href="">Calcular</a></td>
                    </tr>
                    <tr class="border rounded-md h-1/3">
                        <td class="uppercase font-bold px-2 border-2">Total</td>
                        <td class="border-l font-bold text-lg text-right px-2 text-[#223263]">R$83,00</td>
                    </tr>
                </table>
            </section>
            <div class="flex my-10 justify-between h-12 md:justify-end lg:max-w-[91.666667%]">
                <button class="text-[#223263] underline font-semibold ml-8 md:mr-14">Escolher mais</button>
                <button class="bg-[#DC9000] text-white font-semibold rounded-md px-2 flex items-center">Fechar Pedido<img src="~/static/icons/carrinho.png" alt="" class="w-5 h-5 mx-4 "></button>
            </div>
        </main>
        
    </div>
</template>

<script>
import Cabecalho from '~/components/organisms/Cabecalho.vue';
import MenuLateral from '~/components/organisms/MenuLateral.vue';
export default {
    name: "Carrinho",
    components: { Cabecalho, MenuLateral },
    data() {
        return {
            dados: [
                {
                    titulo: 'Marguerita',
                    descricao: 'Marguerita, tomate, manjericão, orégano e azeite',
                    preco: 60.00,
                    imagem: '../static/images/pizza.png'
                },
                {
                    titulo: 'Refrigerante Coca-Cola zero 350ml',
                    descricao: '',
                    preco: 5.00,
                    imagem: ''
                },
                {
                    titulo: 'Açaí com frutas',
                    descricao: 'Açaí, banana, morango, uva, leite ninho em pó e leite condensado',
                    preco: 18.00,
                    imagem: ''
                }
            ]
        }
    },
}
</script>

<style scoped>
    .box {
        box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.502);;
    }
</style>