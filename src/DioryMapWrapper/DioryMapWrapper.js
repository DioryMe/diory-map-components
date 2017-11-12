import { cloneElement } from 'react'

const DioryMapWrapper = ({ $hover, Diory }) =>
  cloneElement(Diory, { state: { hover: $hover } })

export default DioryMapWrapper
