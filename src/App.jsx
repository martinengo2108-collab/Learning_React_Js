import { useState ,useEffect } from "react";

import dashBoard from "./component/dashBoard.jsx";

const donations_keys="TiC_donations";
const default_key=100000;
const goal_key="TiC_goal";

function loadDonations() {
    try{
        const stored= localStorage.getItem(donations_keys);

        return stored ? JSON.parse(stored) : [];
    }
}