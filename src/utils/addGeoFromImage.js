import Exif from '@fengyuanchen/exif'

const addGeoFromImage = diory => {
  if (!diory.image) {
    return Promise.resolve(diory)
  }

  const image = document.createElement('img')
  image.src = diory.image

  return new Promise(resolve => {
    new Exif(image, {
      done: exifTags => {
        if (exifTags.GPSLatitude && exifTags.GPSLongitude) {
          const [dLat, minLat, secLat] = exifTags.GPSLatitude
          const [dLong, minLong, secLong] = exifTags.GPSLongitude
          const latDirection = exifTags.GPSLatitudeRef === 'N' ? 1 : -1
          const longDirection = exifTags.GPSLongitudeRef === 'E' ? 1 : -1
          diory.data = {
            ...diory.data,
            geo: {
              latitude: (dLat + (minLat / 60) + (secLat / 3600)) * latDirection,
              longitude: (dLong + (minLong / 60) + (secLong / 3600)) * longDirection,
              zoom: 10
            }
          }
        }
        resolve(diory)
      },
      fail: message => {
        console.log(message)
        console.log('Failed to add geo data to diory: ', diory)
        resolve(diory)
      }
    })
  })
}

export default addGeoFromImage