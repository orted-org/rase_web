import styled from "styled-components";
import { StyledTopBar } from "../MicroComponents/TopBar";
import { SideBar } from "../AuxComponents/Sidebar";
import { StyledPageContainer, StyledPageContent, StyledHeading } from "../AuxComponents/PageContainer";
import { StyledSearchBar } from "../MicroComponents/SearchBar";
import { useEffect, useState } from "react";
import { IconContainer } from "../MicroComponents/IconContainer";
import { SVG } from "../AuxComponents/Svg";
import { PlaceFiller } from "../AuxComponents/Filler";
import { StyledRecyclerView } from "../AuxComponents/Flex";
import { ITeam } from "../Interfaces";
import { StyledItem } from "../MicroComponents/Item";
import { StyledCardContainer, StyledTeam, StyledUpcoming } from "../MicroComponents/Card";
import { SecondaryButton } from "../MicroComponents/Button";
import { taskTeamsData } from "../util/taskData";
import { searchEngine } from "../Helpers/SearchUtil";

// ----------------------------- Interfaces --------------------------

interface ISearchTeamsPageProps{

}

// ----------------------------- End of interface ----------------------

function SearchTeamsPage(props: ISearchTeamsPageProps){
    const [searchText, setSearchText] = useState<string>('');
    const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isTeacher, setIsTeacher] = useState<boolean>(true);
    const [teamsData, setTeamsData] = useState<ITeam[]>(taskTeamsData);
    const [searchResult, setSearchResult] = useState<ITeam[]>([]);

    const toggleSideBar = ()=>{
        setIsSidebarOpen(prevState=>{
            return !prevState;
        });
    }

    useEffect(()=>{
        setSearchResult(searchEngine(teamsData, searchText));
    },[searchText])

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={toggleSideBar}>
                    {SVG.menubar}
                </IconContainer>
                <h2>Search Teams</h2>
                <PlaceFiller></PlaceFiller>
            </StyledTopBar>
            <StyledPageContent>
            <div style={{
                    width: '90%',
                    paddingLeft: 5,
                    margin: '10px auto',
                    display: 'block',
                    flexDirection: 'row',
                }}  
                >
                <StyledSearchBar
                    type = "text"
                    placeholder = "Search for teams"
                    value = {searchText}
                    onChange = {(e) => {
                        setSearchText(e.target.value);
                    }}
                />
            </div>
            <StyledRecyclerView>
                {
                    searchText === ''?
                    teamsData.map((team: ITeam)=>{
                        return (
                            <StyledItem>
                                <StyledCardContainer>
                                    <StyledTeam style={{ width: '70%' }}>
                                        <p style={{fontSize: '1.3rem'}}>{team.teamName}</p>
                                    </StyledTeam>
                                    
                                    <StyledUpcoming style={{alignSelf: 'center'}}>
                                        <SecondaryButton text="View" style={{ width: '100%'}}></SecondaryButton>
                                    </StyledUpcoming>
                                </StyledCardContainer>
                            </StyledItem>
                        )
                    }) : 
                    searchResult.map((team: ITeam)=>{
                        return(
                            <StyledItem>
                                <StyledCardContainer>
                                    <StyledTeam style={{ width: '70%' }}>
                                        <p style={{fontSize: '1.3rem'}}>{team.teamName}</p>
                                    </StyledTeam>
                                    
                                    <StyledUpcoming style={{alignSelf: 'center'}}>
                                        <SecondaryButton text="View" style={{ width: '100%'}}></SecondaryButton>
                                    </StyledUpcoming>
                                </StyledCardContainer>
                            </StyledItem>
                        )
                    })
                }
            </StyledRecyclerView>
            </StyledPageContent>
        </StyledPageContainer>
    );
}

export default SearchTeamsPage;