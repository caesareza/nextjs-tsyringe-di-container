import axios from "axios";

export class PokemonService {
    async execute() {
        try {
            // Make the HTTP request
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon')

            // Return the API response
            return response.data;
        } catch (error) {
            console.error("Error fetching data from API:", error);
            throw new Error("Failed to fetch data from API.");
        }
    }
}