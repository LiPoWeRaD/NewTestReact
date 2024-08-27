import { FormEvent, useEffect, useState } from "react"
import { useActions } from "../../hooks/useActions"
import Breeds from "../../components/Breeds"


const Main = () => {
    return (
        <section className="container mx-auto">
            <Breeds />
        </section>
    )
}

export default Main
