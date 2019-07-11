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
    case Types.FINISH_UPDATE:
      return {
        action: 'new',
        productToUpdade: {},
      }
    default:
      return state
  }
}