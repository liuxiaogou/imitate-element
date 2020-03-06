<template>
    <div>
        <input class="fy-input" :type="type"  :value="value" @input="onInput" v-bind="$attrs" @blur="onblur" >
    </div>
</template> 
<script>
export default {
    name:"fyInput",
    components: {
        // New,
    },
    inheritAttrs:false,
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
        onblur(e){
            // console.log(e);
            //  this.$emit('focus',e);
            //失去焦点，验证规则正确性 
             this.$parent.$emit('validate');
        }
        
    },
    mounted () {

    }
}
</script> 
<style scoped>
.fy-input{
    height:20px;
    margin:5px 0;
}
</style>