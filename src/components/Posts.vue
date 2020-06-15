<template  >

<div  id = "Posts" class = "bg">
<br>
   
 <div  class = "general-heading__header"  >
    <H1 > KEIMENA </h1>
   
<p class = "general-heading__line"></p>


 
  </div>
   
     <div  class = "general-heading bg" style= "height200px" >
  
  </div>

 <b-row >

<b-container v-for ="post in postses" :key="post.id" fluid = "sm">
   
  <b-col  cols = "12" class = "bg">
    
   <a href ='"/"'>
  <b-card  class= "text-center img-hover-zoom bg"
         bg-variant="dark"
    overlay
    :img-src=post.images.url
    img-alt="Card Image"
    img-height="300px;"
    text-variant="white"
    :title=post.title
    :sub-title=post.content.text
    style = "max-width:  ;"

  >
    <b-card-text >
      
    </b-card-text>
    <b-button v-bind:href ='"/" ' id primary>Διαβασε περισσότερα</b-button>
  
  </b-card>
</a>
<br>

  <br>
  
    </b-col>
</b-container>

 </b-row>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-color :black
}
.img-hover-zoom {
  /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
    transition: transform 1s, filter 2s ease-in-out;
  
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
    color:rgb(255, 255, 255);
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
    background-color: rgb(255, 255, 255);
    height: 5px;
    line-height: 10px;
    margin: 1px auto 0;
    width: 100px;
    
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
</style>
