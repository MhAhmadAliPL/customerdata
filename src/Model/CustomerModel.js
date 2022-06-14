const data = require('./CustomerData.json');

const CustomerModel = {
    getAllCustomers: () => {
        return data;
    }
}

module.exports = CustomerModel;