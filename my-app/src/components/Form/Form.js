import { useState } from 'react';
import PropTypes from 'prop-types';


export default function Form({getData}) {
    const [request, setRequest] = useState('');
    
    
    const valueRequest = (e) => {
        setRequest(e.target.value)
    };

    const handleSubmit = values => {
        values.preventDefault();
        // setResultSearch(await getMovieSearch(request));
        getData(request);
        reset();
    };
    const reset = () => {
        setRequest('')
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={valueRequest} value={request} placeholder="Введите название фильма" />
                <button type="submit">Search</button>
            </form>
            
        </>
      
    )
};

Form.propTypes = {
  getData: PropTypes.func.isRequired,
};
