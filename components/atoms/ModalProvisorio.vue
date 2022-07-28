<template>
    <div class=" flex-wrap flex justify-around w-1/2 p-2 rounded bg-white shadow-lg h-20 absolute border border-gray-400">
        <p>Escolha uma opção:</p>
        <nuxt-link class="bg-[#DC9000] text-white text-sm w-2/5 rounded-md flex items-center justify-center" 
                    to="produtosAdmin/todos">Admin
        </nuxt-link>
        <nuxt-link class="bg-[#DC9000] text-white text-sm w-2/5 rounded-md flex items-center justify-center" 
                    to="produtosCliente/todos">Cliente
        </nuxt-link>
    </div>
</template>