import axios from 'axios';
import * as data from '../../key.json';

const { key } = data;

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        "Accept": "application/json",
        "user-key": key,
    }
});