<template>
  <div class="home-container">
    <h1>{{ msg }}</h1>
    <p>Dataingeniørstudent på NTNU</p>
    <p>21 år gammel</p>
    <div class="container">
      <a href="https://www.github.com/haakonka">
        <img alt="Github" src="../assets/githublight32.png"
      /></a>
      <a href="mailto:haakon.kanter@gmail.com">
        <span class="material-icons"> mail </span>
      </a>

      <a href="https://discordapp.com/channels/@me/320173768724971520/">
        <img class="discord" alt="Discord" src="../assets/discordlight.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
a {
  color: rgba(234, 240, 246, 0.8);
}
.home-container {
  margin: auto 0;
  border-radius: 0.6em;
  padding: 2em;
  border: 2px solid #356d8e;
}
.material-icons {
  font-size: 32px;
}
h3 {
  margin: 40px 0 0;
}

img {
  padding-right: 1em;
  padding-left: 1em;
}

.discord {
  padding-left: 0.5em;
  object-fit: contain;
  width: 32px;
  height: 32px;
}
</style>
