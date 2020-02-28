<template>
    <div class="fy-form-item">
      <label class="fy-label" :style="{width:labelWidth}">{{label}}</label>  
      <slot></slot> 
      <!-- <p v-if="error">{{error}}</p> -->
    </div>
</template> 
<script>
import Schema from "async-validator";
export default {
    name:"fyFormItem",
    components: {
        // New,
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        prop:{
            type: String,
            default: '' 
        },
        labelWidth:{
            type: String,
            default: '100px' 
        }
    },
    data() {
        return {
            // key: value
        }
    },
}
</script> 
<style scoped>
  .fy-form-item{
      display: flex;
      justify-content: center;
      align-items: center;  

  }
</style>