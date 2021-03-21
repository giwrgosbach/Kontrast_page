<template  >
<div id = "SinglePost" class="bg"  >
<br>
  <b-container  >

    <b-col cols ="12">
 
  <b-card style ="" class =  "bg" 
   

   
   
   img-src = "../assets/Acts/IMG_20201124_005755.jpg"
    img-alt="Card Image"
    img-height="500px;"
    img-width ="100px;"
    text-variant="dark"
    
    sub-title
    
    border-variant="white"

  >
            <h2 class = "header text-center ">  Τι ωραία καταιγίδα που έρχεται….
				</h2>
        <br>

      <b-card-text  >

      <p  class ="css-exrw3m mobile_text"> Μετά και τα γεγονότα της νέας Σμύρνης, την εκκένωση της κατειλημμένης πρυτανείας του ΑΠΘ, την βίαιη καταστολή διαδηλώσεων, τις τυχαίες συλλήψεις, τις στημένες δικογραφίες και το ξύλο στη ΓΑΔΑ, πολλές πορείες πραγματοποιήθηκαν σήμερα στις γειτονιές της Αθήνας και σε άλλες πόλεις. 
Χτες και σήμερα οργανώθηκαν συγκεντρώσεις αλληλεγγύης στους συλληφθέντες των τελευταίων ημερών στη ΓΑΔΑ και στην Ευελπίδων και  συγκέντρωση/μικροφωνική αλληλεγγύης στους μετανάστες στην πλατεία Πρωτομαγιάς. Παράλληλα, τις τελευταίες μέρες έχουν καταληφθεί πρυτανείες σχολών από φοιτητές. 
      </p>
     <p  class ="css-exrw3m mobile_text"> Εικόνες μιας αντίδρασης που πλέον ξεφεύγει από συζητήσεις μεταξύ φίλων, δεν είναι πλέον ατομικές σκέψεις στις ώρες απομόνωσης. Έκφραση μιας οργής που βιώνεται καθημερινά στη διαδρομή σπίτι δουλειά/δουλειά σπίτι  και πλέον μετατρέπεται σε νέα συλλογικοποίηση, πολιτικά αιτήματα και δράσεις.
    </p> 
 <h4 class = "footer_for_this_one text-center "> Είναι πλέον προφανές ότι ο φόβος έχει αλλάξει ήδη στρατόπεδο.
				</h4>


      </b-card-text>



    </b-card>   
    </b-col>
  

  </b-container>
</div>

</template>

<script>





export default {
  name: 'Fascism',
  data(){
    return {
      mainProps: { blank: true,  width: 75, height: 75, class: 'm1' }
    }
  }
  
}

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, html {
    height: 100%;
  }
  .container {
    max-width:auto;

  }
  .footer_for_this_one {
      font-size :32px;
  }

  .header {
      font-size :50px;
  }
  .bg {
    padding-top  : 2%;
    /* The image used */
    background-color : rgb(255, 255, 255);

    /* Half height */
    height: 20%;
   

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bob {
    height : 20%;

  }
  .mobile_text {
    
   
    font-family: nyt-imperial,georgia,'times new roman',times,serif;
    font-size: 15px;
    line-height: 1.5625rem;
    text-align :justify;
    width: 100%;

  
  }
      @media screen and (min-width: 720px)  {
        .mobile-break { display: none; }
        
        
        
    }
    @media screen and (max-width: 720px) {
        .button_center {
          text-align: center; 
          

    }
    .card-title {
      font-size: 13px;
      text-align: center;


    
    }
    .container {
      max-width :auto ;
      padding-right:1px;
      padding-left:1px;
      

    } 
    
    }
  
</style>
