const moduloLancamentos = {
    state: {
        cadastro: [
            {
                id: Math.random().toString(36).substr(2,5),
                nome: "Hans",
                planeta: "Saturno",
                data: "1942-07-13"
            },

            {
                id: Math.random().toString(36).substr(2,5),
                nome: "Dani",
                planeta: "Saturno",
                data: "1942-07-13"
            },

            {
                id: Math.random().toString(36).substr(2,5),
                nome: "Math",
                planeta: "Saturno",
                data: "1942-07-13"
            }
        ],
    },
    getters: {
        todosCadastros: state => state.cadastro,        
    },
    actions: {
        salvarCadastro: ({commit}, cadastro) => {
            commit("adicionarCadastro", cadastro);
        }
    },
    mutations: {
        adicionarCadastro:
        (state, cadastro) => state.cadastro.unshift(cadastro)
    }
};

export default moduloLancamentos;