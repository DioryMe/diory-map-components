import React, { Component } from 'react'
import deepmerge from 'deepmerge'
import { MapDiory } from '../lib'
import room from './room.js'

class DioryGoogleMapExample extends Component {
  constructor() {
    super();
    this.state = {
      room: {}
    }
  }

  componentWillMount() {
    this.setState(() => ({ room }));
  }

  render() {
    const { room: { tools = {} } } = this.state
    const { ...diory } = this.props

    const mapProps = deepmerge(tools.googleMapTool, diory)

    return (
      <MapDiory { ...mapProps }/>
    )
  }
}

export default DioryGoogleMapExample

