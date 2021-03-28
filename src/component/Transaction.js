import React from "react";
import { Component } from "react";

class Transaction extends Component {
  render() {
    return (
      <div className="table-center">
        <div
          className="btn btn-outline-secondary create-btn"
          onClick={this.props.showAccountPage}
        >
          Goto Account Page
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transactionData.length > 0 ? (
              this.props.transactionData.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.date}</td>
                    <td>{data.description}</td>
                    <td>{data.amount}</td>
                    <td>{data.type}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Transaction;
