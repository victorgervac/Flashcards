import React from 'react';
import { Form, FormInput, } from "semantic-ui-react";

class FlashCardForm extends React.Component {
  state = { subject: "", notes: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.setState({
      subject: "",
      notes: "",
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  render() {
    const { subject, notes } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <FormInput
            fluid
            label="Subject"
            placeholder="subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}
            />
          <Form.Input
            fluid
            label="Notes"
            placeholder="Notes"
            name="notes"
            value={this.state.notes}
            onChange={this.handleChange}
            />
          <Form.Button >Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default FlashCardForm