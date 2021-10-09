import { useTheme } from "styled-components";
import { StyledTopBar } from "../MicroComponents/TopBar";
import { SideBar } from "../AuxComponents/Sidebar";
import { StyledPageContainer, StyledPageContent, StyledHeading } from "../AuxComponents/PageContainer";
import { StyledSearchBar } from "../MicroComponents/SearchBar";
import { useContext, useEffect, useState } from "react";
import { IconContainer } from "../MicroComponents/IconContainer";
import { SVG } from "../AuxComponents/Svg";
import { PlaceFiller } from "../AuxComponents/Filler";
import { StyledFlexBoxRow, StyledRecyclerView } from "../AuxComponents/Flex";
import { ITeam } from "../Interfaces";
import { StyledItem } from "../MicroComponents/Item";
import { StyledCardContainer, StyledTeam, StyledUpcoming } from "../MicroComponents/Card";
import { FixedButton, SecondaryButton } from "../MicroComponents/Button";
import { taskTeamsData } from "../util/taskData";
import { searchEngine } from "../Helpers/SearchUtil";
import { useHistory } from "react-router";
import { SideBarContext } from "../util/Context";

// ----------------------------- Interfaces --------------------------

interface ISearchTeamsPageProps{

}

// ----------------------------- End of interface ----------------------

function JoinTeamPage(props: ISearchTeamsPageProps){
    const [searchText, setSearchText] = useState<string>('');
    // const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isTeacher, setIsTeacher] = useState<boolean>(true);
    const [teamsData, setTeamsData] = useState<ITeam[]>(taskTeamsData);
    const [searchResult, setSearchResult] = useState<ITeam[]>([]);
    const history = useHistory();
    const sideBarContext = useContext(SideBarContext);
    const theme = useTheme() as any;

    // const toggleSideBar = ()=>{
    //     setIsSidebarOpen(prevState=>{
    //         return !prevState;
    //     });
    // }

    useEffect(()=>{
        setSearchResult(searchEngine(teamsData, searchText));
    },[searchText])

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={sideBarContext.isSidebarOpen} toggleSideBar={sideBarContext.toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={sideBarContext.toggleSideBar}>
                    {SVG.menubar}
                </IconContainer>
                <h2>Join Team</h2>
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
            <StyledHeading>
                <h3>Available teams</h3>
                <PlaceFiller/>
            </StyledHeading>
            <StyledRecyclerView>
                {
                    searchText === ''?
                    teamsData.map((team: ITeam)=>{
                        if(team.teamMembers!==undefined){
                            for(let i = 0; i<team.teamMembers.length; i++){
                                team.teamMembers[i] = team.teamMembers[i].split(" ")[0];
                            }

                            return (
                                <StyledItem>
                                    <StyledCardContainer>
                                        <StyledTeam style={{ width: '70%' }}>
                                            <p style={{fontSize: '1.3rem'}}>{team.teamName}</p>
                                            <StyledFlexBoxRow style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                                                <p
                                                    style={{
                                                        fontFamily : theme.secondaryFont,
                                                        fontSize : 12,
                                                        color : theme.positiveAccent
                                                    }}
                                                >{team.teamMembers[0]}</p>
                                                <p
                                                    style={{
                                                        fontFamily : theme.secondaryFont,
                                                        fontSize : 12,
                                                        color : theme.positiveAccent
                                                    }}
                                                >{team.teamMembers[1]}</p>
                                                <p
                                                    style={{
                                                        fontFamily : theme.secondaryFont,
                                                        fontSize : 12,
                                                        color : theme.positiveAccent
                                                    }}
                                                >{team.teamMembers[2]}</p>
                                                <p
                                                    style={{
                                                        fontFamily : theme.secondaryFont,
                                                        fontSize : 12,
                                                        color : theme.positiveAccent
                                                    }}
                                                >{team.teamMembers[3]}</p>
                                            </StyledFlexBoxRow>
                                        </StyledTeam>
                                        <StyledUpcoming style={{alignSelf: 'center'}}>
                                            <SecondaryButton text="Join" style={{ width: '100%'}}></SecondaryButton>
                                        </StyledUpcoming>
                                    </StyledCardContainer>
                                </StyledItem>
                            )
                        }
                        
                    }) : 
                    searchResult.map((team: ITeam)=>{
                        if(team.teamMembers!==undefined){
                            for(let i = 0; i<team.teamMembers.length; i++){
                                team.teamMembers[i] = team.teamMembers[i].split(" ")[0];
                            }
                            
                            return (
                                <StyledItem>
                                    <StyledCardContainer>
                                        <StyledTeam style={{ width: '70%' }}>
                                            <p style={{fontSize: '1.3rem'}}>{team.teamName}</p>
                                            <StyledFlexBoxRow style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                                                <p
                                                    style={{
                                                        fontFamily : theme.secondaryFont,
                                                        fontSize : 12,
                                                        color : theme.positiveAccent
                                                    }}
                                                >{team.teamMembers[0]}</p>
                                                <p
                                                    style={{
                                                        fontFamily : theme.secondaryFont,
                                                        fontSize : 12,
                                                        color : theme.positiveAccent
                                                    }}
                                                >{team.teamMembers[1]}</p>
                                                <p
                                                    style={{
                                                        fontFamily : theme.secondaryFont,
                                                        fontSize : 12,
                                                        color : theme.positiveAccent
                                                    }}
                                                >{team.teamMembers[2]}</p>
                                                <p
                                                    style={{
                                                        fontFamily : theme.secondaryFont,
                                                        fontSize : 12,
                                                        color : theme.positiveAccent
                                                    }}
                                                >{team.teamMembers[3]}</p>
                                            </StyledFlexBoxRow>
                                        </StyledTeam>
                                        
                                        <StyledUpcoming style={{alignSelf: 'center'}}>
                                            <SecondaryButton text="View" style={{ width: '100%'}}></SecondaryButton>
                                        </StyledUpcoming>
                                    </StyledCardContainer>
                                </StyledItem>
                            )
                        }
                    })
                }
            </StyledRecyclerView>
            <FixedButton text="Create team" onClick = {()=>{history.push('/dashboard')}}/>
            </StyledPageContent>
        </StyledPageContainer>
    );
}

export default JoinTeamPage;