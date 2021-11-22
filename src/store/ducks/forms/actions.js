import { action } from "typesafe-actions"
import { FormsTypes} from "./types"

export const savePersonalForm= (values) => {
    return action(FormsTypes.SAVE_PERSONAL_FORM, values)
}

export const getCatGallery =(values) =>{
    return action(FormsTypes.GET_CAT_GALLERY, values)
}
export const getCatGallerySuccess=(values)=>{
    return action(FormsTypes.GET_CAT_GALLERY_SUCCESS, values)

}