import React from 'react';
import {IAirport} from "../model/models";
import classes from './AirportCard.module.css'
import {useNavigate} from "react-router-dom";
interface AirportCardProps{
    airport:IAirport
}

const AirportCard = ({airport}: AirportCardProps) => {

    const navigate = useNavigate()
    const clickHAndler = () => navigate(`/airport/${airport.id}`)
    return (
        <div className={classes.card} onClick={clickHAndler}>
           <p className={'text-lg font-bold'}>{airport.name}</p>
            <p>{airport?.region}</p>
            <p>{airport?.type}</p>
            <p>{airport?.country}</p>
            <p>{airport?.local_code}</p>
            <p>{airport?.ident}</p>
        </div>
    );
};

export default AirportCard;