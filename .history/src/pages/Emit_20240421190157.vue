<template>
    <div class="container">
        <ItemEmit v-for="item in itens" :key="item.id" :item="item" itens.prop="sync" @toggle-ativo="ativar"/>
    </div>
</template>

<script>
import ItemEmit from '../components/ItemEmit.vue';
import Itens from '../data/Itens.json'
export default {
    name: "Emit",
    components: {
        ItemEmit,
        Itens
    },
    data() {
        return {
            itens: Itens
        }
    },
    methods: {
        ativar(itemId) {
            let itemTotal = this.itens.find(
                macaco => macaco.id === itemId.id
            )
            itemTotal.ativo = !itemTotal.ativo;
        }
    }
}
</script>