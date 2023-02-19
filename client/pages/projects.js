import styles from "../styles/Projects.module.css";
import { useState, useEffect } from "react";
import SearchApi from "../api/SearchApi";
import Button from "../components/Button";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { useRouter } from "next/router";

export default function Projects() {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [isNew, setIsNew] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    SearchApi.getProjects().then((res) => {
      setProjects(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [projects]);

  const submitNewProject = () => {
    if (email.length !== 0 && name.length !== 0 && description.length !== 0) {
      const newPromise = toast.loading("Creating new project");

      SearchApi.postProject(description, name, email).then((res) => {
        setProjects([...projects, res.data]);
        setIsNew(false);
        toast.success(`Added new project ${name}`, { id: newPromise });
      }).catch((err) => {
        toast.error("Error, please try again", { id: newPromise });
      })
    } else {
      toast.error("Please fill out all fields");
    }
  }

  return (
    <div className={styles["projects"]}>
      <h1>Pick your project below:</h1>

      <div className={styles["projects-wrapper"]}>
        {
          projects.length !== 0
            ? projects.map((proj) => {
              return (
                <div 
                  className={styles["project-section"]}
                  onClick={() => { 
                    router.push({ pathname: `/workflow`, query: { projectId: proj.id } }) 
                  }}
                >
                  {proj.name}: {proj.description}
                </div>
              );
            })
            :
            <Loading />
        }
        {isNew ? <></> :
          <div className={styles["project-section"]} onClick={() => { setIsNew(true) }}>
            Create a new project
          </div>
        }
      </div>

      {isNew ?
        <div className={styles["new-form"]}>
          <div>
            Email:
            <input
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              type="text"
              className={styles["projects-input"]}
            />
          </div>

          <div>
            Project name:
            <input
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              type="text"
              className={styles["projects-input"]}
            />
          </div>

          <div>
            Project description:
            <input
              value={description}
              onChange={(e) => {setDescription(e.target.value)}}
              type="text"
              className={styles["projects-input"]}
            />
          </div>

          <Button className="flex-end" text="Create new project" onClick={submitNewProject} />
        </div>
        : <></>}
    </div>
  );
}