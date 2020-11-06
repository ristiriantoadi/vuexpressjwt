<template>
  <div>
      <h1>Dashboard</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Dashboard",
    created(){
        const options={
            headers:{'authorization':'BEARER '+this.$store.state.token}
        }
        axios.get('http://localhost:5000/dashboard',options)
        .then(res=>{
            console.log("hello")
            console.log(res.status)
        })
        .catch(err=>{
            if(err)
                this.$router.push({path:'/login'})
          
        })
    }
}
</script>

<style>

</style>