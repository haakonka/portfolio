<template>
  <nav>
    <router-link to="/">HJEM</router-link>
    <router-link to="/projects"> PROSJEKTER</router-link>
    <router-link to="/skills"> FERDIGHETER</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
body {
  background-color: #121212;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(234, 240, 246, 0.8);
}

nav {
  padding: 30px;
}

nav a {
  margin-left: 0.5em;
  margin-right: 0.5em;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}

nav a:hover {
  color: #008ea7;
  transition: 0.5s;
}

nav a.router-link-exact-active {
  color: #008ea7;
}

@media only screen and (max-width: 600px) {
  nav {
    padding: 0px;
    text-align: center;
    margin: auto;
  }
  nav a {
    font-size: small;
    display: inline-block;
    margin-right: 0.5em;
    margin-left: 0.5em;
  }

  nav a:hover {
    font-size: small;
    transition: 0s;
  }

  nav a.router-link-exact-active {
    font-size: small;
  }
}

@media only screen and (max-width: 380px) {
  nav a {
    font-size: small;
  }

  nav a.router-link-exact-active {
    font-size: small;
  }
}
</style>
