import {useState, createContext} from "react";


export const PrimaryContext = createContext()


const PrimaryContextProvider = (props) => {

    const [adminCredentials, setAdminCredentials] = useState({});

    const [isAdmin, setIsAdmin]= useState(false);

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