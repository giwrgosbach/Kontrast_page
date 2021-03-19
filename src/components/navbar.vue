<template >
<div class= "mx-auto" style="body{padding-top:10px;}" >
  <b-navbar toggleable="lg" type="light" variant="white" fixed ="top" class = "navbg navbar_font"
  >
    <b-navbar-brand href="/" >Kontrast</b-navbar-brand>


    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <b-nav-item v-bind:href ="'/posts'" >Κείμενα</b-nav-item>
        <b-nav-item href= "/View" >Αφίσες</b-nav-item>
         <b-nav-item href="/Network" >Δράσεις</b-nav-item>
         
      </b-navbar-nav>
      
  
    
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
     
        </b-nav-form>




      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>


</template>


<script>





export default {
    name: 'navbar',
         


    }






</script>

<style scoped>
.navbg {
    
      box-shadow: -6px 0 white, 6px 0 rgb(255, 255, 255), 1px 3px 6px rgba(243, 243, 243, 0.15);
      font-weight: 1000;
      color : rgba(206, 17, 149, 0.15);
}
.navbar_font{
  font-size:20px;
}
.navbar-brand {
  font-size : 32px;
}
</style>