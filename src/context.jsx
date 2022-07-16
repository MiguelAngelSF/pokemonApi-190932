import UserContext from "./context/userContext";
import MoreInfo from "./MoreInfo";

function context() {
    const userData = {
        grupo: "IDGS9A",
        matricula: 190932
    };

    return (
        <UserContext.Provider value={userData}>
        <div className="context">
        <h1>useContext</h1>
        <MoreInfo/>
        </div>
        </UserContext.Provider>
    );
}

export default context;