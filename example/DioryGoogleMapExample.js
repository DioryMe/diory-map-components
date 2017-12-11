import React, { Component } from 'react'
import { DioryGoogleMap, DioryMapPin } from '../lib'
import room from './room.js'

class DioryGoogleMapExample extends Component {
  constructor() {
    super();
    this.state = {
      room: {},
      hoveredKey: '',
      focus: undefined,
    }
  }

  componentWillMount() {
    this.setState(() => ({ room }));
  }

  render() {
    const { room: { diorys = {}, tools = {} }, focus } = this.state

    const mapProps = focus ? mergeData(tools.googleMapTool, focus) : tools.googleMapTool
    const mapActions = {
      onDioryClick: this.setFocus,
      onMapClick: this.resetFocus,
      onDioryHoverBegin: this.setHover,
      onDioryHoverEnd: this.resetHover,
    }
    const mapDiorys = focus ? getFocusDiorys(focus) : diorys

    return (
      <div>
        <DioryGoogleMap { ...mapProps } actions={ mapActions }>
          { Object.entries(mapDiorys).map(([key, diory]) =>
            <DioryMapPin
              { ...diory }
              key={ key }
            />
          )}
        </DioryGoogleMap>
      </div>
    )
  }

  setHover = ({ key: keyValue }) => this.setState(() => ({ hoverKey: keyValue }))
  resetHover = () => this.setState(() => ({ hoverKey: '' }))
  setFocus = ({ diory }) => this.setState(() => ({ focus: diory }))
  resetFocus = () => this.setState(() => ({ focus: undefined }))
}

const mergeData = (diory1 = {}, diory2 = {}) => ({ ...diory1, data: { ...diory1.data, ...diory2.data } })
const getFocusDiorys = focus => focus.diorys || ({ 0: focus })

export default DioryGoogleMapExample

