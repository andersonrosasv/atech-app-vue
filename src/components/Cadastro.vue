<template>
  <div id="painelCadastro">
    <div id="formularioCadastro">
      <form>
        <div id="tiposCadastro">
          <input type="radio" name="tipo" id="entrada" />
          <label for="entrada">Entrada</label>
          <input type="radio" name="tipo" id="saida" />
          <label for="saida">Saída</label>
        </div>

        <label for="valor">Valor</label>
        <input type="number" name="valor" id="valor" />
        <label for="descricao">Descricao</label>
        <input type="text" name="descricao" id="descricao" />

        <label for="data">Data</label>
        <input type="date" name="data" id="data" />
        <button>Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
};
</script>

<style scoped>
#painelCadastro {
  width: 40%;
  padding: 20px;
}

#formularioCadastro {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  font-family: "padrao";
}

#valor,
#descricao,
#data,
button {
  display: block;
  margin-bottom: 10px;
}

#valor,
#descricao,
#data {
  height: 20px;
  font-family: "padrao";
  font-size: 100%;
}

#tiposCadastro {
  margin-bottom: 10px;
  font-family: "negrito";
}

#tiposCadastro label {
  margin-right: 20px;
}

#tiposCadastro label:first-of-type {
  color: #22a7f0;
}

#tiposCadastro label:last-of-type {
  color: red;
}

#descricao {
  width: 70%;
}

button {
  background-color: var(--cor-destaque);
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px 15px;
  color: white;
  font-family: "negrito";
  font-size: 100%;
}
</style>