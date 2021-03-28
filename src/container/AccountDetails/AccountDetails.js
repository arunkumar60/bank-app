import React, { Component } from "react";
import axios from "axios";
import "./AccountDetails.css";
import { Fragment } from "react";
import Modal from "../../shared/Modal/Modal.js";
import Transaction from "../../component/Transaction.js";

class AccountDetails extends Component {
  state = {
    accountDetails: [],
    transactionData: [],
    showModal: "display-none",
    newAccName: "",
    newAccType: "",
    showTransaction: "display-none",
    showAccountDetails: "display-block",
    alphanumeric: true,
    pageName: "Account Details",
  };
  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
    this.addNewAccount = this.addNewAccount.bind(this);
    this.handleAccountName = this.handleAccountName.bind(this);
    this.handleAccountType = this.handleAccountType.bind(this);
    this.showAccountPage = this.showAccountPage.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://l7gl6.mocklab.io/getAccountDetails")
      .then((response) => {
        console.log("response", response.data);
        this.setState({ accountDetails: response.data });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  fetchDetails(fetchDetails) {
    this.setState({ transactionData: fetchDetails.transaction });
    this.setState({ showTransaction: "display-block" });
    this.setState({ showAccountDetails: "display-none" });
    this.setState({ pageName: "Transaction Details" });
  }
  addNewAccount() {
    this.setState({ showModal: "display-block" });
  }
  handleAccountName(event) {
    this.setState({ newAccName: event.target.value });
  }
  handleAccountType(event) {
    this.setState({ newAccType: event.target.value });
  }
  handleSave() {
    let regularExpression = /^[a-zA-Z0-9]+$/;
    var valid = regularExpression.test(this.state.newAccName);
    if (valid) {
      this.setState({ alphanumeric: true });
      let newAccountDetails = [
        {
          accountType: this.state.newAccType,
          name: this.state.newAccName,
          status: "pending",
          id: Math.random(),
          transaction: [],
        },
      ];
      this.setState({
        accountDetails: [...this.state.accountDetails, ...newAccountDetails],
      });
      this.setState({ showModal: "display-none" });
    } else {
      this.setState({ alphanumeric: false });
    }
  }
  showAccountPage() {
    this.setState({ showTransaction: "display-none" });
    this.setState({ showAccountDetails: "display-block" });
    this.setState({ pageName: "Account Details" });
  }
  render() {
    return (
      <Fragment>
        <div className="header">
          <h2>{this.state.pageName}</h2>
        </div>
        <div className={`table-center ${this.state.showAccountDetails}`}>
          <div
            className="btn btn-outline-secondary create-btn"
            onClick={this.addNewAccount}
          >
            Create New Account
          </div>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Account Type</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.accountDetails.map((data) => {
                return (
                  <tr key={data.id} onClick={() => this.fetchDetails(data)}>
                    <td>{data.accountType}</td>
                    <td>{data.name}</td>
                    <td>{data.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={this.state.showTransaction}>
          <Transaction
            transactionData={this.state.transactionData}
            showAccountPage={this.showAccountPage}
          />
        </div>
        <div className={this.state.showModal}>
          <Modal>
            <form className="margin-top17">
              <h2 className="text-center">Add New Account</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Account Type"
                  required="required"
                  onChange={this.handleAccountType}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Account Name"
                  required="required"
                  onChange={this.handleAccountName}
                />
                <div
                  type="button"
                  className="btn btn-primary btn-block margin-top17"
                  onClick={this.handleSave}
                >
                  Save
                </div>
                {this.state.alphanumeric === false ? (
                  <div className="warning">
                    Please enter alphanumeric account name
                  </div>
                ) : null}
              </div>
            </form>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

export default AccountDetails;
