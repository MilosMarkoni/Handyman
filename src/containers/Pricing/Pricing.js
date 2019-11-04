import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import LeftMenu from '../Layout/LeftMenu.js/LeftMenu';

const data = [
  {
    serviceName: 'Lorem ipsum service',
    price: '2200',
  },
  {
    serviceName: 'Lorem ipsum service',
    price: '2200',
  },
  {
    serviceName: 'Lorem ipsum service',
    price: '2200',
  },
  {
    serviceName: 'Lorem ipsum service',
    price: '2200',
  },
  {
    serviceName: 'Lorem ipsum service',
    price: '2200',
  },
  {
    serviceName: 'Lorem ipsum service',
    price: '2200',
  },
];

export default class Pricing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    this.setState({ prices: data });
  }

  render() {
    var header = (
      <div style={{ textAlign: 'left' }}>
        <i className="pi pi-search" style={{ margin: '4px 4px 0 0' }}></i>
        <InputText
          type="search"
          onInput={e => this.setState({ globalFilter: e.target.value })}
          placeholder="Global Search"
          size="50"
        />
      </div>
    );

    return (
      <>
        <LeftMenu></LeftMenu>
        <div className="center-content-layout">
          <DataTable
            ref={el => (this.dt = el)}
            value={this.state.prices}
            paginator={true}
            rows={5}
            header={header}
            globalFilter={this.state.globalFilter}
            emptyMessage="Nema usluga"
          >
            <Column field="serviceName" header="Naziv usluge" />
            <Column field="price" header="Cena" style={{ width: '20%', textAlign: 'center' }} />
          </DataTable>
        </div>
      </>
    );
  }
}
