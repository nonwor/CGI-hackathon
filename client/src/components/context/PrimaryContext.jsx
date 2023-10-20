import {useState, createContext} from "react";


export const PrimaryContext = createContext()


const PrimaryContextProvider = (props) => {

    const [adminCredentials, setAdminCredentials] = useState({});

    const [isAdmin, setIsAdmin]= useState(false);

    const [userResponsesForm, setUserResponsesForm] = useState({
        name: '',
        email: '',
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        recommendedCourse: ''
    })

    return (
        <PrimaryContext.Provider
            value={{
                setIsAdmin, 
                isAdmin,
                setAdminCredentials, 
                adminCredentials,
                userResponsesForm,
                setUserResponsesForm
            }}>
            {props.children}
        </PrimaryContext.Provider>
    );
}

export default PrimaryContextProvider;