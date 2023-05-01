<template>
  <div class="container">
    <h2 class="project-name"> {{projectname}} </h2>
    <div class="project-description">
      <p> {{projectdescription}}</p>
    </div>
    <a v-if="websitelink" :href=websitelink> Nettside</a> <span v-if="websitelink"> | </span>
    <a :href=githublink> GitHub</a>
  </div>
 
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    projectname: String,
    projectdescription: String,
    websitelink: String,
    githublink: String,
  }
}
</script>

<style scoped>
 
  a{
    color: rgba(234, 240, 246, 0.8);
  }
 .container{
  border: 2px solid  #356D8E;
  padding: 2em;
  max-width: 15em;
  border-radius: 0.6em;
  margin: 2em;
  display: block;
 }
 
  @media all and (min-width: 660px) {
   .container {
     width: 15em;
   }
  }

  @media all and (max-width: 600px){
    h2 {
      font-size: larger;
    }
  }


 
</style>