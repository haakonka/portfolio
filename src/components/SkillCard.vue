<template>
  <button @click="displayInfo('vue')">
    <img src="../assets/progskills/vuejs-icon.svg" alt="Vue" />
  </button>
  <button @click="displayInfo('javascript')">
    <img src="../assets/progskills/javascript.svg" alt="Javascript" />
  </button>
  <button @click="displayInfo('java')">
    <img src="../assets/progskills/java.svg" alt="Java" />
  </button>
  <button @click="displayInfo('python')">
    <img src="../assets/progskills/python.svg" alt="Python" />
  </button>
  <button @click="displayInfo('docker')">
    <img src="../assets/progskills/docker.svg" alt="Docker" />
  </button>
  <button @click="displayInfo('c++')">
    <img src="../assets/progskills/C++.svg" alt="C++" />
  </button>
  <button @click="displayInfo('SQL')">
    <img src="../assets/progskills/sql.svg" alt="SQL" />
  </button>
  <button @click="displayInfo('postman')">
    <img src="../assets/progskills/postman.svg" alt="Postman" />
  </button>
  <button @click="displayInfo('git')">
    <img src="../assets/progskills/git.svg" alt="Git" />
  </button>
  <textarea disabled id="info-box"></textarea>
</template>

<script>
export default {
  name: "SkillCard",
  data: function () {
    return {
      clicked: false,
    };
  },
  methods: {
    johnMary(str) {
      let maryString = "Mary";
      let regExpMary = new RegExp(maryString, "g");

      let numberOfMary = str.match(regExpMary);
      console.log(numberOfMary.length);
      let johnString = "John";
      let regExpJohn = new RegExp(johnString, "g");
      let numberOfJohn = str.match(regExpJohn);

      if (numberOfJohn.length == numberOfMary.length) {
        console.log("True");
      }
      console.log("false");
    },

    displayInfo(programminglang) {
      let infoBox = document.getElementById("info-box");

      switch (programminglang) {
        case "vue":
          infoBox.textContent =
            "Vue.js har jeg brukt siden starten av 2022, " +
            "til både større og mindre prosjekter. Denne nettsiden er laget med Vue.";
          break;
        case "javascript":
          infoBox.textContent =
            "JavaScript var det første programmeringsspråket jeg brukte, grunnet at jeg tok" +
            " et teknologiemne på ungdomsskolen hvor vi lagde nettsider. Etter dette har jeg brukt JavaScript til frontenden i " +
            "prosjektene jeg har laget, og jeg har derfor en god del erfaring med språket.";
          break;
        case "java":
          infoBox.textContent =
            "Java har jeg brukt siden 2020, og er det språket jeg har mest erfaring med. " +
            " Jeg har mest erfaring med java, ettersom det er språket vi hovedsakelig bruker på NTNU." +
            " Backenden på webapplikasjonene jeg har laget er skrevet i Java.";
          break;
        case "python":
          infoBox.textContent =
            "Python har jeg brukt i mange år nå, som regel i forbindelse med matte eller statistikk." +
            " Jeg har også brukt det til å lage algoritmer, deriblant en som kan løse sudokuer. " +
            "Jeg har også lekt meg med maskinlæring i Python, og " +
            " tar for øyeblikket et maskinlæringsemne på NTNU.";
          break;
        case "docker":
          infoBox.textContent =
            "Docker har jeg ikke så mye erfaring med, men jeg har brukt det til en nettside" +
            " hvor man sender inn pythonscripts og lar en backend kjøre det." +
            " Selv om jeg ikke har mye erfaring med Docker, syns jeg det er spennende og jeg gleder meg til å få prøvd det mer ut.";
          break;
        case "c++":
          infoBox.textContent =
            "C++ er det siste språket jeg har prøvd meg på, og jeg har derfor ikke så mye erfaring med det. C++ har jeg hovedsakelig brukt til nettverksprogrammering." +
            " For øyeblikket tar jeg et C++ emne på NTNU.";
          break;
        case "SQL":
          infoBox.textContent =
            "SQL er språket jeg har brukt til databasene jeg har" +
            " laget/brukt. Her har jeg brukt mest PostgreSQL og noe MySQL.";
          break;
        case "postman":
          infoBox.textContent =
            "Postman bruker jeg til å teste API-endepunkter under utvikling av webapplikasjoner." +
            " Jeg har brukt postman siden starten av 2022.";
          break;
        case "git":
          infoBox.textContent =
            "Git er jeg kjent med ettersom jeg bruker GitLab eller GitHub for å samarbeide med andre.";
          break;
      }
    },
  },
};
</script>

<style scoped>
button {
  background-color: #121212;
  border: none;
}
img {
  height: 64px;
  margin: 2em;
}
img:hover {
  cursor: pointer;
}
textarea {
  border: none;
  outline: none;
  resize: none;
  font-size: large;
  background-color: #121212;
  color: rgba(234, 240, 246, 0.8);
  opacity: 1;
  text-align: center;
  width: 50%;
  height: 20em;
  display: block;
  margin: auto;
  margin-top: 5em;
  /* Text color for safari on iOS */
  -webkit-text-fill-color: rgba(234, 240, 246, 0.8);
  -webkit-opacity: 1;
}

@media only screen and (max-width: 400px) {
  img {
    height: 32px;
  }
}

@media only screen and (max-width: 600px) {
  img {
    height: 48px;
  }
  textarea {
    width: 85%;
    margin-top: 2em;
  }
}
</style>
