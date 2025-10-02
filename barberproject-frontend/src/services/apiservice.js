import axios from "axios"

const API_URL = "vou botar a porta que vc abrir o backend aqui"

export const adicionarAgendamento = (agendamento) => {
    return axios.post(API_URL, agendamento)
}