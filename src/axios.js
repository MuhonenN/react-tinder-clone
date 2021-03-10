import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-backendi.herokuapp.com/'
})

export default instance