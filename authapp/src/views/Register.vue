<template>
  <div>
      <h1>Register</h1>
      <input type="text" v-model="username" placeholder="username" >
      <br>
      <input type="password" v-model="password" placeholder="password">
      <br>
      <button @click="register">Register</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Register",
    data(){
        return {
            username:"",
            password:""
        }
    },
    methods:{
        register(){
            axios.post('http://localhost:5000/register',{
                username:this.username,
                password:this.password
            })
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            }) 
        }
    }
}
</script>

<style>
input[type="text"],input[type="password"]{
    margin-bottom: 10px;
}

</style>