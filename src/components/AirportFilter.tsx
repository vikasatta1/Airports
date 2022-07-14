import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppSelector} from "../hook/redux";
import {IFilter} from "../model/models";

const AirportFilter = () => {
    const {regions, loading, types, countries} = useAppSelector(state => state.handbook)
    const [hasFilter, setHasFilter] = useState(false)
    const [filter, setFilter] = useState<IFilter>({
        type: '',
        country: '',
        region: '',
    })


    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter(prev => ({...prev, [event.target.name]: event.target.value}))
       /* setHasFilter(true)*/
    }
    const isFilterEnable = () => {
        return filter.type || filter.region || filter.country
    }
    const clearFilter = () => {
        setFilter({type: '',
            country: '',
            region: '',})
    }


    useEffect(()=>{
        if(isFilterEnable()){
            setHasFilter(true)
        }else{
            setHasFilter(false)
        }
    },[filter])
    if (loading) return <p className={'text-center'}>Loading...</p>
    return (

        <div className={'border py-2 px-4 md-2'}>
            <span className={'font-bold mr-2'}> Filter</span>

            <select
                name={'type'}
                className={'mr-2 border py-1 px-2'}
                onChange={onChangeHandler}
                value={filter.type}
            >
                <option value={''} disabled>Type</option>
                {types.map(t => <option key={t}>
                    {t}
                </option>)}
            </select>

            <select
                name={'country'}
                className={'mr-2 border py-1 px-2'}
                onChange={onChangeHandler}
                value={filter.country}
            >
                <option value={''} disabled>Country</option>
                {countries.map(c => <option key={c}>
                    {c}
                </option>)}
            </select>

            <select
                name={'region'}
                className={'mr-2 border py-1 px-2 mr-4'}
                onChange={onChangeHandler}
                value={filter.region}
            >
                <option value={''} disabled>Region</option>
                {regions.map(r => <option key={r}>
                    {r}
                </option>)}
            </select>
            {hasFilter && <button onClick={clearFilter} className={'py-1 px-4 bg-red-700 text-white rounded '}>
                &times;
            </button>}
        </div>
    );
};

export default AirportFilter;