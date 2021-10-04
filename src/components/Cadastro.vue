<template>
  <div id="painelCadastro">
    <div id="formularioCadastro">
      <form>
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" />
        <label for="planeta">Planeta</label>
        <input type="text" name="planeta" id="planeta" />
        <label for="data">Data de Nascimento</label>
        <input type="date" name="data" id="data" />
        <label for="descricao">Qual sua motivação para entrar na aliança?</label>
        <textarea rows="4" cols="25"></textarea>

        
        <button>Cadastrar</button>
      </form>
    </div>

    <div id="areaRegistros">
      <RegistroCadastro :registro="{
        nome: 'Anderson',
        planeta: 'Terra',
        data: '1991-08-08',
      }"
      />

        <RegistroCadastro :registro="{
        nome: 'Maria',
        planeta: 'Terra',
        data: '1962-11-20',
      }"
      />

        <RegistroCadastro :registro="{
        nome: 'Carlos',
        planeta: 'Terra',
        data: '2000-06-05',
      }"
      />
    </div>
  </div>
</template>

<script>
import RegistroCadastro from './RegistroCadastro.vue'
export default {
  name: "Cadastro",
  components: {
    RegistroCadastro,
  }
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

#nome,
#planeta,
#data,
button, textarea {
  display: block;
  margin-bottom: 10px;
}

#nome,
#planeta,
#data {
  height: 20px;
  font-family: "padrao";
  font-size: 100%;
}

textarea {
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

#areaRegistros {
  margin-top: 30px;
}
</style>