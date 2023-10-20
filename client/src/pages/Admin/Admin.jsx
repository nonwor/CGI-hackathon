import { useState } from 'react'
import "./Admin.css"
import UserCard from '../../components/UserCard/UserCard'

function Admin() {

    const [selectedOption, setSelectedOption] = useState("newset");
    const [searchInput, setSearchInput] = useState("");

    const handleSelectedOptionValue = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

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