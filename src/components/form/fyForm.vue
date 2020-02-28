<template>
    <div class="fy-form">
        <slot></slot>
    </div>
</template> 
<script>
export default {
    name:"fyForm",
    provide(){
        return{
            form:this
        }
    },
    props: {
        model: {
            type: Object,
            default: {}
        },
        rules: {
            type: Object
        },
    },
    components: {
        // New,
    },
    data() {
        return {
            // key: value
        }
    },
}
</script> 
<style scoped>
  
</style>