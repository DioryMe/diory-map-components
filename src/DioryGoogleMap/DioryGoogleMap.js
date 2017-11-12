import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import { DioryMapPin } from '../DioryMapPin'
import { enhanceWithDioryMapWrapper } from './enhanceWithDioryMapWrapper'

const defaultStyles = {
  diory: { position: 'fixed', height: '100%', width: '100%' }
}

const DioryGoogleMap = ({
  data: {
    apiKey,
    geo: { latitude, longitude, zoom }
  },
  styles = {},
  diorys = {},
  actions: {
    onDioryClick,
    onDioryHoverBegin,
    onDioryHoverEnd,
    onMapClick
  },
  children
}) => (!apiKey ? null :
  <div style={ styles.diory || defaultStyles.diory }>
    <GoogleMap
      bootstrapURLKeys={{ key: apiKey }}
      center={{ lat: latitude, lng: longitude }}
      zoom={ zoom }
      onClick={ onMapClick }
      onChildClick={ getKeyAndDiory(onDioryClick) }
      onChildMouseEnter={ getKeyAndDiory(onDioryHoverBegin) }
      onChildMouseLeave={ getKeyAndDiory(onDioryHoverEnd) }
    >
      { getDiorys(children, diorys).map(enhanceWithDioryMapWrapper) }
    </GoogleMap>
  </div>
)

const getKeyAndDiory = action => (index, { Diory: { key, props: { actions, state, ...diory } } }) => {
  action && action({ key, diory })
}

const getDiorys = (childrenDiorys, propDiorys) => childrenDiorys ||
  Object.entries(propDiorys).map(([key, diory]) => <DioryMapPin key={ key } { ...diory } />)

DioryGoogleMap.defaultProps = {
  data: {
    geo: {
      latitude: 61.6316413,
      longitude: -12.0290996,
      zoom: 3
    }
  },
  actions: {
    onDioryClick: () => {},
    onDioryHoverBegin: () => {},
    onDioryHoverEnd: () => {}
  }
}

DioryGoogleMap.propTypes = {
  data: PropTypes.shape({
    apiKey: PropTypes.string,
    geo: PropTypes.object
  }),
  styles: PropTypes.object,
  diorys: PropTypes.object,
  actions: PropTypes.object,
  children: PropTypes.node
}

export default DioryGoogleMap
