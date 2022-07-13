import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAirport, IAirportCountry, IAirportRegion, IAirportType} from "../../model/models";

interface HandBookState {
    loading: boolean
    types: IAirportType[]
    regions: IAirportRegion[]
    countries: IAirportCountry[]
}

const initialState: HandBookState = {
    loading: false,
    types: [],
    regions: [],
    countries: []
}

interface HandBookPayload {
    types: IAirportType[]
    regions: IAirportRegion[]
    countries: IAirportCountry[]
}

export const handbookSlice = createSlice({
    name: 'handbook',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<HandBookPayload>) {
            state.loading = false
            state.types = action.payload.types
            state.regions = action.payload.regions
            state.countries = action.payload.countries

        },
    }
})

export default handbookSlice.reducer