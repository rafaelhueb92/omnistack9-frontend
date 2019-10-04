import React, {useState }  from "react";
import api from "../../services/api";

export default function Login({history}){
    const [email, setEmail ] = useState('');
    const handleSubmit = async event => {
        event.preventDefault();
        const response = await api.post("/sessions",{email});
        const { _id} = response.data;
        localStorage.setItem('user',_id);
        history.push("/dashboard");
      }
    return ( 
    <>
    <p>
        Oferaça <strong>spots</strong> para programadores e encontre talentos para usa empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input type="email" id="email" placeholder="Seu melhor email"
               onChange={event =>setEmail(event.target.value)}
               value={email}/>
        <button type="submit" className="btn">Entrar</button>
      </form>
      </>
      );
}