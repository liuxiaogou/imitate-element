<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <fy-form :model="form" :rules="rules" ref ="ruleForm">
        <fy-form-item :label="user_name" prop="name">
            <fy-input type="text" v-model="form.name" @input="getValue"  @focus="getFocus"  placeholder="请输入用户名"></fy-input>  
            
        </fy-form-item>
        <fy-form-item :label="password" prop="psd">
           <fy-input type="text" v-model="form.psd" @input="getValue"  @focus="getFocus" placeholder="请输入密码"></fy-input>  
        </fy-form-item>
        <fy-form-item>
           <button @click="onSubmit('ruleForm')">表单提交</button>
        </fy-form-item>
    </fy-form>
    <div>{{form.name}}</div>
  </div>
</template>

<script>
// import Notice from "@/components/Notice.vue";

import fyInput from '@/components/form/fyInput';
import fyFormItem from '@/components/form/fyFormItem';
import fyForm from '@/components/form/fyForm';
export default {
  name: 'HelloWorld',
  components: {
    'fy-input':fyInput,
    'fy-form-item':fyFormItem,
    'fy-form':fyForm,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:'输入框',
      user_name:'用户名',
      password:'密码',
      form:{
        name:'',
        psd:''
      },
      rules: {
          name: [{ required: true, message: '请输入用户名'},],
          psd: [{ required: true, message: '请输入密码'}]
      }
    }
  },
  methods: {
    getValue(value) {
        console.log(value);
    },
    getFocus(e){
      console.log('监听到获取焦点');
    },
    onSubmit(name){
      this.$refs[name].validate((valid)=>{
          if(valid){
            alert("校验成功");
          }else{
             console.log('error submit!!');
          }
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
