<template>
<div>

<navbar></navbar>



<router-view></router-view>

<foot></foot>


</div>

</template>

<script>




 


import navbar from "./components/navbar"
import foot from "./components/footerVue"




export default {
  name: 'app',


  components: {
    
  
    navbar,
    foot},
      metaInfo() {
    return {
      title: "Kontrast",
     

    
  
    }}}
  
  
  
  

</script>

<style>

</style>
