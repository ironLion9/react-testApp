import React, {useState} from 'react';
import { Input, Button, Form} from 'reactstrap';
import Proptypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories(c => [inputValue, ...c]);
            setInputValue('');

        }

    }


    return (
        <Form onSubmit= { handleSubmit }>
        <h2 className='title'>Add Category</h2>
        <Button> Add </Button> 
        &nbsp;
        <Input
            type="text"
            onChange={ handleInputChange }
            value={inputValue}
            placeholder={'Ingrese...'}
            />
                 
        </Form>
    )
};


AddCategory.propTypes =  {
    setCategories: Proptypes.func.isRequired
};


export default AddCategory;
