<template>
  <div>
      <img src="../img/LogoResistencia.png" alt="Resistencia">
      <span>resistência</span>
  </div>
</template>

<script>
export default {
    name: "Marca",
};
</script>

<style scoped>
div {
    background-color: white;
    font-family: "starwars";
    padding: 10px;
}

img {
    width: 40px;
    vertical-align: middle;
    margin-right: 10px;
}

span {
    color: var(--cor-destaque);
    font-size: 120%;    
}

</style>