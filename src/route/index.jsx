import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

export const Rotas = () => {
    return (
        <Routes>
            <Route index element={<Home />}/>
        </Routes>
    )
}