<template>
  <div>
      <h1>Login</h1>
      <input type="text" v-model="username" placeholder="username" >
      <br>
      <input type="wword" v-model="password" placeholder="password">
      <br>
      <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Login",
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        login(){
            axios.post('http://localhost:5000/login',{
                username:this.username,
                password:this.password
            })
            .then(res=>{
                console.log(res.data.token)
                this.$store.commit('saveToken',res.data.token)
                this.$router.push({path:'/dashboard'})
            })
            .catch(err=>{
                console.log(err)
            }) 
        }
    }
}
</script>

<style>

</style>