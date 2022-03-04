import { getApi, postApi, delApi } from '../Network/apiService.js';
import createElement from '../Element/createElement.js';

function tableList({ list = new Map(), table = document.querySelector('table') }) {

    const has = (email) => {
        return list.has(email);
    }

    const del = (email, tr) => {
        delApi({ path: `/clientes/${email}` })

        table.removeChild(tr);
        list.delete(email);
    }

    const add = (formstate) => {
        const { nome, email, numero, endereco, profissao } = formstate;

        const tr = createElement({
            elementName: 'tr',
            children: [nome, email, numero, endereco, profissao]
                .map(variable =>
                    createElement({
                        elementName: 'td',
                        innerText: variable
                    }))
                .concat([
                    createElement({
                        elementName: 'td',
                        children: createElement({
                            elementName: 'button',
                            innerHTML: 'Excluir',
                            eventListener: {
                                event: 'click',
                                function() { del(email, tr) }
                            }
                        })
                    })
                ]),
        })

        postApi({
            path: `/clientes/${email}`,
            data: { nome, email, numero, endereco, profissao }
        })
        
        table.appendChild(tr)
        return list.set(email, { nome, email, numero, endereco, profissao, tr });
    }

    const update = ({ nome, email, numero, endereco, profissao }) => {
        const { tr } = list.get(email);

        [nome, email, numero, endereco, profissao].forEach((variable, index) => {
            tr.children[index].innerText = variable;
        })

        postApi({
            path: `/clientes/${email}`,
            data: { nome, email, numero, endereco, profissao }
        })

        return list.set(email, { nome, email, numero, endereco, profissao, tr });
    }

    const set = (data) => {
        if (has(data.email))
            if (window.confirm('Email já cadastrado, deseja atualizar os dados?'))
                return update(data);
            else
                return;

        return add(data);
    }

    getApi({ path: '/clientes' })
        .then(({ message, response }) => {
            if (response.status === 200 && Array.isArray(response.data)) {
                data.forEach(data => set(data))
            }

            if (message)
                console.log(message)
        })

    return {
        list,
        set,
        del,
        has,
    }
}

export default tableList;