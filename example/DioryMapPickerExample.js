import React, { Component } from 'react'
import deepmerge from 'deepmerge'
import { DioryMapPicker } from '../lib'
import room from './room.js'

class DioryMapPickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
      pin: {
        style: {
          backgroundColor: 'green'
        },
        state: {
          hover: false
        }
      },
    }
  }

  componentWillMount() {
    this.setState(() => ({ room }));
  }

  setPin = ({ diory }) => {
    this.setState({ pin: diory });
  };

  render() {
    const { pin, room: { tools: { googleMapTool } } } = this.state;
    const diory = deepmerge(googleMapTool, this.props.diory)

    return (
      <DioryMapPicker
        { ...diory }
        diorys={{ pin }}
        onClick={ this.props.onClick }
        onChange={ this.setPin }
      />
    )
  }
}

export default DioryMapPickerExample

