// json2html.js

export default function json2html(data) {
   
    const headers = [...new Set(data.flatMap(Object.keys))];
    

    const headerRow = headers.map(header => `<th>${header}</th>`).join("");
  

    const bodyRows = data.map(row => {
      const cells = headers.map(header => `<td>${row[header] || ""}</td>`);
      return `<tr>${cells.join("")}</tr>`;
    }).join("");
  
   
    return `
      <table data-user="abhishekchoudhary17032004@gmail.com">
        <thead>
          <tr>${headerRow}</tr>
        </thead>
        <tbody>
          ${bodyRows}
        </tbody>
      </table>
    `;
  }
  