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
            ""
        },
                {
          vmid: "ogtitle",

        },
                        {
          vmid: "type",

        },
        {
          vmid : "ogimage"
          content : "../assets/kontrast_logo_black.png"
        }

      ]

    
  
    }}}
    
  
  
  
  

</script>

<style>

</style>
