import React, { Component } from 'react';
import {
  Col,
  Row,
  Card
} from 'reactstrap';
import _ from 'lodash';

function MadlibInput(props) {
  return (
    <Col md="3" className="input-wrapper">
      <Row>
        <Col md="2">
          <label className="green-label">{props.index}</label>
        </Col>
        <Col md="10">
          <input placeholder={props.placeholder} type="text" onChange={props.handleChange} />
        </Col>
      </Row>
      <Row>
        <Col md="2">
        </Col>
        <Col md="10">
          <div className="input-description">{props.placeholder}</div>
        </Col>
      </Row>
    </Col>
  )
}

class MadlibForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: '',
      pluralNoun: '',
      adjectiveOne: '',
      celebrityOne: ''
    }
  }

  handleChange = function(props) {
    // returning a function to perform the operation more than once
    return function(event) {
      this.setState({[props.inputTitle]: event.target.value});
      console.log(`Value for input ${props.inputTitle}: ${this.state[props.inputTitle]}`);
    }.bind(this);
  }

  render() {

    this.inputData = [
      {placeholder: 'Color', prop: 'color'},
      {placeholder: 'Noun (Plural)', prop: 'pluralNoun'},
      {placeholder: 'Adjective', prop: 'adjectiveOne'},
      {placeholder: 'Celebrity', prop: 'celebrityOne'},

      {placeholder: 'Adjective', prop: 'adjectiveTwo'},
      {placeholder: 'Noun', prop: 'pluralNoun'},
      {placeholder: 'Number', prop: 'numberOne'},
      {placeholder: 'Number', prop: 'numberTwo'},
    ]

    return (
      <div className="card-wrapper">
        <Card>
          <Row style={{textAlign: 'center', color: 'white'}}>
            {
              _.map(this.inputData, (data, indexKey) => {
                return <MadlibInput key={indexKey} index={indexKey + 1} placeholder={data.placeholder} handleChange={this.handleChange({inputTitle: data.prop})} />
              })
            }
          </Row>
        </Card>
      </div>
    );
  }
}

export default MadlibForm;