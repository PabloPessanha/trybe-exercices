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

class Forms extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      estado: '',
      cidade: '',
      endereco: '',
      tipo: '',
      curriculo: '',
      cargo: '',
      descricao: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Fragment>
        <fieldset>
          <legend>Informações pessoais</legend>
          <Nome value={this.state.nome} handleChange={this.handleChange} />
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
