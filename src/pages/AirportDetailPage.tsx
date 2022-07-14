import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../axios/index";
import {AirportDetail} from "../model/models";

const AirportDetailPage = () => {
    const params = useParams<'id'>()
    const [airport,setAirport] = useState<AirportDetail | null>(null)
    const [loading,setLoading] = useState<boolean>(true)
    async function fetchDetailAirport(){
       const response =  await  axios.get(`/airports/${params.id}`)
        setAirport(response.data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchDetailAirport()
    },[])
    if(loading) return <p className={'text-center'}>Loading...</p>
    return (
        <div className={'container mx-auto max-w-[760px] pt-5 '}>
            <h1 className={'text-center text-2xl'}>{airport?.name}</h1>
            <h1 className={'text-center text-2xl'}>{airport?.continent}</h1>
            <h1 className={'text-center text-2xl'}>{airport?.country}</h1>
            <h1 className={'text-center text-2xl'}>{airport?.region}</h1>
            <h1 className={'text-center text-2xl'}>{airport?.coordinates}</h1>
        </div>
    );
};

export default AirportDetailPage;