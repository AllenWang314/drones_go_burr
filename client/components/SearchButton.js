import {useState} from 'react'
import Button from 'components/Button'

const searchInputs = [
    "person",
    "collapsed building",
    "electrical lines",
    "trees"
]

export default function SearchButton(props) {
    const [invalid, setInvalid] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const filterTarget = () => {
        return searchInputs.filter(userInput => {
            return userInput.includes(searchInput)
        })
    }

    const filteredQueries = filterTarget().map(query => (
        <li>{query}</li>
    ))

    return (
        <div>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <ul>
                {invalid ? filteredQueries : null}
            </ul>
        </div>
    );
}