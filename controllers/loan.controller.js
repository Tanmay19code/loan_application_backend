const Loan = require("../models/loan.model.js");

const response = {
  success: true,
  message: "",
};

const createloan = async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    mobileNumber,
    age,
    address,
    aadharNumber,
    pincode,
    businessName,
    businessDomain,
    businessNature,
    businessPremises,
    businessPartners,
    gstNumber,
    businessAddress,
    businessPincode,
    businessState,
    loanAmount,
    monthlyIncome,
    loanType,
    loanInterest,
    loanTenure,
    emi,
  } = req.body;

  Loan.create({
    firstName,
    middleName,
    lastName,
    email,
    mobileNumber,
    age,
    address,
    aadharNumber,
    pincode,
    businessName,
    businessDomain,
    businessNature,
    businessPremises,
    businessPartners,
    gstNumber,
    businessAddress,
    businessPincode,
    businessState,
    loanAmount,
    monthlyIncome,
    loanType,
    loanInterest,
    loanTenure,
    emi,
  })
    .then((result) => {
      if (result) {
        response.success = true;
        response.message = "Loan added succesfully";
        console.log(response);
        return res.status(200).send({ Loan: result, response: response });
      } else {
        response.success = false;
        response.message = "Loan not added";
        console.log(response);
        return res.status(500).send("Some error occured");
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send("Some Internal Server Error occured");
    });
};

module.exports = {
  createloan,
};
