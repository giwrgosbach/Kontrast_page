<template>
<div >

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
            meta: [
        {
          vmid: "description",
          name: "description",
          content:
            "hello world, this is an example of adding a description with vueMeta"
        },
                {
          vmid: "ogtitle",

        },
                        {
          vmid: "type",

        }

      ]

    
  
    }}}
    
  
  
  
  

</script>

<style>

</style>
