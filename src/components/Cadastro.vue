<template>
  <div id="painelCadastro">
    <div id="formularioCadastro">
      <form @submit="salvar">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" required v-model="nome"/>
        <label for="planeta">Planeta</label>
        <input type="text" name="planeta" id="planeta" required v-model="planeta"/>
        <label for="data">Data de Nascimento</label>
        <input type="date" name="data" id="data" required v-model="data"/>
        <label for="descricao">Qual sua motivação para entrar na aliança?</label>
        <textarea rows="4" cols="25" name ="descricao" id="descricao" required v-model="descricao"></textarea>
        
        

        
        <button>Cadastrar</button>
      </form>
    </div>

    <div id="areaRegistros">
      <RegistroCadastro
      v-for="cadastro in todosCadastros"
      v-bind:key="cadastro.id"
      :registro="cadastro"
      />

    </div>
  </div>
</template>



<script>
import { mapGetters, mapActions} from 'vuex';
import RegistroCadastro from './RegistroCadastro.vue'
import Lancamento from '../models/Lancamento';
export default {
  name: "Cadastro",
  data: () => {
    return {
      nome: "",
      planeta:"",
      data:"",
      descricao:"",
    };
  },
  components: {
    RegistroCadastro,
  },
  computed: mapGetters(["todosCadastros"]),
  methods: {
    ...mapActions(["salvarCadastro"]),
    salvar(event) {
      event.preventDefault();
      const cadastro = new Lancamento(this.nome, this.planeta, this.data, this.descricao);
      this.salvarCadastro(cadastro);
      this.limparFormulario();
    },
    limparFormulario (){
      this.nome="";
      this.planeta="";
      this.data="";
      this.descricao="";
    }

  },
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