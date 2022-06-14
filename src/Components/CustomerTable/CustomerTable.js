import CustomerModel from "../../Model/CustomerModel";
import { React } from "react";
import "./CustomerTable.css";

function createData(
  id,
  first_name,
  last_name,
  company_name,
  email,
  address,
  city,
  state,
  county,
  zip,
  phone1,
  phone2,
  web
) {
  // check if any of the variable have a comma in it
  // if so, replace the comma with a space
  if (first_name.includes(",")) {
    first_name = first_name.replace(",", " ");
  }
  if (last_name.includes(",")) {
    last_name = last_name.replace(",", " ");
  }
  if (company_name.includes(",")) {
    company_name = company_name.replace(",", " ");
  }
  if (email.includes(",")) {
    email = email.replace(",", " ");
  }
  if (address.includes(",")) {
    address = address.replace(",", " ");
  }
  if (city.includes(",")) {
    city = city.replace(",", " ");
  }
  if (state.includes(",")) {
    state = state.replace(",", " ");
  }
  if (county.includes(",")) {
    county = county.replace(",", " ");
  }
  if (phone1.includes(",")) {
    phone1 = phone1.replace(",", " ");
  }
  if (phone2.includes(",")) {
    phone2 = phone2.replace(",", " ");
  }
  if (web.includes(",")) {
    web = web.replace(",", " ");
  }

  return {
    id,
    first_name,
    last_name,
    company_name,
    address,
    city,
    county,
    state,
    zip,
    phone1,
    phone2,
    email,
    web,
  };
}

let id = 0;
const rows = CustomerModel.getAllCustomers().map((customer) => {
  return createData(
    id++,
    customer.first_name,
    customer.last_name,
    customer.company_name,
    customer.email,
    customer.address,
    customer.city,
    customer.state,
    customer.county,
    customer.zip,
    customer.phone1,
    customer.phone2,
    customer.web
  );
});

export default function DenseTable() {
  return (
    <div>
      <div className="datagrid">
        <table id="data">
          <thead>
            <tr>
              <th align="center">ID</th>
              <th align="center">First Name</th>
              <th align="center">Last Name</th>
              <th align="center">Company Name</th>
              <th align="center">Email</th>
              <th align="center">Address</th>
              <th align="center">City</th>
              <th align="center">State</th>
              <th align="center">County</th>
              <th align="center">Zip</th>
              <th align="center">Phone# 1</th>
              <th align="center">Phone# 2</th>
              <th align="center">Web</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td align="center">{row.id}</td>
                <td align="center">{row.first_name}</td>
                <td align="center">{row.last_name}</td>
                <td align="center">{row.company_name}</td>
                <td align="center">{row.email}</td>
                <td align="center">{row.address}</td>
                <td align="center">{row.city}</td>
                <td align="center">{row.state}</td>
                <td align="center">{row.county}</td>
                <td align="center">{row.zip}</td>
                <td align="center">{row.phone1}</td>
                <td align="center">{row.phone2}</td>
                <td align="center">{row.web}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
