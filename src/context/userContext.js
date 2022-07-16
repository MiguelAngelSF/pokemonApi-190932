import { createContext } from "react";

const UserContext = createContext({
    grupo: null,
    matricula: null,
    nombre: null
});

export default UserContext;
