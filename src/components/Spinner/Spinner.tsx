import React from "react";
import { RainbowSpinner } from "react-spinners-kit";

export default function Spinner() {
    return (
        <div className="spinner">
           <RainbowSpinner size={30} color="red"/>
        </div>
    );

}