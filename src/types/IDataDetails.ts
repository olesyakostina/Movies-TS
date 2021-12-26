import { IImage } from "./IImage";
import { IDetails } from "./IDetails";
import { INetwork } from "./INetwork";
import { IRating } from "./IRating";

// приходит массив с этими данными
export interface IDataDetails {
    genres: [];
    id: string;
    image: IImage;
    name: string;
    network: INetwork;
    rating: IRating;
    premiered: string;
    summary: string;
    url: string;
    details: IDetails;
}
