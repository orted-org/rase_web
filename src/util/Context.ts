import { createContext } from "react";

// ----------------- Auth context -------------------
interface UserAuthType {
    isUserLoggedIn: boolean;
    setUserLoggedIn: (b: boolean) => void;
}

const UserAuthContext = createContext<UserAuthType>({
    isUserLoggedIn: false,
    setUserLoggedIn: () => { },
});

// ----------------- Sidebar context --------------------
interface SideBarType {
    isSidebarOpen: boolean;
    toggleSideBar: () => void;
}

const SideBarContext = createContext<SideBarType>({
    isSidebarOpen: false,
    toggleSideBar: () => { },
}) 

export { UserAuthContext, SideBarContext };