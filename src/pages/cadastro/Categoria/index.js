import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]:valor,
      })
    }

    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais)
        }}>
         
          <FormField
            label='Nome da Categoria'
            type='text'
            name='nome'
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label='Descrição:'
            type='text:'
            name='descricao'
            value={values.descricao}
            onChange={handleChange}
          />

          {/*<div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />            
          </label>
          </div>*/}

          
          <FormField
            label='Cor'
            type='color'
            name='cor'
            value={values.cor}
            onChange={handleChange}
          />
          {/* <div>
          //<label>
          //  Cor:
          //  <input
          //    type='Color'
          //    value={values.cor}
          //    name="Cor"
          //    onChange={handleChange}
          //</div></div>  />            
          //</div></div></label>
          </div> */}
          

          <button>
            Cadastrar
          </button>
        </form>

              <ul>
                {categorias.map((Categoria, indice) => {
                  return (
                    <li key={`${Categoria}${indice}`}>
                      {Categoria.nome}
                    </li>
                  )
                })}
              </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;