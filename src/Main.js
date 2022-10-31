import { AppContext } from "./AppContext";
import { useContext } from "react";
import LoginForm from "./LoginForm";
import DateSelector from "./DateSelector";
import { Outlet } from "react-router-dom";

export default function Main() {
    const app = useContext(AppContext)
    
    if (!app.isLoggedIn) {
        return (
            <LoginForm />
        )
    }
    return (
        <>
            <DateSelector />
            <Outlet />
        </>
    )

}