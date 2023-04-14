import axios from "axios"
import { urls } from "../constants/apiUrl";

export const getContriesByName = async (name = "Colombia") => {
    let contry = {}
    try {
        await axios.get(`${urls.CONTRY_API}${name}`).then((response) => {
            const contryData = response.data[0]
            contry = {
                image: contryData.flags.svg,
                name: contryData.name.common,
                region: contryData.region,
                borders: contryData.borders,
            }
        });
    } catch (error) {
        console.log(error)
    }
    return contry
}