import { useState } from "react"
const ArrayItems = [
    {   
        id:0,
        title:"Fiabilité",
        content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
        id:1,
        title:"Respect",
        content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        id:2,

        title:"Service",
        content:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        id:3,
        title:"Sécurité",
        content:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
]
export function DeroulantBis(props){
    const [State,setState] = useState("close")
    
    function toggleState(){
        if(State==='close'){
            setState("open")
        }
        else{
            setState("close")
        }
    }    
    
    
    return (
        <div className={State==="close"?"menu":"menu open"} onClick={toggleState}>
            <div className="barre">
                <p>{props.title}</p><img src="../fleche.svg" alt="fleche vers le bas." />
            </div>
            {State==="close"?<></>:<div className="containerContent list">{props.content.map(e =><p>{e}</p>)}</div>}
            
        </div>
    )
    
 
}
export function Deroulant(props){
    const [IsOpen,setIsOpen] = useState(false)
    

    
    return (
        <div className={IsOpen?"menu open":"menu"} onClick={()=>setIsOpen(!IsOpen)}>
            <div className="barre">
                <p>{props.title}</p><img src="../fleche.svg" alt="fleche vers le bas." />
            </div>
            {IsOpen?<div className="containerContent">{props.content}</div>:null}
        </div>
    )
    
 
}

const About = ()=>{
    return (
        <div className="about">
            <div className="containerImg">
                <div className="aboutImage"/>
            </div>
            <div className="containerMenu">
                {ArrayItems.map((e)=>{
                return <Deroulant title={e.title} key={e.id} content={e.content} />
                })} 
            </div>
           

        </div>
    )
}
export default About
