import React, {useEffect, useState} from 'react';
import {useInput} from "../hook/input";
import {useDebounce} from "../hook/debounce";
import axios from '../axios/index';
import {IAirport, ServerResponse} from "../model/models";
import {useNavigate} from "react-router-dom";


const AirportSearch = () => {
    const input = useInput('')
    const debounced = useDebounce<string>(input.value, 400) // хук автоматизирует инпут
    const [airports, setAirports] = useState<IAirport[]>([])
    const [dropdowm, setDropdown] = useState(false)
    const navigate = useNavigate()

    /*    const clickHAndler =*/
    async function searchAirports() {
        const response = await axios.get<ServerResponse<IAirport>>('airports', {
            params: {
                search: debounced,
                count: 10
            },
        })
        setAirports(response.data.results)
    }

    useEffect(() => {
        if (debounced.length >= 3) {
            searchAirports().then(()=>setDropdown(true))
        }else{
            setDropdown(false)
        }
    }, [debounced])

    return (
        <div className={'md-4 relative'}>
            <input
                type={'text'}
                className={'border py-2 px-4 md-4 outline-0 w-full h-[42px]'}
                placeholder={'Type something here...'}
                {...input}
            />
            {dropdowm && <ul className={'absolute left-0 right-0 h-[200px] top-[42px] shadow-md bg-white overflow-y-scroll'}>
                {
                    airports.map((airport) => (
                        <li
                            key={airport.id}
                            className={'py-2 px-2 md-2 hover:bg-gray-500 hover:transition-colors cursor-pointer hover:text-white'}
                            onClick={() => navigate(`/airport/${airport.id}`)}
                        >
                            {airport.name}
                        </li>))
                }
            </ul>}
        </div>
    );
};

export default AirportSearch;