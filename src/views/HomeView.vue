<template>
  <div class="container">
    <img alt="Profilbilde" src="../assets/profilepic.jpg" />
    <HomeCard msg="Haakon T. Kanter"/>
  </div>
</template>

<script>
import HomeCard from '@/components/HomeCard.vue'

export default {
  name: 'HomeView',
  components: {
    HomeCard
}
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  margin: auto;
}

img{
  margin: 1em;
  border-radius: 1em;
  object-fit: cover;
  width: 20em;
  height: 26.6em;
   }

@media only screen and (max-width: 600px) {
 
  .container{
    display: block;
    margin: 1em;
  }
  img{
    object-fit: contain;
    width: 10em;
    height: 13.3em;
  }
}
</style>
