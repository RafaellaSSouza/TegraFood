<template>
    <div>
        <span class="w-11/12 lg:w-1/2 ml-[2%] lg:ml-[10%] fixed mt-[65vh] z-50 h-16 bg-[#223263] px-5 items-center flex justify-between">
            <p class="text-white font-semibold">{{msg}}</p>
            <button class="text-[#E6A11F] font-semibold">{{botao}}</button>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        msg: null,
        botao: {
            type: String,
            default: () => 'Cancelar'
        }
    }
}
</script>