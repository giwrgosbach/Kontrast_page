<template  >

<div class = "black_and_white">
<b-container>
<br>
   
 <div  class = "general-heading__header_posters heading_title "   >
    <H1 > KEIMENA </h1>
   
<p class = "general-heading__line"></p>


 
  </div>
   
     <div  class = "general-heading bg" style= "height200px" >
  
  </div>

 <b-row >


   
  <b-col  cols = "12" >
    
   <a class ="a_hover" href ='/About'>
  <b-card  class= " img-hover-zoom bg"
         bg-variant="white"
    img-bottom
    img-src="../assets/kontrast_logo_black.png"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="dark"
    
    
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
  <h4>Λίγα λόγια για τη συνέλευση </h4>
    <b-card-text >
  
    </b-card-text>
    
  
  </b-card>
</a>
 
<br>
    <a class = 
    "a_hover" href ='/one_year'>
  <b-card  class= " img-hover-zoom bg"
         bg-variant="white"
    img-bottom
    img-src="../assets/menoume.png"

    img-alt="Card Image"
    img-height="300px;"
    text-variant="dark"
    
    
    sub-title-text-variant=""
    style = "max-width:  ;"

  >
  <h4 >Προσπαθώντας μια αποτίμηση ενός χρόνου πανδημίας</h4>
    <b-card-text >
  
    </b-card-text>
    
  
  </b-card>
</a>  
<br>
   <a class = "a_hover" href ='/No_name '>
  <b-card  class= " img-hover-zoom bg"
         bg-variant="white"
    img-bottom
    img-src="../assets/no_borders.jpg"
    
    img-alt="Card Image"
    img-height="300px;"
    text-variant="dark"
    title= "Γι αυτούς που δεν έχουν όνομα" 
    
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
    <b-card-text >
  
    </b-card-text>
    
  
  </b-card>
</a>
<br>
  <a class = "a_hover" href ='/Fascism '>
  <b-card  class= " img-hover-zoom bg"
         bg-variant="white"
    img-bottom
    img-src="../assets/nonazis.png"
    
    img-alt="Card Image"
    img-height="300px;"
    text-variant="dark"
    title= "Ο φασισμός πέθανε, ζήτω ο φασισμός " 
    
    sub-title-text-variant="white"
    style = "max-width:  ;"

  >
    <b-card-text >
  
    </b-card-text>
    
  
  </b-card>
</a>
<br>


   <a class = "a_hover" href ='/Oxi'>
  <b-card id ="last_card" class= " img-hover-zoom bg   "
         bg-variant="white"
    img-bottom
    img-src="../assets/ethnic.jpg"
    title-variant = "card_title"
    img-alt="Card Image"
    img-height="300px;"
    text-variant ="dark"
    title= "5+1 σημεία γιατί η Μακεδονία δεν είναι μια και δεν είναι ελληνική
(και γιατί δεν παραχαράσσεται η ιστορία)"
   
    

  >
    <b-card-text >
      
    </b-card-text>
    
  
  </b-card>
</a>
  <br>
    </b-col>


 </b-row>
 </b-container>
</div>

</template>

<script>



export default {

 

  


    
    
    
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.black_and_white{

  background-color :white;
  max-width: 100%;

  
  
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
    font-family: "GeoBrandBold,CenturyGothic,AppleGothic,Gill Sans,Gill Sans MT,sans-serif";
    font-size: 20px;
    letter-spacing: 3.5px;
    line-height: 1.19;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    color : black;
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


.titles {
  font-size: 42px;
  font-family: 'GeoEditBold', 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Helvetica, Arial, sans-serif;
}
.card-title {
    font-size: 28px;
    
}

</style>
