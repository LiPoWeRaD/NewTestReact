import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    
    const navigate = useNavigate();

    const hanldeLikes = () => {
        if (window.location.pathname === "/likes") {
            return <button onClick={() => navigate(-1)} className="text-3xl text-white font-extrabold">Likes</button>
        } else {
            return <Link className="text-3xl text-white font-extrabold" to="/likes">Likes</Link>
         }
    }

    return (
        <div className="container py-5 mx-auto flex justify-between">
            <Link className="text-3xl text-white font-extrabold" to="/">Home</Link>
            {hanldeLikes()}
        </div>
    )
}

export default Header