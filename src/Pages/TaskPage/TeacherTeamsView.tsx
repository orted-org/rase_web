import { useRef, useState } from "react";
import { useTheme } from "styled-components";
import { PlaceFiller } from "../../AuxComponents/Filler";
import { StyledFlexBoxRow, StyledRecyclerView } from "../../AuxComponents/Flex";
import { StyledHeading } from "../../AuxComponents/PageContainer";
import { SVG } from "../../AuxComponents/Svg";
import { ITeam } from "../../Interfaces";
import { SecondaryButton } from "../../MicroComponents/Button";
import { StyledCardContainer, StyledTeam, StyledUpcoming } from "../../MicroComponents/Card";
import { StyledItem } from "../../MicroComponents/Item";
import { StyledSearchBar } from "../../MicroComponents/SearchBar";

interface ITeacherTeamsViewProps{
    teamsData: any;
}

function TeacherTeamsView(props: ITeacherTeamsViewProps){
    const data = props.teamsData;
    const theme = useTheme() as any;
    const searchBarDiv = useRef(null) as any;
    const searchBar = useRef(null) as any;
    const [searchText, setSearchText] = useState('');

    const showSearchBar = ()=>{
        searchBarDiv.current.style.display = 'flex';
        searchBar.current.focus();
    }

    const hideSearchBar = ()=>{
        searchBarDiv.current.style.display = 'none';
        searchBar.current.value = '';
        setSearchText('');
    }

    return (
        <div style={{paddingBottom: 30}}>
            <StyledHeading style={{
                fontSize: '1.2rem',
                color: theme.primaryAccent
            }}>
                <h3
                    style={{
                        width: '100%'
                    }}
                >Teams status</h3>
                <div style={{
                    width: 25,
                    height: 25,
                    margin: 'auto',
                    color: theme.primaryAccent,
                    cursor: 'pointer'
                }}
                onClick = {showSearchBar}
                >
                    {SVG.search}
                </div>
            </StyledHeading>
            <div style={{
                    width: '90%',
                    paddingLeft: 5,
                    margin: '10px auto',
                    display: 'none',
                    flexDirection: 'row',
                }}
                ref={searchBarDiv}   
                >
                <StyledSearchBar
                    type = "text"
                    ref = {searchBar}
                    placeholder = "Search for teams"
                    value = {searchText}
                    onChange = {(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <div style={{
                        width: 25,
                        height: 25,
                        margin: 'auto',
                        cursor: 'pointer',
                        color: theme.secondaryText,
                    }}
                    onClick={hideSearchBar}
                >
                    {SVG.cross}
                </div>
            </div>
            {searchText ==='' ? <>
                <StyledHeading>
                    <h3>Pending</h3>
                    <PlaceFiller/>
                </StyledHeading>
                <StyledRecyclerView>{
                        data.pendingTeams.map((team: ITeam)=>{
                            return <StyledItem>
                                <StyledCardContainer>
                                    <StyledTeam style={{ width: '70%' }}>
                                        <p style={{fontSize: '1.3rem'}}>{team.teamName}</p>
                                        <StyledFlexBoxRow style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                                            <p
                                                style={{
                                                    fontFamily : theme.secondaryFont,
                                                    fontSize : 12,
                                                    color : theme.negativeAccent
                                                }}
                                            >Pending</p>
                                        </StyledFlexBoxRow>
                                    </StyledTeam>
                                    
                                    <StyledUpcoming style={{alignSelf: 'center'}}>
                                        {/* <SecondaryButton text="Add Remark"></SecondaryButton> */}
                                        <SecondaryButton text="View" style={{ width: '100%'}}></SecondaryButton>
                                    </StyledUpcoming>
                                </StyledCardContainer>
                            </StyledItem>
                        })
                    }
                </StyledRecyclerView>
                <StyledHeading>
                    <h3>Submitted</h3>
                    <PlaceFiller/>
                </StyledHeading>
                <StyledRecyclerView>
                    {
                        data.completedTeams.map((team: ITeam)=>{
                            return <StyledItem>
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
                                            >Submitted</p>
                                        </StyledFlexBoxRow>
                                    </StyledTeam>
                                    
                                    <StyledUpcoming style={{alignSelf: 'center'}}>
                                        {/* <SecondaryButton text="Add Remark"></SecondaryButton> */}
                                        <SecondaryButton text="View" style={{ width: '100%', marginTop: 5 }}></SecondaryButton>
                                    </StyledUpcoming>
                                </StyledCardContainer>
                            </StyledItem>
                        })
                    }
                </StyledRecyclerView>
            </> : <></>}
        </div>
    );
}

export { TeacherTeamsView };