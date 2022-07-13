import axios from '../../axios'
import {AppDispatch} from "../index";
import {IAirport, ServerResponse} from "../../model/models";
import {airportSlice} from "../slices/airportSlice";

export const fetchAirports = (page = 1, count = 10) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(airportSlice.actions.fetching())
            const res = await axios.get<ServerResponse<IAirport>>('airports', {
                params: {page, count}
            })
            console.log(res)
            dispatch(airportSlice.actions.fetchSuccess({
                airports: res.data.results,
                count: res.data.count
            }))
        } catch (e) {
            dispatch(airportSlice.actions.fetchError(e as Error))
        }
    }
}