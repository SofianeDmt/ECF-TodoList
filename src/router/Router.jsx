import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../containers/Login'
import Tab from "../containers/TabListe";
import PrivateRoute from "./PrivateRoute";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/trello' element={<PrivateRoute />}>
                    <Route path='' element={<Tab/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;