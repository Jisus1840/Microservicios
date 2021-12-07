import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertPersona = payload => api.post(`/Persona`, payload)
export const getAllPersonas = () => api.get(`/Personas`)
export const updatePersonaById = (id, payload) => api.put(`/Persona/${id}`, payload)
export const deletePersonaById = id => api.delete(`/Persona/${id}`)
export const getPersonaById = id => api.get(`/Persona/${id}`)

const apis = {
    insertPersona,
    getAllPersonas,
    updatePersonaById,
    deletePersonaById,
    getPersonaById,
}

export default apis