import React, { Component } from "react";

class Class_BuiSonTung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Bui Son Tung",
      class: "K22CNT3",
    };
  }

  users = {
    name: "BuisonTung",
    age: 20,
  };

  // Hàm xử lý sự kiện
  handleChange = () => {
    this.setState({
      fullname: "Bui Son Tung 02",
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Class Components Demo</h2>
        {this.users.name}-{this.users.age}
        <hr />
        <h3>Info: {this.props.info}</h3>
        <h3>Time: {this.props.time}</h3>
        <hr />
        <h3>
          State:
          <br />
          FullName: {this.state.fullname}
          <br />
          Class: {this.state.class}
        </h3>
        <button onClick={this.handleChange}>Change Name</button>
      </div>
    );
  }
}

export default Class_BuiSonTung;
