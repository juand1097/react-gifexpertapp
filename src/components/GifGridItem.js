import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    // console.log(img)

    return (
        <div className="card animate_animated animate_bounce"> 
            <img src = {url} alt = {title}></img>
            <p> { title }</p>
        </div>
    )
}
