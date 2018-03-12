const addMiddleGeo = diory => {
  const diorysMiddlePoint = getMiddlePointGeo(diory)
  return isEmptyObject(diorysMiddlePoint) ? diory : ({
      ...diory,
      data: {
        ...diory.data,
        geo: diorysMiddlePoint
      }
    })
}

const getMiddlePointGeo = ({ diorys = {} }) => Object.entries(diorys)
  .map(getDioryFromEntry)
  .map(getGeo)
  .filter(nonEmpty)
  .reduce((ave, geo, i, arr) => ({
    latitude: (ave.latitude || 0) + geo.latitude / arr.length,
    longitude: (ave.longitude || 0) + geo.longitude / arr.length,
    zoom: 10
  }), {})

const isEmptyObject = (obj = {}) => !Object.keys(obj).length
const getDioryFromEntry = ([key, diory]) => diory
const getGeo = ({ data = {} }) => data.geo
const nonEmpty = data => data && !isEmptyObject(data)

export default addMiddleGeo