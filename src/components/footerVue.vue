<template>
  <!-- Footer -->




  <div class = 'black_and_white  '>
  <div  class = "general-heading__header black_and_white"  >
    <h6 style = "color: black" > Social</h6>
<div class = ' black_and_white' >

    <b-link  href = 'https://www.facebook.com/Kontrast-103827028267149'>
     <b-img class = 'icons'  img src = '../assets/fb.png'> </b-img>
     </b-link>
    <b-link style = "padding-left: 2%;"  variant = 'black_and_white' href = 'https://www.instagram.com/kontras.t?igshid=nj1uknt1hb47'><b-img class = 'icons'  img src = '../assets/ig.png'>giati den fainetai </b-img></b-link>
    



  <br>
  <br>
  <a class = "a_hover" href  ="/">
  <p class = "footer_note" >  Kontrast</p>
  </a>
</div>
  
  </div>
   
   
  
  </div>





  <!-- Footer -->
</template>

<script>


  export default {
    name: 'foot',
    components: {


     
      
   
    }
  }
</script>


<style >

/* Style all font awesome icons */

.icons {
  height :40px;
  width: 40px;
}
.footer_note {
  font-size: 15px;
  color: black; 
  text-decoration: white;
}
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: black;
 }


.bg {
  background-color : black
}
.fa {
  align-content: center;
  padding: 10px;
  font-size: 10px;
  width: 100px;
  text-align: center;
  text-decoration: none;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.9;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #d1d1d1;
  color: white;
  padding :10px
}
.fa-instagram {
  background: #932ba8;
  color: white;
  padding :10px
}
.footer_ending {
    font-family: "GeoBrandBold,CenturyGothic,AppleGothic,Gill Sans,Gill Sans MT,sans-serif";
    font-size: 20px;
    letter-spacing: 1.5px;
    line-height: 1.19;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    color: black;
}

.general-heading__header {
    font-family: 'GeoBrandBold';
    text-transform: uppercase;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color:rgb(255, 255, 255);
    padding-top : 2%;
    padding-bottom: 2%;
    font-weight: 100px;
    font-size: 50px;
    letter-spacing: 1.5px;
    line-height: 1.19;
    margin: 0;
    text-align: center;
}
.footnote {
  padding-top :12px
}

.footer {
  background-color:black;
  font-weight :50px;
  font-size : 22px;
  font-family : "" 
}
</style>