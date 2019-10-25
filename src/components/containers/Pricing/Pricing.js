import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const data = [
  {
    vin: '200',
    year: '200',
  },
  {
    vin: '200',
    year: '200',
  },
  {
    vin: '200',
    year: '201',
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
      <div>
        <div className="content-section implementation">
          <DataTable
            ref={el => (this.dt = el)}
            value={this.state.prices}
            paginator={true}
            rows={10}
            header={header}
            globalFilter={this.state.globalFilter}
            emptyMessage="No records found"
          >
            <Column field="vin" header="Vin" />
            <Column field="year" header="Year" />
          </DataTable>
        </div>
      </div>
    );
  }
}
