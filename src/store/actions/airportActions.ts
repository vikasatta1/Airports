import {Dispatch} from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchAirports = () => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get('airports')
            console.log(res)
        } catch (e) {

        }
    }
}