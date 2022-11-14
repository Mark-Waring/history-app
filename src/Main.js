import { AppContext } from "./AppContext";
import { useContext } from "react";
import LoginForm from "./LoginForm";
import DateSelector from "./DateSelector";
import CategoryDisplay from "./CategoryDisplay";
import { Outlet, useParams } from "react-router-dom";

export default function Main() {
  const { isLoggedIn } = useContext(AppContext);
  const { category } = useParams();

  if (!isLoggedIn) {
    return <LoginForm />;
  }
  return (
    <>
      <DateSelector />
      {category && <CategoryDisplay />}
      <Outlet />
    </>
  );
}
