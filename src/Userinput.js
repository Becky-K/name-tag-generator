import React, { Component } from "react";

class UserInput extends Component {
  state = { name: "" };

  componentDidUpdate() {
    const savedNames = JSON.stringify(this.state);
    localStorage.setItem("savedNames", savedNames);
  }

  updateName = (event) => this.setState({ name: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add new name here..."
          value={this.state.name}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
