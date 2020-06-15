<template  >

<div  class = "bg">
<br>


  
   
  <div  class = "general-heading__header bg_heder"  >
    <H1 > TIME BANDITS </h1>
    
   
<p class = "general-heading__line"></p>

   <p class  = "general-heading__dek">Through the eyes of our Explorers, photographers, journalists, and filmmakers</p>
 
  </div>
   
     <div   class = "general-heading bg" style= "height200px" >
  
  </div>
<b-container     >


  <b-row  class = "" >
    
    <b-col   class =" col-4-xs   " >
      <p class = "general-heading__line_stories"></p>
      <p class = "promos_stories "> Recent Posts</p>
      
<a v-for ="post in postses" :key="post.id"  class  = "a_hover" href ='"/" + post.title'>
      <b-card   class= " card_body img-hover-zoom "
         bg-variant=""
 
    :img-src=post.images.url
    img-alt="Card Image"
    img-left
    img-height="100px;"
    text-variant="black"
   
    title.position ="5px"
  
   text-white ="color:white"
   sub-title-text-variant="black"
   img-width="100px"
  no-body=""

  >
<div  class = "card_body_content">
  <h4 >{{post.title}}</h4>
  <h6> ena mikro keimeno na mhn paramorfwnei </h6>
   </div> 
    
  </b-card>
  </a>



  
 

<br>
<div class = "button_center" >

<b-button   href ="/Κείμενα" size="sm" class =" primary "  variant="outline-light"  >Διάβασε Περισσότερα</b-button>
</div>
<br> 

    </b-col>

<b-col   class = "col-md-8 col-12 ">

<br class ="mobile-break">
<br class ="mobile-break">
<a class = "a_link_hover" href ='"/" + post.title'>
    <b-card v-for ="post in postses.slice(0,1)" :key="post.id" class= "card_text img-hover-zoom"
         bg-variant=""
 
    img-src="https://images.unsplash.com/photo-1554966681-fe80183de048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    
    img-alt="Card Image"
    overlay
    img-height="400px;"
    text-variant="white"
    v-bind:title=post.title
    sub-title= "ena mikro keimeno na mhn paramorfwnei"
   text-white ="color:white"
   sub-title-text-variant="black"
   align="top"
   
   
  

  >
    <b-card-text >
      
    </b-card-text>
  <b-button v-bind:href ='"/" + post.title' size="md" variant="outline-dark"  >Διαβασε περισσότερα</b-button>


    
  </b-card>
</a>
  <br>
  <b-card-group >

    <b-card v-for ="post in postses.slice(0,2)" :key="post.id" class= " card_text img-hover-zoom"
         bg-variant="white"

    :img-src=post.images.url
    img-alt="Card Image"
    img-top
    img-height="200px;"
    text-variant="dark"
    v-bind:title=post.title
    sub-title= "e3isou ena mikro keimeno "
    border-variant="dark"
    
    sub-title-text-variant="dark"
  
  >
 
     
    <b-card-text >
   
    </b-card-text>
    <b-button v-bind:href ='"/" + post.title' size="md" variant="outline-dark"  >Διαβασε περισσότερα</b-button>

  </b-card>



  
  </b-card-group>


</b-col>


<br>







    
   











    
    <b-col sm= "8" >

      
    </b-col>
   
  
  </b-row>
</b-container>
 
</div>


</template>

<script>

import gql from 'graphql-tag';
//GraphQL Query for POSTS

const postsQuery = gql`
{
  postses { 
    
    status
    createdAt
    id
    date
    title
    content {

      text
    }
    images {
      id
      url
    }

    
  }
  
}
  
`;

export default {
  
    data: () => ({ 
    assets:[],
    post: [],
    loading : 0,


  }),
  apollo: {
    postses: {
      query: postsQuery,
      loadingKey :'loading',
    },
  },

  
  methods: {

  },

    
    
    
  
}


</script>
<style scoped>

.mt-heading-indented {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
.promos_stories {
  display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    
    font-size: 200%;
    color : white;
  
}
.a_hover {
  color: azure;
}  

  

.a_link_hover_2 {

  display:flex;
  max-width: 50%;
 
}


.general-heading__header {
    font-family: 'GeoBrandBold';
    text-transform: uppercase;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color:rgb(255, 255, 255);
    padding-top : 8%;
    padding-bottom: 5%;
    font-weight: 1000px;
    font-size: 600px;
    letter-spacing: 3.5px;
    line-height: 1.19;
    margin: 0;
    text-align: center;
}

.card_text {
    font-family: 'GeoBrandBold';
    text-transform: uppercase;
    font-size: 60%;
    -webkit-font-smoothing: antialiased;
    color:rgb(0, 0, 0);
    background-color: black;


    text-align: center;
}
.card_text_1 {
    font-family: 'Arial Narrow', Arial, sans-serif;
    text-transform: lowercase;
    margin-top :2;
    text-align-last: left;
    font-size: 20%;
    -webkit-font-smoothing: antialiased;
    color:rgb(255, 255, 255);
    background-color: black;


    
}
.bg {
  background-color :black;
 
}
.bg_heder {
  
 
 background-size:100% auto;
  background-color :rgb(0, 0, 0);
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
    background-color: rgb(255, 255, 255);
    height: 5px;
    line-height: 10px;
    margin: 1px auto 0;
    width: 100px;
    
}
.general-heading__line_stories {
    background-color: rgb(255, 255, 255);
    height: 5px;
    line-height: 10px;
    margin: 0px ;
    width: 50px;
    
    
}
.general-heading__line_2 {
    background-color: rgb(255, 255, 255);
    height: 10px;
    
    margin: 21px auto 0;
    width: 200px;
}
.homepage_container__promos {
    padding-left:40px;
    flex: 0 0 auto;
    padding-right:40px;
   max-width : 60%;
    float: right;
}

.homepage_container__feed {
    padding-left: 60px;
    padding-right: 60px;
    margin-bottom: 0;
   
        -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-bottom: 50px;
    width: 100%;
    display: block;
    
    float: left;
}
.homepage_container__body {
 

    flex-direction: row;
        display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  padding :0;
    flex-direction: column-reverse;
    width: 100%;
    box-sizing: inherit;
    
    
   
    
}
    @media screen and (min-width: 720px)  {
        .mobile-break { display: none; }
        
        
        
    }
    @media screen and (max-width: 720px) {
        .button_center {
          text-align: center; 
          

    }
    }
.zoom {
  padding: 10px;
   /* Animation */
  
  height: 200px;
  margin: 0 auto;
}
.card_body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    padding-bottom: 20px;
    line-height: 1.8;
    color: #ffffff;
    text-align: left;
    
    
    background-color: rgb(0, 0, 0);
}
.card_body_content {
 
  font-family: Cochin, Georgia, Times, 'Times New Roman', serif;

      -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-height: 20px;
    padding: 5px;
    padding-top: 0px;
    padding-bottom:23px;
    padding-left:25px;
    margin-bottom:3px;
    

}

.img-hover-zoom {
  /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  text-emphasis: muted;
 
 
}
.text-muted {
  color :white;
}
/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
    transition: transform 0.5s, filter 0.5s ;
  
  transform: scale(1.1);
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform:scale(1.2)
}




</style>