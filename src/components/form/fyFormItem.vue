<template>
    <div class="fy-form-item">
      <label class="fy-label" :style="{width:labelWidth}">{{label}}</label>  
      <slot></slot> 
      <div v-if="error">{{error}}</div>
    </div>
</template> 
<script>
import Schema from "async-validator";
export default {
    name:"fyFormItem",
    components: {
        // New,
    },
    inject:['form'],
    props: {
        label: {
            type: String
        },
        prop:{
            type: String
        },
        labelWidth:{
            type: String,
            default: '100px' 
        },
    },
    data() {
        return {
            // key: value
            error:''
        }
    },
    mounted(){
        this.$on('validate',()=>{
            this.validate();
        });
    },
    methods:{
        validate(){
            //拿到规则
            const rule = this.form.rules[this.prop];
            //拿到输入的值
            const value = this.form.model[this.prop];
            // 校验描述对象
            const desc = { [this.prop]: rule };   

            let schema = new Schema(desc);
            return schema.validate({ [this.prop]: value }, errors => {
                if (errors) {
                this.error = errors[0].message;
                } else {
                // 校验通过
                this.error = "";
                }
            });
             
        }
    }
    
}
</script> 
<style scoped>
  .fy-form-item{
      display: flex;
      justify-content: center;
      align-items: center;  

  }
</style>