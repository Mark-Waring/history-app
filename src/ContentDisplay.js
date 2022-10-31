import { Outlet } from "react-router-dom";
import CategoryDisplay from "./CategoryDisplay";


export default function ContentDisplay () {
    return (
        <>
        <CategoryDisplay />
        <Outlet />
        </>
    )
}