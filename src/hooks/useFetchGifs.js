

import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    

    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    

    useEffect(() => {

        getGifs(category)
        .then( imgs => {


                setstate({
                    data:imgs,
                    loading: false
                });
                   
            })
        }, [category])

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3],
    //         loading: false,
    //     })
        
    // }, 2000);

    return state;

}
