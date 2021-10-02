<template>
  <div>
    <Marca/>
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Marca from './components/Marca.vue'

export default {
  name: 'App',
  components: { Marca, Header }
}

</script>

<style>
:root {
  --cor-destaque: #B22222;
}

@font-face {
  font-family: "padrao";
  src: url(./fonts/KumbhSans-Regular.ttf);
}

@font-face {
  font-family: "negrito";
  src: url(./fonts/KumbhSans-Bold.ttf);
}

@font-face {
  font-family: "starwars";
  src: url(./fonts/Starjedi.ttf);
}

body {
  margin: 0;
  background-color: #dddddd;
}
</style>
