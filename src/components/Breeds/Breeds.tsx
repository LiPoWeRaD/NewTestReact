import { useEffect, useState } from "react"
import { useActions } from "../../hooks/useActions"
// import IAnimal from "../../types/IAnimal"
import { store } from "../../store"
import IBreeds from "../../types/IBreeds"
import { Link, useLocation, useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

// block
const Breeds = () => {
    const { page = 1 } = useParams()
    
    const navigate = useNavigate();
    const location = useLocation();

    const [cat, setCat] = useState<IBreeds[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null as null | string)
    
    const [nextButton, setNextButton] = useState(true)
    const [prevButton, setPrevButton] = useState(false)
   
    const { fetchBreeds } = useActions()

    
    

    useEffect(() => {
        fetchBreeds(10, Number(page))

        setCat(store.getState().fetchBreedsReducer.breeds)

    }, [page])    
    
    useEffect(() => {
        Number(page) === 1 ? setPrevButton(false) : setPrevButton(true)
        Number(page) >= 2 ? setNextButton(false) : setNextButton(true)
    }, [page])

    store.subscribe(() => {
        setCat(store.getState().fetchBreedsReducer.breeds)        

        setLoading(store.getState().fetchBreedsReducer.loading)

        setError(store.getState().fetchBreedsReducer.error)
    })

    const removeAllSearchParams = () => {
        navigate({ pathname: location.pathname, search: '' });
      };

    console.log(cat);
    

    if (cat.length === 0 && !loading && !error) {
        return <h1 className="text-5xl text-center">No data</h1>
    }

    if (loading) {
        return <h1 className="text-5xl text-center">Loading...</h1>
    }

    if (error) {
        return <h1 className="text-5xl text-center">{error}</h1>
    }    

    return (
        <div className="flex flex-col justify-center items-center gap-y-5 text-white">
            <h1 className="text-5xl mt-7">Dogs List</h1>
            <ul className="flex flex-wrap justify-center gap-4">
                {Array.from(cat).map((item) => (
                    <li className="relative p-3 flex flex-col w-64 h-64 justify-end rounded-2xl bg-slate-700 z-0"  key={item.id}>
                        <Link onClick={removeAllSearchParams} to={`/breed/${item.id}`} className="text-3xl text-center">
                            <h2 className="p-2 text-4xl font-bold text-center text-white bg-slate-700 rounded-2xl bg-opacity-60">{item.name ? item.name : "Не определено"}</h2>
                            <img className="absolute top-0 left-0 w-full h-full rounded-2xl -z-10" src={item.image ? item.image : ""} alt="" />
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex gap-5">
                <Link className={`text-3xl ${prevButton ? "block" : "hidden"}`} to={`/${Number(page) - 1}`}>{`<<`}</Link>
                <p className="text-3xl">{page}</p>
                <Link className={`text-3xl ${nextButton ? "block" : "hidden"}`} to={`/${Number(page) + 1}`}>{`>>`}</Link>
            </div>
        </div>
    )
}

export default Breeds