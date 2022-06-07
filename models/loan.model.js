const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoanSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
  },
  age: {
    type: Number,
  },
  aadharNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  pincode: {
    type: String,
  },
  businessName: {
    type: String,
  },
  businessDomain: {
    type: String,
  },
  businessNature: {
    type: String,
  },
  businessPremises: {
    type: String,
  },
  businessPartners: {
    type: String,
  },
  gstNumber: {
    type: String,
  },
  businessAddress: {
    type: String,
  },
  businessPincode: {
    type: String,
  },
  businessState: {
    type: String,
  },
  loanAmount: {
    type: Number,
  },
  monthlyIncome:{
    type: Number,
  },
  loanType: {
    type: String,
  },
  loanInterest: {
    type: Number,
  },
  loanTenure: {
    type: Number,
  },
  emi:{
    type: Number,
  }
});

const Loan = mongoose.model("loan", LoanSchema);
module.exports = Loan;
