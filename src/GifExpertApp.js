import React, { useState } from 'react';
import map from 'lodash/map';


import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';






const GifExpertApp = ({value}) => {

    const [categories, setCategories] = useState(['Samsung']);

    //  console.log(categories)

    //  const handleAdd = ({value}) => {
    //     setCategories( c => [...c, value])
    //  };



    return (
        <>

        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>

        <ol>
            {
               map( categories, category => {
                        return (
                           <GifGrid
                            key={category}
                            category={ category } />
                    )
                })
            }
        </ol>
        

        </>
    )



};


export default GifExpertApp;