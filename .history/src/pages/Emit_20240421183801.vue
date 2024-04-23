<template>
    <div class="container">
        <ItemEmit v-for="item in itens" :key="item.id" :Item="item"/>
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
    }
}
</script>