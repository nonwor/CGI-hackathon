import {useState, createContext} from "react";


export const PrimaryContext = createContext()


const PrimaryContextProvider = (props) => {

    const [adminCredentials, setAdminCredentials] = useState({
        email: "",
        password: ""
    });


    const [isAdmin, setIsAdmin]= useState(true);

    return (
        <PrimaryContext.Provider
            value={{
                setIsAdmin, 
                isAdmin,
                setAdminCredentials, 
                adminCredentials
            }}>
            {props.children}
        </PrimaryContext.Provider>
    );
}

export default PrimaryContextProvider;