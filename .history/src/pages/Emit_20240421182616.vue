<template>
    <div class="container">
        <ItemEmit/>
    </div>
</template>

<script>
import ItemEmit from '../components/ItemEmit.vue';
export default {
    name: "Emit",
    components: {
        ItemEmit
    }
}
</script>