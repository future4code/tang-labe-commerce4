import React, { Component } from 'react'
import {FilroContainer} from '../Filters/Styled'

export default class Filters extends Component {
  render() {
    return (
      <FilroContainer>
        <h2>Filtros</h2>

        <label>
          Valor máximo:
        </label>
        <input type="number" value={this.props.filtroMax} onChange={this.props.onChangeFiltroMax} />

        <label>
          Valor mínimo:
        </label>
        <input type="number" value={this.props.filtroMin} onChange={this.props.onChangeFiltroMin} />

        <label>
          Bsuca por nome:
        </label>
        <input value={this.props.filtroNome} onChange={this.props.onChangeFiltroNome} />
      </FilroContainer>
    )
  }
}
