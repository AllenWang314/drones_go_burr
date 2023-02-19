import SearchButton from "./SearchButton";
import { useState, useEffect } from "react";
import Image from 'next/image';
import SearchApi from "../api/SearchApi";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const imgs = [
    "https://treehacksdrip.s3.amazonaws.com/cat.png", 
    "https://treehacksdrip.s3.amazonaws.com/cat.png"
  ]

  useEffect(() => {
    if (searchInput.length !== 0) {
      SearchApi.postSearch(searchInput).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [searchInput])

  return (
    <>
      <h1>Searching</h1>
      <SearchButton setSearchInput={setSearchInput} />
      {searchInput}

      {imgs.map((img, ind) => {
        return <img 
          src={img} 
          width={200}
          key={ind}
        />
      })}

      {/* <img src="https://treehacksdrip.s3.amazonaws.com/cat.png" */}
      {/* /> */}
    </>
  );
}