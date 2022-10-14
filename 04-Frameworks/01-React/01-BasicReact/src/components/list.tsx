import React from "react";
import { MembersTable } from "./members-table";

export const ListPage: React.FC = () => {
    return (
        <>
            <h2>Hello from List of the Searched Organization</h2>
            <MembersTable />
        </>
    );
};