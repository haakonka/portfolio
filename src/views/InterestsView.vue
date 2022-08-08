<template>
<div class="interests-container">
  <InterestCard title="Programmering" description="Jeg har alltid hatt interesse for teknologi, 
  og derfor valgte jeg et fag som heter teknologi i praksis på ungdomsskolen. I dette faget lærte vi
  oss å lage nettsider, og dette vekket interessen min for programmering.
  Noen år senere tok jeg IT-fag på videregående, hvor vi lagde nettsider og flash apper med språket 'ActionScript'.
  Deretter startet jeg på dataingeniør-linjen på NTNU, hvor vi selvfølgelig lærer masse om programmering.
  Interessen min for programmering har bare blitt sterkere gjennom disse årene, og jeg trives godt med
  å lage forskjellige applikasjoner ved hjelp av programmering."> </InterestCard>
  <InterestCard title="Trening" description="Jeg driver med styrketrening på fritiden. Jeg liker å trene fordi det
  forbedrer både min fysiske helse og min psykiske helse. Tidligere har jeg vært
  troppsturner, som vil si at jeg turnet for et lag. I troppsturn har jeg blitt Norgesmester flere ganger, fått sølv i 
  nordisk mesterskap, og vært med på EM."> </InterestCard>
  <InterestCard title="Lese bøker" description=" Jeg leste en del bøker før, og i den siste tiden har interessen min for å lese
  bøker blusset opp igjen. For øyeblikket leser jeg en bok som heter 'Lifespan: Why we age and why we don't have to' av Dr. David
  A. Sinclair. Denne handler om hvordan mennesker kan leve friskt lenger, og viser frem mye spennende forskning innenfor
  biologi og medisin. I tillegg diskuterer den de moralske dilemmaene ved at mennesker kan leve lenger."></InterestCard>
</div>
</template>

<script>
import InterestCard from '@/components/InterestCard.vue'
export default {
  name: "InterestsView",
  components: {
    InterestCard
}
}
</script>

<style>

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>