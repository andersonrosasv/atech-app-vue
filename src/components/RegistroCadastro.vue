<template>
  <div class="registroCadastro">
      <div class="botoes">
          <img src="../img/iconerebelde.png" alt="Ícone da Resistência" class="imagemRegistro">
          <button @click="excluirCadastro(registro.id)" class="botaoRemover">
              <img src="../img/lixeira.png" alt="Remover lançamento" class="imagemLixeira">
          </button>
      </div>

      <div class="descricaoRegistro">
          <span class="nome">{{registro.nome}}</span>
          <span>{{registro.planeta}}</span>
          <span>{{new Date(registro.data).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}}</span>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "RegistroCadastro",
    methods: mapActions(["excluirCadastro"]),
    props: {
        registro: Object, String,
    },
};
</script>

<style scoped>
.registroCadastro {
    display: flex;
    background-color: white;
    border-radius: 20px;
    font-family: "padrao";
    padding: 10px;
    margin-bottom: 10px;
}

.botoes {
    width: 50%;
    margin: auto;
       
}

.imagemRegistro {
    width: 30px;
    vertical-align: middle;
}
.botaoRemover img {
    width: 25px;
    vertical-align: middle;
}

.botaoRemover {
    border: none;
    outline: none;
    background-color: transparent;
    vertical-align: middle;
}

.botaoRemover:hover{
    cursor: pointer;
}

.botaoRemover img:active {
    filter: invert(100%);
}

.descricaoRegistro {
    width: 50%;
    float: right;
    text-align: right;
}

.descricaoRegistro span {
    display: block;
    font-size: 80%;
}

.nome {
    font-family: "negrito";
    font-size: 200%  !important;
}

</style>