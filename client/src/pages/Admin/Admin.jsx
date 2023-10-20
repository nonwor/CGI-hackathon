import { useContext, useEffect, useState } from 'react'
import { PrimaryContext } from "../../components/context/PrimaryContext";
import "./Admin.css"
import UserCard from '../../components/UserCard/UserCard'
import axios from 'axios';

function Admin() {
    const { adminCredentials } = useContext(PrimaryContext);
    const [selectedOption, setSelectedOption] = useState("newset");
    const [searchInput, setSearchInput] = useState("");
    const [userResponses, setUserResponses] = useState([]);

    const handleSelectedOptionValue = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const getUserResponses = async (limit=10) => {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:3000/userResponses/?limit=${limit}`,
            headers: {
                'Authorization': `Bearer ${adminCredentials._id}`
            }
        })
        setUserResponses(response.data);
    }

    useEffect(() => {
        getUserResponses();
    }, [])

  return (
    <section>
        <div className='admin-tools'>
                <section>
                    <label htmlFor="">Filter by:</label>
                    <select value={selectedOption} onChange={handleSelectedOptionValue}>
                        <option value="newest">newest</option>
                        <option value="oldest">oldest</option>
                        <option value="complited">complited</option>
                    </select>
                </section>
            <form action="submit">
                search:
                <input 
                type="text" 
                placeholder='name or email'
                value={searchInput}
                onChange={handleSearchInput}
                />
            </form>
        </div>
        <div className='user-cards'>
            <UserCard />
            <UserCard />
        </div>
    </section>
  )
}

export default Admin