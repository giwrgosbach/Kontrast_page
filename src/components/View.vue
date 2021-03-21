<template>
<div class = " black_and_white ">
<div  >
<br>
   
 <div  class = "general-heading__header_posters heading_title"  >
    <H1 > ΑΦΙΣΕΣ</h1>
   
<p class = "general-heading__line_posters"></p>


 
  </div>
  </div>
   
     <div  class = "black_and_white"  >
  
  </div>
  <br>
  <br>  
      <b-container fluid = "md"    class = "container_posters   " 
      >

     
    <!-- directive -->

    <div class="images black_and_white" v-viewer >
  
        <b-row fluid = "sm"  >
        <b-col cols="12" md=  "6"  >
       
      <b-img-lazy fluid-grow  src="../assets/Kamia_anoxh.jpg" style = "height:80%;" />
      <br>
            
      </b-col >
      <b-col 
 >  <b-img-lazy fluid-grow  src="../assets/Solidarity.jpg" style = "height:80%; flex" />

      </b-col>
       
           

        
        </b-row>

        <b-row class= "containe_posters">
  <b-img  lazy src="../assets/No_name.jpg" style = "height:100%; flex" />
        
       
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
    flex: auto;
    padding-right:40px;
    background-color : none;
   background-color:white;
  
}
.black_and_white {
  background_color: white;
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
.general-heading__line_poster_second {
    background-color:rgb(161, 106, 167);
    height: 5px;
    line-height: 10px;
    margin: 1px auto 0;
    width: 100px;
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
.general-heading__line_posters_second {
    background-color:rgb(161, 106, 167);
    height: 4px;
    line-height: 4px;
    margin-top:10%;
    margin-bottom:20px;
    width: 254px;
    align:left;
    
}
      @media screen and (min-width: 720px)  {
        .mobile-break { display: none; }
        
        
        
    }
    @media screen and (max-width: 720px) {
        .button_center {
          text-align: center; 
        }
        .heading_title {
          padding-top: 14%;
        }}
</style>