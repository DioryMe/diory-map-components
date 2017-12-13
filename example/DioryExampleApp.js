import React, { Component } from 'react'
import DioryGoogleMapExample from './DioryGoogleMapExample'
import DioryMapPickerExample from './DioryMapPickerExample'
import MapDioryExample from './MapDioryExample'
import Diory from 'diory-react-components'

class DioryExampleApp extends Component {
  constructor() {
    super();
    this.state = {
      example: 'diory-map-components',
      pickedDiory: {}
    }
  }

  render() {
    const { example, pickedDiory } = this.state

    return (
      <div>
        { example !== 'diory-map-components' &&
          <Diory
            text="< Back"
            style={ styles.back }
            onClick={() => this.setState(() => ({ example: 'diory-map-components' }))}
          />
        }
        <Diory
          text={ example + ' example' }
          style={ styles.title }
        />
        {
          example === 'diory-map-components' && <div>
            <Diory
              text="DioryGoogleMapExample"
              style={ styles.example }
              onClick={() => this.setState(() => ({ example: 'DioryGoogleMapExample' }))}
            />
            <Diory
              text="DioryMapPickerExample"
              style={ styles.example }
              onClick={() => this.setState(() => ({ example: 'DioryMapPickerExample' }))}
            />
            <Diory
              text="MapDiory"
              style={ styles.example }
              onClick={() => this.setState(() => ({ example: 'MapDiory' }))}
            />
          </div>
        }
        { example === 'DioryGoogleMapExample' &&
          <DioryGoogleMapExample/>
        }
        { example === 'DioryMapPickerExample' &&
          <DioryMapPickerExample
            diory={ pickedDiory }
            onClick={({ diory }) => this.setState(() => ({ pickedDiory: diory, example: 'diory-map-components' }))}
          />
        }
        { example === 'MapDiory' &&
          <MapDioryExample { ...mapDiory } />
        }
      </div>
    )
  }
}

const mapDiory = {
  data: {
    geo: { latitude: 62.396730692467, longitude: 24.66187890624994, zoom: 7 }
  }
}

const styles = {
  back: {
    backgroundColor: 'green',
    cursor: 'pointer',
    borderBottom: '2px solid white',
    width: '100px',
    float: 'left',
    zIndex: '1',
    text: {
      fontWeight: 'bold',
      fontFamily: 'arial',
      color: 'white'
    }
  },
  title: {
    backgroundColor: 'green',
    borderBottom: '2px solid white',
    text: {
      fontWeight: 'bold',
      fontFamily: 'arial',
      color: 'white'
    }
  },
  example: {
    backgroundColor: 'grey',
    cursor: 'pointer',
    borderBottom: '2px solid white',
    text: {
      fontFamily: 'arial',
      color: 'white'
    }
  }
}

export default DioryExampleApp

