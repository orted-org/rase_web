import styled, { useTheme } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { StyledPageContainer, StyledPageContent } from "../AuxComponents/PageContainer";
import { SideBar } from "../AuxComponents/Sidebar";
import { SVG } from "../AuxComponents/Svg";
import { IconContainer } from "../MicroComponents/IconContainer";
import { StyledTopBar } from "../MicroComponents/TopBar";
import { PlaceFiller } from "../AuxComponents/Filler";
import { StyledItem } from "../MicroComponents/Item";
import { StyledCardContainer, StyledTeam, StyledUpcoming } from "../MicroComponents/Card";
import { StyledFlexBoxRow, StyledRecyclerView } from "../AuxComponents/Flex";
import { SecondaryButton } from "../MicroComponents/Button";
import { dummyReq } from "../Http/Http.Requests";
import { SideBarContext } from "../util/Context";

interface IData{
    id: string,
    employee_name: string,
    employee_salary: string,
    employee_age: string,
    profile_image: string,
}

interface IResponse{
    status: string,
    data: IData[]
}

function ExptPage(){
    const [data, setData] =  useState<IResponse>();
    const [isTeacher, setIsTeacher] = useState<boolean>(true);
    const theme = useTheme() as any;
    const sideBarContext = useContext(SideBarContext);

    useEffect(()=>{
        fetch(dummyReq)
        .then(res=>res.json())
        .then(res=>{
            console.log(res.status);
            if(res.status==="success")
                setData(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={sideBarContext.isSidebarOpen} toggleSideBar={sideBarContext.toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={sideBarContext.toggleSideBar}>
                    {SVG.menubar}
                </IconContainer>
                <h2>Experiment</h2>
                <PlaceFiller></PlaceFiller>
            </StyledTopBar>
            <StyledPageContainer>
            <StyledRecyclerView>
                {
                    data?.data.map((item: IData)=>{
                        return <StyledItem>
                            <StyledCardContainer>
                                <StyledTeam style={{ width: '70%' }}>
                                    <p style={{fontSize: '1.3rem'}}>{item.employee_name}</p>
                                    <StyledFlexBoxRow style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                                        <p
                                            style={{
                                                fontFamily : theme.secondaryFont,
                                                fontSize : 12,
                                                color : theme.secondaryText
                                            }}
                                        >Salary: {item.employee_salary}</p>
                                    </StyledFlexBoxRow>
                                </StyledTeam>
                                
                                <StyledUpcoming style={{alignSelf: 'center'}}>
                                    <SecondaryButton text="More"></SecondaryButton>
                                </StyledUpcoming>
                            </StyledCardContainer>
                        </StyledItem>
                    })
                }
            </StyledRecyclerView>
            </StyledPageContainer>
        </StyledPageContainer>
    );
}

export default ExptPage;
