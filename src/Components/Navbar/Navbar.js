import React from "react";
import "./Navbar.css";

function Navbar() {
  const htmlToCSV = (html, filename) => {
    var data = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
      if (rows[i].style.display !== "none") {
        //console.log(rows[i]);
        var row = [],
          cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++) {
          row.push(cols[j].innerText);
        }

        data.push(row.join(","));
      }
    }

    downloadCSVFile(data.join("\n"), filename);
  };

  const downloadCSVFile = (csv, filename) => {
    var csv_file, download_link;
    csv_file = new Blob([csv], { type: "text/csv" });
    download_link = document.createElement("a");
    download_link.download = filename;
    download_link.href = window.URL.createObjectURL(csv_file);
    download_link.style.display = "none";
    document.body.appendChild(download_link);
    download_link.click();
  };

  const handleDownload = () => {
    var html = document.querySelector("table").outerHTML;
    htmlToCSV(html, "customers.csv");
  };

  const handleSearch = (e) => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = e.target.value;
    filter = input.toUpperCase();
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  return (
    <div className="topnav">
      <button onClick={handleDownload}>Download CSV</button>
      <a> </a>
      <input type="text" placeholder="Search using first name.." onChange={handleSearch} />
    </div>
  );
}

export default Navbar;
