import axios from '../../axios'
import {AppDispatch} from "../index";
import {IAirportCountry, IAirportRegion, IAirportType} from "../../model/models";
import {handbookSlice} from "../slices/handBookSlice";

export const fetchHandBooks = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(handbookSlice.actions.fetching())
            const response = await Promise.all([
                axios.get<IAirportType[]>('handbooks/airport-types'),
                axios.get<IAirportRegion[]>('handbooks/regions'),
                axios.get<IAirportCountry[]>('handbooks/countries'),
            ])
            console.log(response)
            dispatch(handbookSlice.actions.fetchSuccess({
                types: response[0].data,
                regions: response[0].data,
                countries: response[0].data,

            }))
        } catch (e) {

        }
    }
}