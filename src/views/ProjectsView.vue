<template>
  <div class="project-container">
    <ProjectCard
      projectname="Python Playground"
      projectdescription="En nettside hvor man kan sende inn Pythonscripts som blir utført av en backend"
      githublink="https://github.com/haakonka/pythonplayground"
    />
    <ProjectCard
      projectname="Egen nettside"
      projectdescription="Nettsiden du ser på akkurat nå"
      websitelink="/#"
      githublink="https://github.com/haakonka/portfolio"
    />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectComponents/ProjectCard.vue";
export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
  },
};
</script>

<style scoped>
.project-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
@media only screen and (max-width: 660px) {
  .project-container {
    display: block;
  }
}
</style>
