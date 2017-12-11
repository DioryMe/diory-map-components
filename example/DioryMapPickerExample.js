import React, { Component } from 'react'
import deepmerge from 'deepmerge'
import { DioryMapPicker } from '../lib'
import room from './room.js'

class DioryMapPickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {}
    }
  }

  componentWillMount() {
    this.setState(() => ({ room }));
  }

  render() {
    const { room: { tools: { googleMapTool } } } = this.state
    const { diory = {} } = this.props
    const toolDiory = mergeData(googleMapTool, this.props.diory)
    const geo = deepmerge(getGeoObject(googleMapTool), getGeoObject(diory))

    return (
      <DioryMapPicker
        { ...toolDiory }
        geo={ geo }
        onClick={ ({ diory }) => this.props.onClick({ diory }) }
        onChange={ ({ diory }) => console.log(diory) }
      />
    )
  }
}

const mergeData = (diory1 = {}, diory2 = {}) => ({ ...diory1, data: { ...diory1.data, ...diory2.data } })
const getGeoObject = diory => diory && diory.data && diory.data.geo || {}

export default DioryMapPickerExample

