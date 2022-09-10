import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import BasicTable from "./table";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="/list" element={<ListPage />} />
                <Route path="/detail/:id" element={<DetailPage />} /> */}
                <Route path="/table" element={<BasicTable />} />
            </Routes>
        </Router>
    );
};