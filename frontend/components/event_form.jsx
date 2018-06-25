import React from "react";
import moment from "moment";

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.event;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearEventErrors();
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
    event.start_date = moment(event.start_date).toISOString();
    event.end_date = moment(event.end_date).toISOString();
    this.props.processForm(event).then(() => this.props.closeModal());
  }

  handleDelete(e) {
    this.props
      .deleteEvent(this.props.event.id)
      .then(() => this.props.closeModal());
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
    const min = moment(this.props.selected).format("YYYY-MM-DDTHH:mm:SS");
    const max = moment(this.props.selected)
      .add(1, "day")
      .format("YYYY-MM-DDTHH:mm:SS");

    return (
      <form onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
        {this.renderErrors()}
        <input
          type="text"
          value={this.state.title}
          onChange={this.update("title")}
          placeholder="Title"
          className="EventForm-title"
        />
        <textarea
          value={this.state.description}
          onChange={this.update("description")}
          placeholder="Description"
          id="EventForm-description"
        />
        <input
          type="datetime-local"
          value={this.state.start_date}
          onChange={this.update("start_date")}
          min={min}
          max={max}
        />
        <input
          type="datetime-local"
          value={this.state.end_date}
          onChange={this.update("end_date")}
          min={min}
          max={max}
        />
        <input
          type="submit"
          className="EventForm-submit"
          value={this.props.formType}
        />

        {this.props.formType === "Update" ? (
          <input
            type="button"
            onClick={() => this.handleDelete()}
            className="EventForm-submit"
            value="Delete"
          />
        ) : (
          ""
        )}
      </form>
    );
  }
}
