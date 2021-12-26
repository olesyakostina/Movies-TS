import {IDataDetails} from './IDataDetails'

export interface IData{
    config: {},
    data:IDataDetails[],
    headers:{},
    request:{},
    status:number,
    statusText:string
}