import axios, { AxiosResponse } from "axios";

const getAnimalsMovies = (): Promise<AxiosResponse> =>
    axios.get("https://api.tvmaze.com/shows?q=animals");

export default getAnimalsMovies;
