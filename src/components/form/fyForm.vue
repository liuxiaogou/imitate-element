          
          
          
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
        model:{
            type: Object,
            required:true
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
    methods: {
        validate(callback) {
           var arr = this.$children
           .filter((item)=>{
               return item.prop
           })
           .map((item)=>{
               return  item.validate();
            })
            Promise.all(arr)
            .then(()=>{callback(true)})
            .catch(()=>{callback(false)})
        }
    },
}
</script> 
<style scoped>
  
</style>