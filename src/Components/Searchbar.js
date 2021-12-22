import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MovieApi from "../api/MovieApi.js"

const Searchbar = () => {
    let navigate = useNavigate()
    useEffect(() => {
        document.querySelector('input[type="text"]').addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                let result = async () => {
                    navigate("/", { state: await MovieApi.baseSearch(e.target.value) })
                }
                result()
            }
        })
    }, [])
    return <input type="text" name="search" />
}

export default Searchbar