import React, { Component } from "react";
import { withRouter } from "react-router";
import "./DetailPage.css";

class DetailPage extends Component {
  state = {
    data: this.props.location.state.data
  };
  render() {
    console.log(this.state.data);
    return (
      <div className="DetailPage">
        <h3>Employee Detail List</h3>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">SL.No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Phone.No.</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(mapData => {
              return (
                <tr key={mapData.id}>
                  <th scope="row">{mapData.id}</th>
                  <td>{mapData.name}</td>
                  <td>{mapData.age}</td>
                  <td>{mapData.email}</td>
                  <td>{mapData.phoneNo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(DetailPage);
