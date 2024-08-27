import { useParams } from "react-router-dom"
import IBreeds from "../../types/IBreeds"
import { useEffect, useState } from "react"
import { useActions } from "../../hooks/useActions"
import { store } from "../../store"

const Breed = () => {
    const { cat = "1" } = useParams()


    const [cats, setCats] = useState<IBreeds>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null as null | string)
    
    const [nextButton, setNextButton] = useState(true)
    const [prevButton, setPrevButton] = useState(false)
   
    const { fetchBreed } = useActions()


    useEffect(() => {
        fetchBreed(cat)
    }, [cat])

    store.subscribe(() => {
        setCats(store.getState().fetchBreedReducer.breed)
    })

    return (
        <div className="flex flex-col items-center text-white">
            <h2 className="text-3xl">Breed</h2>
            <p>Имя: <span>{cats?.name}</span></p>
            <div className="flex gap-x-10">
                <div className="flex flex-col">
                    <p className="text-xl">Темперамент</p>
                    <div className="flex flex-col text-xl gap-2 text-center border-2 border-white p-2">
                        {cats?.temperament.split(",").map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <p className="flex flex-col text-xl">Страна: <span>{cats?.origin}</span></p>
                <p className="flex flex-col text-xl">Жизнь: <span>{cats?.life_span}</span></p>
                <img src={cats?.image} alt="" />
            </div>
        </div>
    )
}

export default Breed