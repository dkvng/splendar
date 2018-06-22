import React from "react";

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      start_date: null,
      end_date: null
    };
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.processForm(event).then(console.log(this.props.closeModal));
  }

  renderErrors() {
    return (
      <ul className="EventForm-errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.title}
          onChange={this.update("title")}
          placeholder="Title"
        />
      </form>
    );
  }
}
