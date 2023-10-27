import { errorResponse } from "@/utils/errorResponse";
import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_APP_API_URL

export const getPokemonCategories = async () => {
    try {
        const response = await axios.get(API_URL + "/type");
        const data = response.data?.results;

        return data;
    } catch (err) {
        toast.error(errorResponse(err));
        return;
    }
};

export const getPokemonByCategoryId = async(pokemonType) => {
    try {
        const response = await axios.get(API_URL + "/type/" + pokemonType);
        const data = response.data;

        return data;
    } catch (err) {
        toast.error(errorResponse(err));
        return;
    }
}

export const getPokemonDetails = async(pokemonName) => {
    try {
        const response = await axios.get(API_URL + "/pokemon/" + pokemonName);
        const data = response.data;
        return data;
    } catch (err) {
        toast.error(errorResponse(err));
        return;
    }
}