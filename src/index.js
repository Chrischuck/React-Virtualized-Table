import React from "react";
import ReactDOM from "react-dom";

import VirtualTable from './VirtualTable'

const rows = []

for (let i = 1; i < 3000; i++) {
  rows.push({
    id: Date.now() + '' + i,
    name: 'person' + i,
    address: '123 abc street',
    phoneNumber: '9292992922',
    img: 'https://source.unsplash.com/random'
  })
}

console.log(rows)

ReactDOM.render(
  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <VirtualTable
      data={rows}
      rowHeight={50}
    />
  </div>,
  document.getElementById("app")
);