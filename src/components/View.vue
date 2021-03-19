<template>
<div class = " black_and_white ">
<div  id = "Posters" >
<br>
   
 <div  class = "general-heading__header_posters"  >
    <H1 > ΑΦΙΣΕΣ</h1>
   
<p class = "general-heading__line_posters"></p>


 
  </div>
  </div>
   
     <div  class = "general-heading " style= "height:px" >
  
  </div>
  <br>
  <br>  
      <b-container  class = "container_posters bg_none " fluid = "md" 
      >

     
    <!-- directive -->
  
    <div class="images" v-viewer fluid = "sm">
        <b-row fluid = "sm" style ="height:860px;" cols = "2"  >
        
       
      <b-img src="../assets/Kamia_anoxh.jpg" style = "height:80%;" fluid/>
      
        
        <b-col  fluid>
            <b-img src="../assets/Solidarity.jpg"  style = "height:60%;" fluid/>
        </b-col>
        </b-row>
        <b-row>
        <b-col fluid>
        <b-img src="../assets/No_name.jpg" style = "height: 100%;" fluid />
        </b-col>
       
        </b-row>
     
   
    </div>
  
    <!-- component -->
    <viewer :images="images">
      <img v-for="src in images" :src="src" :key="src">
    </viewer>
  
    </b-container >
</div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'


  export default {
    data() {
      
    }
  }
</script> 

<style >
.container_posters {
    padding-left:40px;
    flex: 0 0 auto;
    padding-right:40px;

   background-color:rgb(0, 0, 0);
  
}
.background_image {
  background: url(../assets/test_1_purple.jpg);
  background-size: cover;
}
.bg_none {
  background : none;
}
.general-heading__header_posters {
    font-family: 'GeoBrandBold';
    text-transform: uppercase;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color:black;
    padding-top : 6.8%;
    padding-bottom: 1%;
    font-weight: 1000px;
    font-size: 600px;
    letter-spacing: 3.5px;
    line-height: 1.19;
    margin: 50;
    text-align: center;
}

.general-heading__dek {
    font-family: Segoe UI, ;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-weight: 100;
   font-size: 180px;
    letter-spacing: 0;
    letter-spacing: .1px;
    font-size: 25px;
    line-height: 1.5;
    margin: 16px 0 23px;
    text-transform: initial;

}
.general-heading__line_posters {
    background-color:rgb(161, 106, 167);
    height: 5px;
    line-height: 10px;
    margin: 1px auto 0;
    width: 100px;
    
}
</style>