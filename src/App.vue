<template>
  <div>
    <Marca />
    <Header />

    <div id="container">
      <Cadastro />
    </div>
  </div>
</template>

<script>
import Cadastro from "./components/Cadastro.vue";
import Header from "./components/Header.vue";
import Marca from "./components/Marca.vue";

export default {
  name: "App",
  components: { Marca, Header, Cadastro },
};
</script>

<style>
:root {
  --cor-destaque: #b22222;
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

#container {
  display: flex;
  padding: 20px;
}
</style>
