import { AppContext } from "./AppContext";
import { useContext } from "react";
import LoginForm from "./LoginForm";
import DateSelector from "./DateSelector";
import CategoryDisplay from "./CategoryDisplay";
import { Outlet } from "react-router-dom";

export default function Main() {
  const { isLoggedIn, selectedDate } = useContext(AppContext);

  if (!isLoggedIn) {
    return <LoginForm />;
  }
  return (
    <>
      <DateSelector />
      {selectedDate && <CategoryDisplay />}
      <Outlet />
    </>
  );
}
