import { Types } from '../actions/Form'

const initialState = {
  action: 'new',
  listToUpdate: null,
  productToUpdade: {},
}

export default function Form(state = initialState, action) {
  switch (action.type) {
    case Types.START_UPDATE:
      return {
        action: 'update',
        listToUpdate: action.list,
        productToUpdade: action.product
      }
    case Types.FINISH_UPDATE:
      return {
        action: 'new',
        listToUpdate: null,
        productToUpdade: {},
      }
    default:
      return state
  }
}