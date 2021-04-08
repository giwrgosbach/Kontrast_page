<template  >

<div  id = "Posts" class = "black_and_white">
<br>
  
 <div  class = "general-heading__header_posters heading_title "  >
 
    <H1 > ΔΡΑΣΕΙΣ </h1>
   
<p class = "general-heading__line"></p>


 
  </div>
   <br>
   <br>
     <div  class = "general-heading bg"  >
  
  </div>

 <b-row >

<b-container   fluid = "md">
  <b-row cols = "1" cols-sm = "2">
  <b-col   order = "1" >
    
   <a href ='/Storm'>
  <b-card  class= "text-center img-hover-zoom bg break"
         bg-variant="dark"
    overlay
    img-src="../assets/Acts/IMG_20201124_005755.jpg"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= "Τι ωραία καταιγίδα που έρχεται..."
    sub-title=""
    sub-title-text-variant="white"
    

  >
    <b-card-text >
      
    </b-card-text>
    <b-button style ="margin-top : 30%;" class ="button_color" id variant ="outline-light">Διαβασε περισσότερα</b-button>
  
  </b-card>
</a>
</b-col>

<b-col>

     <a href ='/'>
    
  <b-card  class= "text-center img-hover-zoom bg"
         bg-variant="dark"
    overlay
    img-src="../assets/Acts/trick.jpg"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= ""
    sub-title=""
    sub-title-text-variant="white"
    

  >
    <b-card-text >
      
    </b-card-text>
    
  
  </b-card>
</a>

</b-col>



</b-row>
<br>
  <b-row  fluid = "md">
  
  <b-col   >
         <a href ='/'>
     <b-card-group deck>
  <b-card  class= "text-center img-hover-zoom bg"
         bg-variant="dark"
    overlay
    img-src="../assets/Acts/pano_3.jpg"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= ""
    sub-title=""
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
    <b-card-text >
      
    </b-card-text>
   
  </b-card>
    <b-card  class= "text-center img-hover-zoom bg"
         bg-variant="dark"
    overlay
    img-src="../assets/Acts/pano_6.jpg"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= ""
    sub-title=""
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
    <b-card-text >
      
    </b-card-text>
   
  </b-card>
  </b-card-group>
</a>





</b-col>

<b-col cols = "12" >
<br>
     <a href ='/'>
     <b-card-group deck>
  <b-card  class= "text-center img-hover-zoom bg"
         bg-variant="dark"
    overlay
    img-src="../assets/Acts/Pano_2.jpg"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= ""
    sub-title=""
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
    <b-card-text >
      
    </b-card-text>
   
  </b-card>
    <b-card  class= "text-center img-hover-zoom bg"
         bg-variant="dark"
    overlay
    img-src="../assets/Acts/pano_5.jpg"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= ""
    sub-title=""
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
    <b-card-text >
      
    </b-card-text>
   
  </b-card>
  </b-card-group>
</a>

</b-col>

</b-row>
</b-container>

 </b-row>
 <br>
</div>

</template>

<script>



export default {

 

  


    
    
    
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.bg {
  background-color :black
}
.posts {
  padding-left :200px;
  padding-right:200px;
  margin-left: 50px;
  margin-right: 50px;
}
.img-hover-zoom {
  /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  text-emphasis: muted;
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
    transition: transform 0.6s, filter 0.3s ;
  
  transform: scale(0.5.1);
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform:scale(1.2)
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
.general-heading__line {
    background-color: rgb(161, 106, 167);
    height: 5px;
    line-height: 10px;
    margin: 1px auto 0;
    width: 160px;
    
}
 

.hub-template.titleAndDek-wrapper .hubTitle .main-title {
    font-family: 'GeoBrandBold', 'CenturyGothic', AppleGothic, Gill Sans, Gill Sans MT, sans-serif;
    text-transform: uppercase;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    font-size: 38px;
    letter-spacing: 3.5px;
    line-height: 1.105;
    max-width: 66.66667%;
}
.md-title.sentence-case.main-title {
    font-family: 'GeoEditBold', 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Helvetica, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    letter-spacing: 0;
    font-size: 38px;
    line-height: 1.211;
}
.button_color {
  background-color: rgb(161, 106, 167);
  

}
.background_image {
  background: url(../assets/test_1_purple.jpg);
}
      @media screen and (min-width: 720px)  {
        .mobile-break { display: none; }
        
        
        
    }
    @media screen and (max-width: 720px) {
        .button_center {
          text-align: center; 
        }
        .break {
          margin-top:20px;
        }
        .line {
          width:40px;
        }

        .heading_title {
          padding-top: 14%;
        }}

</style>
