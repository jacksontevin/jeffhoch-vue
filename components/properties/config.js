import _ from 'lodash'
const initialDocs = {
  name: '',
  fileLocation: '',
  fileKey: '',
  fileName: '',
}

export const initialPayload = {
  images: [],
  title: '',
  subTitle: '',
  propertyType: '',
  saleType: '',
  constructionStatus: '',
  ownership: '',
  furnishing: '',
  facing: '',
  bathroom: null,
  totalRoom: null,
  floor: null,
  buildingAge: null,
  parkingSpots: null,
  description: '',
  facilities: '',
  documents: [_.cloneDeep(initialDocs)],
  address: {
    attractions: ['Gota Cross 1 km', 'sg highway 2 km', 'iscon 15 km'],
    latitude: '23.01975998236786',
    longitude: '72.50944999629141',
    sortAddress: 'gota ahmedabad',
    fullAddress: 'N-604 ICB Floora Gota Ahmedabad',
    pinCode: '362630',
    landmarks: 'Gota Cross',
    city: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
  },
  payment: {
    min: 0,
    max: null,
    currency: 'INR',
    type: 'Yearly',
  },
  services: ['test1', 'test2'],
  amenities: ['RO'],

  squareFeet: {
    type: 'square',
    min: 0,
    max: null,
  },
  driveInDoors: false,
  heavyPower: false,
  highCeilings: false,
  standingBuilding: false,
  workingWithAnotherBroker: false,
  slidingDoor: false,
  status: 'Pending',
  seller: '',
  declineNote: '',
}

export { initialDocs }
