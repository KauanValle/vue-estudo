<template>
    <div class="container">
        <ItemEmit/>
    </div>
</template>

<script>
import ItemEmit from '../components/ItemEmit.vue';
import Itens from '../data/Itens.json'
export default {
    name: "Emit",
    components: {
        ItemEmit
    },
    data() {
        return {
            itens: 
        }
    }
}
</script>