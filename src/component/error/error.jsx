import { Link } from "react-router-dom"


const Error = ( )=>{
    return(
        <div className="containerError">
            <h1>404</h1>
            <p>Oups! La page que <br/> vous demandez n'existe pas.</p>
            <Link to='/home'>Retourner sur la page d’accueil</Link>
        </div>
    )
}
export default Error