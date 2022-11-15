import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 5750b6b36699f5306d551ab4cac7af61043019ecf30ab405302fd6cb0bfe9cd1',
    }
});
