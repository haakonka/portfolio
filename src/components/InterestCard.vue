<template>
  <div class="container">
    <h2 class="title"> {{title}} </h2>
    <!--  <img :src="require(`@/assets/interests/${filename}`)"/> -->
    <div class="description">
      <p> {{description}}</p>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'InterestCard',
  props: {
    title: String,
    description: String
    /*filename: String */
  }
}
</script>

<style scoped>
.container:last-child{
  border-bottom: none;
}

.container{
    width: 75%;
    margin: auto;
    padding: 3em;
    border-bottom: 2px solid  #356D8E;
}

@media only screen and (max-width: 660px) {
  .container{
      padding: 1em;
    }
   p{
    font-size: small;
   }
 }
</style>