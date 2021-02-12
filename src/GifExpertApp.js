import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball',''];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (element) => {
    //     setCategories([...categories,'HunterXhunter'])
    //     // setCategories(categories => [...categories,'HunterXhunter'])
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }></AddCategory>
            <hr></hr>


            <ol>
                {
                    categories.map( (category) => (

                        // <li>   key= {category }    { category  }</li>

                        <GifGrid 
                        key = {category }
                        category = { category  } 
                        />
                        // <GifGrid  
                        //           category = { category  }
                        // ></GifGrid>

                        ))
                }
            </ol>
        </div>
    )
}
