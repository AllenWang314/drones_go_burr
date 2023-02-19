import SearchButton from "./SearchButton";
import { useState, useEffect } from "react";
import SearchApi from "../api/SearchApi";
import toast from "react-hot-toast";
import Loading from "./Loading";
import styles from '@/styles/Workflow.module.css'

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

  const displayImages = () => {
    let ondisplay = images.slice(0, 9)
    console.log(ondisplay)

    return (
      <div className={styles.gallery}>
        {ondisplay.map((image, index) => {
          return <img
            src={image}
            width={200}
            key={index}
          />
        })}
      </div>
    )
  }

  

  return (
    <>
      <h1>Searching</h1>
      <SearchButton setSearchInput={setSearchInput} />
      {
        loading ? <Loading />
          : images.length > 0 ?
            displayImages() : <></>
      }
    </>
  );
}