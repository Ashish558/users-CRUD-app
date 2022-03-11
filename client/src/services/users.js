import axios from 'axios'
import { domain } from './constants'

const baseUrl = `${domain}/user`

export const getUsers = (cb) => {
    axios.get(`${baseUrl}/get`)
        .then(res => cb(null, res.data))
        .catch(err => cb(err, null))
}



export const addUser = (data, cb) => {
    axios.post(`${baseUrl}/add`, data)
        .then(res => cb(null, res))
        .catch(err => cb(err, null))
}


export const editUser = (data, cb) => {
    axios.put(`${baseUrl}/edit`, data)
        .then(res => cb(null, res.data))
        .catch(err => cb(err, null))
}

export const deleteUser = (_id, cb) => {
    axios.put(`${baseUrl}/delete`, {_id})
        .then(res => cb(null, res.data))
        .catch(err => cb(err, null))
}


