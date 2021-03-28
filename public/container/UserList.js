import React, { Component, Fragment } from "react";
import axios from "axios";
import "./UserList.css";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserData: [],
      copyGetUserData: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({
          getUserData: response.data,
          copyGetUserData: response.data,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  handleSearch = (event) => {
    let inputSearch = event.target.value;
    this.setState({
      getUserData: this.state.copyGetUserData.filter((data) => {
        return (
          data.username.toLowerCase().includes(inputSearch.toLowerCase()) ||
          data.name.toLowerCase().includes(inputSearch.toLowerCase())
        );
      }),
    });
  };

  render = () => {
    return (
      <Fragment>
        <input
          type="text"
          onChange={this.handleSearch}
          placeholder="Search on name and username"
        ></input>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.getUserData.map((userData) => {
              return (
                <tr key={userData.id}>
                  <td>{userData.name}</td>
                  <td>{userData.username}</td>
                  <td>{userData.email}</td>
                  <td>{userData.address.city}</td>
                  <td>{userData.address.zipcode}</td>
                  <td>{userData.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  };
}

export default UserList;
