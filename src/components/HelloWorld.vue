<template>
<div id = "helloworld">
<div>
  <b-card class-= "text-center"
   overlay
    img-src="@/assets/timeobsessed.jpg"
    img-alt="Card Image"
    text-variant="dark"
    v-bind:title=blog.title
    :sub-title=blog.content
    style = "max-width:  ;"

  >
    <b-card-text >
      
    </b-card-text>
  </b-card>
</div>
</div>             
</template>

<script>
export default {
  data() {
    return {
      blog:{
        title: "TIME BANDITS",
        content: "Από παιδιά ακούμε πως ο χρόνος είναι χρήμα.Ακούγεται βλακεία και καθόλου ρομαντικό. Αλλά ξέρετε ποιο είναι το πρόβλημα? Ότι είναι μια κυνική παραδοχή πέρα για πέρα αληθινή, απ' τα λίγα πράγματα που μας προσφέρει δωρεάν ο καπιταλισμός",
       

      }
      
    }
  },
  name: 'HelloWorld',
  props: {
    
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
