import { addEventListener } from './utils/Element/index.js';
import tableList from './utils/State/tableList.js';

var mutable;

window.onload = () => ((table) => {

    const initialState = () => ({
        nome: '',
        email: '',
        numero: '',
        endereco: '',
        profissao: '',
    })

    const formState = initialState();

    const stateTable = new tableList({ table })

    addEventListener({
        fieldName: ['input[name="nome"]', 'input[name="email"]', 'input[name="numero"]', 'input[name="endereco"]', 'input[name="profissao"]'],
        event: 'change',
        function: ({ target }) => {
            formState[target.name] = target.value
        }
    })

    addEventListener({
        fieldName: 'form[name="cadastro"]',
        event: 'submit',
        function: (event) => {
            event.preventDefault();
            stateTable.set(formState)
        }
    })

    setInterval(() => {
        let tableState = JSON.stringify([...stateTable.list])

        if (mutable !== tableState) {
            mutable = tableState;
            console.log(stateTable.list)
        }
    }, 1500)
})(document.querySelector('table[name="clientes"]'));