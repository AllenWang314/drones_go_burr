import Draggable from "react-draggable";
import styles from '@/styles/Home.module.css'


export default function WorkflowItem({ name }) {
    return (
      <Draggable >
        <div className={styles.workflowItem}>
          <div className='heading'>
            <h3>{name}</h3>
          </div>
        </div>
      </Draggable>
    );
  }