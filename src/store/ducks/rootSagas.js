
import * as Eff from 'redux-saga/effects';

import * as FormsSagas from "./forms/sagas"
import { FormsTypes } from "./forms/types"


export default function* rootSaga(){
    const takeLatest= Eff.takeLatest;
    return yield Eff.all([
        takeLatest(FormsTypes.GET_CAT_GALLERY, FormsSagas.getCatGallery),
       
    ])
}