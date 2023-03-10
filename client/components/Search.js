import SearchButton from "./SearchButton";
import { useState, useEffect } from "react";
import Image from 'next/image';
import SearchApi from "../api/SearchApi";
import toast from "react-hot-toast";
import Loading from "./Loading";

export default function Search(props) {
  const [searchInput, setSearchInput] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchInput.length !== 0) {
      const searchToast = toast.loading(`Querying for images of ${searchInput}`);
      setLoading(true);

      SearchApi.postSearch(searchInput, props.projectId).then((res) => {
        setLoading(false);
        setImages(res.data.map((img) => img.s3_link))
        toast.success("Found images!", { id: searchToast });
      }).catch((err) => {
        setLoading(false);
        setImages([]);
        toast.error("Could not find images, please try again", { id: searchToast });
      });
    }
  }, [searchInput])

  return (
    <>
      <h1>Searching</h1>
      <SearchButton setSearchInput={setSearchInput} />
      {
        loading ? <Loading />
          : images.length > 0 ?
            images.slice(0, 10).map((img, ind) => {
              return <img
                src={img}
                width={200}
                key={ind}
              />
            }) : <></>
      }
    </>
  );
}