import { googleApiKey } from './apiKeys'

export default {
  "diorys": {
    "lemmenjoki": {
      "text": "Lemmenjoki",
      "image": "http://www.luontoon.fi/documents/10550/13595772/Leammi_joenkielinen_MH_kuvakaruselli.jpg",
      "style": {
        "text": {
          "color": "white"
        }
      },
      "data": {
        "geo": {
          "latitude": 68.700261,
          "longitude": 25.9698823,
          "zoom": 10
        }
      },
      "diorys": {
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
    },
    "tampere": {
      "text": "Tampere",
      "image": "http://embec2017.org/wp-content/uploads/2016/10/N1.jpg",
      "style": {
        "text": {
          "color": "white"
        }
      },
      "data": {
        "geo": {
          "latitude": 61.4978,
          "longitude": 23.7610,
          "zoom": 10
        }
      }
    }
  },
  "tools": {
    "googleMapTool": {
      "text": "GoogleMapTool",
      "data": {
        "apiKey": googleApiKey,
        "geo": {
          "latitude": 61.4978,
          "longitude": 23.7610,
          "zoom": 4
        }
      }
    }
  }
}
