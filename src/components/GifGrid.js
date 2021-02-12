import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate_animated animate_bounce"> { category } </h3>

        {loading && <p className="animate_animated flash">Loading</p> }

        <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifGridItem
                        key = {img.id} 
                        {...img}
                        ></GifGridItem>
                    ))
                }
        </div>
        </>
    )
}
