import { createContext } from "react";

interface UserAuthType {
    isUserLoggedIn: boolean;
    setUserLoggedIn: (b: boolean) => void;
}
const UserAuthContext = createContext<UserAuthType>({
    isUserLoggedIn: false,
    setUserLoggedIn: () => { }
});

export { UserAuthContext };