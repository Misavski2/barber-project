import "./Clientmainscreen.css"
import { useState } from "react"


const ClientMainScreen = () =>{

    const [nome, setNome] = useState ("")
    const [telefone, setTelefone] = useState ("")
    const [servico, setServico] = useState("")
    const [barbeiro, setBarbeiro] = useState("")

    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const novoAgendamento = {nome, telefone, servico, barbeiro}

        try{
            await adicionarAgendamento(novoAgendamento)
            setNome("")
            setTelefone("")
            setServico("")
            setBarbeiro("")
        }
        catch (error){
            console.error(error)
            alert("erro ao enviar agendamento")
        }
    }
    


    return(
        <div className="clientform">
            <div className="clientformtitle">
                <h1>Welcome</h1>
                <a href="">admin</a>
            </div>
            <form name="clientform" onSubmit={handleSubmit}>
                <div className="nameinput">
                    <input type="text" placeholder="Nome" value={nome} onChange={e => setNome (e.target.value)}/>
                </div>

                <div className="zapinput">
                    <input type="tel" placeholder="Telefone/Whatsapp" value={telefone} onChange={e => setTelefone (e.target.value)} />
                </div>

                <div className="serviceinput">
                    <label htmlFor="">Servico</label>
                    <select value={servico} onChange={e => setServico (e.target.value)}>
                        <option value="Degradê">Degradê</option>
                        <option value="Social">Social</option>
                        <option value="Consultoria">Consultoria</option>
                    </select>
                </div>

                <div className="barberinput">
                    <label htmlFor="">Barbeiro</label>
                    <select value={barbeiro} onChange={e => setBarbeiro (e.target.value)}>
                        <option value="Mauricio">Mauricio</option>
                        <option value="André">André</option>
                        <option value="Lais">Lais</option>
                    </select>
                </div>

                <div className="submitbutton">
                    <button type="submit">Agendar</button> 
                </div>
                
                
            </form>
        </div>
    )
}

export default ClientMainScreen