import React, { Component } from 'react'
import DioryGoogleMapExample from './DioryGoogleMapExample'
import DioryMapPickerExample from './DioryMapPickerExample'
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
            styles={{
              diory: {
                backgroundColor: 'green',
                cursor: 'pointer',
                borderBottom: '2px solid white',
                width: '100px',
                float: 'left',
                zIndex: '1'
              },
              text: {
                fontWeight: 'bold',
                fontFamily: 'arial',
                color: 'white'
              }
            }}
            onClick={() => this.setState(() => ({ example: 'diory-map-components' }))}
          />
        }
        <Diory
          text={ example + ' example' }
          styles={{
            diory: {
              backgroundColor: 'green',
              borderBottom: '2px solid white'
            },
            text: {
              fontWeight: 'bold',
              fontFamily: 'arial',
              color: 'white'
            }
          }}
        />
        {
          example === 'diory-map-components' && <div>
            <Diory
              text="DioryGoogleMapExample"
              styles={{
                diory: {
                  backgroundColor: 'grey',
                  cursor: 'pointer',
                  borderBottom: '2px solid white'
                },
                text: {
                  fontFamily: 'arial',
                  color: 'white'
                }
              }}
              onClick={() => this.setState(() => ({ example: 'DioryGoogleMapExample' }))}
            />
            <Diory
              text="DioryMapPickerExample"
              styles={{
                diory: {
                  backgroundColor: 'grey',
                  cursor: 'pointer',
                  borderBottom: '2px solid white'
                },
                text: {
                  fontFamily: 'arial',
                  color: 'white'
                }
              }}
              onClick={() => this.setState(() => ({ example: 'DioryMapPickerExample' }))}
            />
            <Diory { ...pickedDiory } />
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
      </div>
    )
  }
}

export default DioryExampleApp

