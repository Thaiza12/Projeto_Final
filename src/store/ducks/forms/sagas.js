
import { put, call } from 'redux-saga/effects';
import { getCatGallerySuccess} from './actions';
import api from '../../../api'


export function* getCatGallery({payload}) {
    try {
        const url = `/v1/images`
        console.log("iniciou sagas getCeps")
        const { data } = yield call(api.get, url)
        yield put(getCatGallerySuccess(data))
    } catch (error) {
        console.log(error)
    }
}