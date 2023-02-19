import { useState } from 'react';
import styles from "./SearchButton.module.css";

export default function SearchButton(props) {
    const [input, setInput] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.setSearchInput(input);
        }
    }

    return (
        <div>
            <input
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                onKeyDown={handleKeyDown}
                className={styles["search-input"]}
                type="text"
            />
        </div>
    );
}