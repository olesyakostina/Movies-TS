import { IDataDetails } from "types/IDataDetails";
import { IDetails } from "types/IDetails";

export interface IStore {
    data: IDataDetails[];
    details: IDetails | null;
}
