<template  >

<div class = "black_and_white">
<p class = "general-heading__line_stories_title  " ></p>
<br>
   
 <div  class = "general-heading__header"  >
    <H1 > KEIMENA </h1>
   
<p class = "general-heading__line"></p>


 
  </div>
   
     <div  class = "general-heading bg" style= "height200px" >
  
  </div>

 <b-row >

<b-container   fluid = "md">
   
  <b-col  cols = "12" >
    
   <a href ='/About'>
  <b-card  class= " img-hover-zoom bg"
         bg-variant="dark"
    overlay
    img-src="../assets/kontrast_logo_black.png"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= "Λίγα λόγια για τη συνέλευση" 
    
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
    <b-card-text >
  
    </b-card-text>
    
  
  </b-card>
</a>
 
<br>
     
   <a href ='/No_name '>
  <b-card  class= " img-hover-zoom bg"
         bg-variant="dark"
    overlay
    img-src="../assets/no_borders.jpg"
    
    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= "Γι αυτούς που δεν έχουν όνομα" 
    
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
    <b-card-text >
  
    </b-card-text>
    
  
  </b-card>
</a>
<br>



   <a href ='/Oxi'>
  <b-card  class= "text-center img-hover-zoom bg test_title "
         bg-variant="white"
    overlay
    img-src="../assets/Bob_sfouggar.jpg"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    title= "5+1 σημεία γιατί η Μακεδονία δεν είναι μια και δεν είναι ελληνική
(και γιατί δεν παραχαράσσεται η ιστορία)"
   
    style = "max-width:  ;"

  >
    <b-card-text >
      
    </b-card-text>
    
  
  </b-card>
</a>
  <br>
    </b-col>
</b-container>

 </b-row>
</div>

</template>

<script>



export default {

 

  


    
    
    
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-color :black
}
.card-title{
    font-size:16px;
    margin-top:2%;
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
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
    transition: transform 0.3s, filter 0.3s ;
  
  transform: scale(1.1);
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1,1);
}



.general-heading__header {
    font-family: 'GeoBrandBold';
    text-transform: uppercase;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: black;
    padding-top : 6.8%;
    padding-bottom: 5%;
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
    background-color: rgb(161, 106, 167);;
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

.background_image {
  background: url(../assets/test_1_purple.jpg);
}

</style>
