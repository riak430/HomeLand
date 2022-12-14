import React, { useContext } from 'react';
import { HouseContext } from '../components/HouseContext';

import House from './House';

import { Link } from 'react-router-dom';

// import { ImSpinner2 } from 'react-icons-im'
const HouseList = () => {
    const {houses,loading } = useContext(HouseContext);
    console.log(houses)
    return(
        <section className='mb-20'>
            <div className='container mx-auto'>
                <div>
                    {houses.map((house, index) => {
                        return(
                            <Link to={`/property/${houses.id}`} key={index}>
                                <House house={house}/>
                            </Link>
                        ) 
                    })}
                </div>
            </div>
        </section>
    )
}
export default HouseList;