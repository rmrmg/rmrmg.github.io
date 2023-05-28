//code here
function generateTable(rzedy, kolumny) {
  if (document.getElementById('tabela1')) {
    alert('juz jest')
    return;
  }
  const rzad  = document.getElementById(rzedy).value;
  const kolumn = document.getElementById(kolumny).value;
  // creates a <table> element and a <tbody> element
  const div = document.createElement("div");
  const tbl = document.createElement("table");
  div.setAttribute("id", "tabela1");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 1; i <= rzad; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 1; j <= kolumn; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(` ${i} ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  div.appendChild(tbl)
  //
  const przycisk = document.createElement('button')
  przycisk.innerHTML='skasuj'
  div.appendChild(przycisk)
  // appends <table> into <body>
  document.body.appendChild(div);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}