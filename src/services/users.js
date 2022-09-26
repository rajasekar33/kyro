
import axios from 'axios'

const BASE_URI = "https://kyro-user-service-mgmqxruica-uc.a.run.app/users"

export const getUserById = async (id) => {
    return new Promise(async (resolve, reject) => {
        const user = await axios.get(`${BASE_URI}/${id}`)
        if(user.data) resolve(user.data)
        else reject(null)
    })
}

export const updateUserById = async (id, payload) => {
    return new Promise(async (resolve, reject) => {
        try{
            const user = await axios.patch(`${BASE_URI}/${id}`, payload)
            resolve(user)
        }catch(err){
            resolve(null)
        }
       
    })
}