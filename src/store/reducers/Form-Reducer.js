import { Types } from '../actions/Form'

const initialState = {
  action: 'new',
  productToUpdade: {},
}

export default function Form(state = initialState, action) {
  switch (action.type) {
    case Types.START_UPDATE:
      return {
        action: 'update',
        productToUpdade: action.product
      }
    default:
      return state
  }
}