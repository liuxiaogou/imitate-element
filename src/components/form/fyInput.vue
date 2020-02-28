<template>
    <div>
        <input class="fy-input" :type="type"  :value="value" @input="onInput" v-bind="$attrs" @focus="onFocus" >
    </div>
</template> 
<script>
export default {
    name:"fyInput",
    components: {
        // New,
    },
    // inheritAttrs:false,
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: '请输入一些内容吧'
        },
    },
    data() {
        return {
            // key: value
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input',e.target.value);
        },
        onFocus(e){
            console.log(e);
             this.$emit('focus',e); 
        }
        
    },
}
</script> 
<style scoped>
.fy-input{
    height:20px;
    margin:5px 0;
}
</style>