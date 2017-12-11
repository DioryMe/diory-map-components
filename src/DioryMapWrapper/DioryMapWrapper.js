import { cloneElement } from 'react'
import PropTypes from 'prop-types'

const DioryMapWrapper = ({ $hover, Diory }) =>
  cloneElement(Diory, { state: { hover: $hover, ...Diory.props.state } })

DioryMapWrapper.propTypes = {
  $hover: PropTypes.bool,
  Diory: PropTypes.node
}
export default DioryMapWrapper
