import {useState} from 'react'
import Button from 'components/Button'

const searchInputs = [
    "person",
    "collapsed building",
    "electrical lines",
    "trees"
]

export default function SearchButton() {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
      
    if (searchInput.length > 0) {
        searchInputs.filter((input) => {
            return input.includes(searchInput);
        });
    }

    return (
        <div>
            <Search
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <ul>
                {searchInputs.map(query => (
                    <li>{query}</li>
                ))}
            </ul>
        </div>
    );
}