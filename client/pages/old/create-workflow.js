import { useState } from "react";
import WorkflowItem from "@/components/workflow-item"
import styles from '@/styles/Home.module.css'

const recommendedWorkflow = [
    "Search",
    "Sort",
    "Map"
]

const workflowOptions = [
    "Search",
    "Sort",
    "Map",
    "Analyze",
    "Time-series analysis",
    "Recommendations"
]

export default function WorkflowCreation() {
    const [state, setState] = useState({
        currentWorkflow: workflowOptions
    });
    const [addItem, setAddItem] = useState(false);
    const handleSave = () => {
        setAddItem(!addItem);
    };

    // handleDragStart = (e) => {
    //     const id = e.target.name();
    //     const curr_workflow_items = this.state.currentWorkflow.slice();
    //     const item = curr_workflow_items.find((i) => i.id === id);
    //     const index = curr_workflow_items.indexOf(item);
    //     // remove from the list:
    //     curr_workflow_items.splice(index, 1);
    //     // add to the top
    //     curr_workflow_items.push(item);
    //     this.setState({
    //       currentWorkflow: curr_workflow_items,
    //     });
    // };

    // onDragEnd = (e) => {
    //     const id = e.target.name();
    //     const items = this.state.currentWorkflow.slice();
    //     const item = this.state.items.find((i) => i.id === id);
    //     const index = this.state.items.indexOf(item);
    //     // update item position
    //     items[index] = {
    //         ...item,
    //         x: e.target.x(),
    //         y: e.target.y(),
    //     };
    //     this.setState({
    //         currentWorkflow: curr_workflow_items,
    //     });
    // };

    return (
        <>
            <div className="workflow">
                <div className={styles.column}>
                    <div className="column-head">
                        <h2>Recommended Workflow</h2>
                    </div>
                    {recommendedWorkflow.map(recommendation => (
                        <WorkflowItem name={recommendation} />
                    ))}
                </div>
                <div>
                    <button type="button" onClick={handleSave}>Save workflow</button>
                </div>
            </div>
        </>
    )
}