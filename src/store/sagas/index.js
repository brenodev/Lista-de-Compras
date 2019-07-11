import { takeLatest, all} from 'redux-saga/effects'

import { Types as ListTypes } from '../actions/List'
import { getImageRequest } from './List-saga'

export default function* rootSaga() {
  return yield all([
    takeLatest(ListTypes.ADD_PRODUCT, getImageRequest)
  ])
}