import { ITeam } from "../Interfaces";

export const searchEngine = (data: ITeam[], searchText: string)=>{
    const searchResult: ITeam[] = [];
    
    for(let i: number = 0; i<data.length; i++){
        const searchableTeamName = data[i].teamName.toLowerCase();
        if(searchableTeamName.includes(searchText.toLowerCase())){
            searchResult.push(data[i]);
        }
    }

    return searchResult;
}