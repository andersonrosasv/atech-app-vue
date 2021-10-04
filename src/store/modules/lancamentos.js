
const moduloLancamentos = {
    state: {
        cadastro: [],
    },
    getters: {
        todosCadastros: state => state.cadastro,        
    },
    actions: {
        salvarCadastro: ({commit}, cadastro) => {
            commit("adicionarCadastro", cadastro);
        },
        excluirCadastro: ({commit}, id) => {
            commit('removerCadastro', id);
        }
    },
    mutations: {
        adicionarCadastro:
        (state, cadastro) => state.cadastro.unshift(cadastro),

        removerCadastro:
        (state, id) => state.cadastro = state.cadastro.filter(cadastro => cadastro.id !== id)
    },
    
};

export default moduloLancamentos;