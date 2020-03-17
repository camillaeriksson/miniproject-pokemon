import React from "react";
import { RingSpinner } from "react-spinners-kit";

export default function Spinner() {
    return (
        <div className="spinner">
           <RingSpinner size={40} color="rgba(0, 153, 255)" />
        </div>
    );

}