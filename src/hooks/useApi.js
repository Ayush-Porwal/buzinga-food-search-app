import { useState, useEffect } from 'react';
import zomato from '../api/zomato';


export default () => {
    const [apiResult, setApiResult] = useState([]);
    const [errorMsg, setErrMsg] = useState('');

    const queryAPI = async ( query ) => {
        try{
            const response = await zomato.get('/search', {
                params: {
                    q: query
                }
            });
            setApiResult(response.data.restaurants);
        }
        catch(error){
            setErrMsg('The query has failed for an unknown reason. Please try again later :(')
        }
    }

    useEffect( () => {
        queryAPI('curry');
    }, [])

    return [queryAPI, errorMsg, apiResult]
};