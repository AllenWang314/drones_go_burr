import {useState} from 'react'
import Button from 'components/Button'

export default function UploadButton() {
    const [invalid, setInvalid] = useState(false);
    // const handlePress = (e) => {
    //     e.preventDefault();
    //     setInvalid(!invalid);
    // };
    console.log(`invalid: ${invalid}`)

    if (invalid) return null;
    else return (
        <Button text="Upload" onClick={setInvalid(!invalid)}/>
    )
}