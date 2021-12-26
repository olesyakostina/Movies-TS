import { IImage } from "./IImage";
import { INetwork } from "./INetwork";
import { IRating } from "./IRating";
import { IGenres } from "./IGenres";
//обьект для reduser
export interface IDetails {
    genres: IGenres[];
    id: number;
    image: IImage;    
    name: string;
    network: INetwork;
    rating: IRating;
    premiered: string;
    summary: string;
    url: string;
}
