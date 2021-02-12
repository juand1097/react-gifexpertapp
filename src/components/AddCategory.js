import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( {setCategories } ) => {



    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        //if( inputValue.trim().lenght > 0) {
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
       // }

        // console.log('Submited')

    }

    return (
        <form onSubmit = { handleSubmit }>
            <h2>
                <input 
                type="text" 
                value = {inputValue}
                onChange = { handleInputChange }
                >
                </input>
            </h2>
            
        </form>
    )
}


    AddCategory.propTypes = {
        setCategories : PropTypes.func.isRequired
    }