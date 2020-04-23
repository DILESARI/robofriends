import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
        {/* in className you can add every tachyons */}
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type="text" 
                placeholder="Please search"
                onChange={searchChange}
                
            />
        </div>    
    )   
}

export default SearchBox;