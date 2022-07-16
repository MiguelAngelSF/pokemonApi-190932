import React from "react";
import useUser from "./hooks/useUser";

export default function MoreInfo() {
    const { grupo, matricula, nombre} = useUser(); 
    return (
        <div>
            <h1>Información Del Estuadiante</h1>
            <p>Grupo: {grupo}</p>
            <p>Matricula: {matricula}</p>
            <h3>{nombre}</h3>
        </div>
    );
}