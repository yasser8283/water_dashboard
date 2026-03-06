
import { waterData } from "../data/waterData";

export const useFilterData = (location) => {
    const filteredData = waterData.filter((elem) => {
       return elem.location === location 
    })
    return filteredData;
}
