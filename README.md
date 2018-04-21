# diory-map-components

> Creates Diory map components from Diograph data

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i diory-map-components --save
```

## Import

```js
import { DioryGoogleMap, DioryMapPicker, DioryMapPin, DioryMapWrapper, MapDiory } from 'diory-map-components'

```

## Usage

#### Diograph data
```js
const diory = {
      "data": {
        "apiKey": "your Google API key",
        "geo": {
          "latitude": 61.4978,  // center 
          "longitude": 23.7610, // center
          "zoom": 4
        }
      }
    }
    
const diorys = {
  "cottage": {
    "text": "Cottage",
    "image": "http://r-ec.bstatic.com/images/hotel/max500/119/11967104.jpg",
    "style": {
      "text": {
        "color": "white"
      }
    },
    "data": {
      "geo": {
        "latitude": 68.738775,
        "longitude": 25.804489,
        "zoom": 10
      }
    }
  },
  "ravadaskongas": {
    "text": "Ravadasköngäs",
    "image": "http://www.korpikartano.fi/wp-content/uploads/2015/12/lemmenjoki2.jpg",
    "style": {
      "text": {
        "color": "white"
      }
    },
    "data": {
      "geo": {
        "latitude": 68.6757239,
        "longitude": 25.9126356,
        "zoom": 10
      }
    }
  }
}  
```

#### DioryGoogleMap
```jsx
  <DioryGoogleMap { ...diory } diorys={ diorys } />
```

#### DioryMapPin
```jsx
  <DioryMapPin { ...diory }/>
```

#### DioryMapPicker
```jsx
  <DioryMapPicker { ...diory }
    diorys={{ pin: {...} }}
    onChange{ ({ diory }) => console.log(diory) }
    onClick={ ({ diory }) => console.log(diory) } 
  />
```

#### MapDiory
```jsx
  <MapDiory { ...diory }/>
```

#### Utils
```js
  const { data: { geo } } = addMiddleGeo({ diorys: ... })
  const { data: { geo } } = addGeoFromImage({ image: 'some-image.jpg' })
```

## Developing library in watch mode

Build, run lint and run unit tests in watch mode:

```sh
$ npm run build:watch
$ npm run test:watch
$ npm run lint:watch

```

## Running example

Run example in browser with hot loader:

```sh
$ npm start
```

Go to http://localhost:9000

## Changes
 - 1.3.0 (21.4.2018)
    - Change DioryMapPicker to stateless component
 - 1.2.0 (13.3.2018)
    - Created utils for getting geo data from image
    - Created util for getting middle geo point 
 - 1.1.0 (13.12.2017)
    - Created <MapDiory/> for showing geo on a map in a diory
  - 1.0.0 (12.12.2017)
    - Created <DioryGoogleMap/> for showing diorys on a map
    - Created <DioryMapPicker/> for getting geo data from clicked location
    - Created <DioryMapPin/> for pointing a location in a map
    - Create <DioryMapWrapper/> for showing any diory component on a map 
    
    
## Author

[**Olli-Pekka Pohjola**](mailto:oopee@iki.fi)

## License

Copyright © 2017 Olli-Pekka Pohjola

Licensed under the MIT license.
