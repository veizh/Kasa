import React from "react";
import { Link } from "react-router-dom";
import api from "../../api";

const Slogan = ()=>{
    return(
        <div className="containerSlogan">
            <div className="slogan" />
            <h1>Chez vous, partout et ailleurs.</h1>
        </div>
    )
    
}
const ContainerLogement =(props)=>{
    return (
        <Link className="containerLogement" to={"/Logement?id="+props.id}>
            <img src={props.cover} alt="maison a louer" />
            <h1> {props.title}</h1>
        </Link>
    )
}
const Home = (props) =>{

    return(
        <div className="home">
            <Slogan />
            <div className="containerLogements">

                {api.map((e)=>{

                return <ContainerLogement key={e.id}  id={e.id} title={e.title}  cover={e.cover}/>
                 })}

            </div>
                
            
        </div>
    )
}
export default Home