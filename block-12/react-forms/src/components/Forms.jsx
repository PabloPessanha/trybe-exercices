import React, { Component, Fragment } from 'react';
import Nome from './Campos/Nome';
import Cargo from './Campos/Cargo';
import Cidade from './Campos/Cidade';
import Cpf from './Campos/Cpf';
import Curriculo from './Campos/Curriculo';
import Descricao from './Campos/Descricao';
import Email from './Campos/Email';
import Endereco from './Campos/Endereco';
import Estado from './Campos/Estado';
import Tipo from './Campos/Tipo';

/*
FIELDSET
    - NOME - TEXTO
        Limite de 40 caracteres
        Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
        Campo obrigatório
        
    - EMAIL - TEXTO
        Limite de 50 caracteres
        Campo obrigatório
        
    - CPF - TEXTO
        Limite de 11 caracteres
        Campo obrigatório
        
    - ENDEREÇO - TEXTO
        Limite de 200 caracteres
        Remover qualquer caracter especial que seja digitado
        Campo obrigatório
        
    - CIDADE - TEXTO
        Limite de 28 caracteres
        Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
        Campo obrigatório.
    
    - ESTADO - COMBOBOX
        Todos os estados do Brasil
        Campo obrigatório.
    
    - TIPO - RADIO BUTTON
        Casa, Apartamento
        Campo obrigatório.

FIELDSET
    - RESUMO DE CURRICULO - TEXTAREA
        Limite de 1000 caracteres
        Campo obrigatório.
    
    - CARGO - TEXTAREA
        Limite de 40 caracteres
        Quando o mouse passar por cima deste campo (evento onMouseEnter), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
        Campo obrigatório
    - DESCRIÇÃO DO CARGO - TEXTO
        Limite de 500 caracteres
        Campo obrigatório
*/
class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      curriculo: '',
      cargo: '',
      descricaoCargo: '',
    };
  }

  render() {
    return (
      <Fragment>
        <fieldset>
          <legend>Informações pessoais</legend>
          <Nome />
          <Email />
          <Cpf />
          <Estado />
          <Cidade />
          <Endereco />
          <Tipo />
        </fieldset>
        <fieldset>
          <legend>Informações para o cargo</legend>
          <Curriculo />
          <Cargo />
          <Descricao />
        </fieldset>
      </Fragment>
    );
  }
}

export default Forms;
