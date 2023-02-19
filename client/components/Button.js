import styles from './Button.module.css'
import classNames from 'classnames'

export default function Button(props) {

    return (
      <div
        {...props}
        className={classNames(styles["button"], styles[props.className] ?? null)}
        onClick={props.onClick}
      >
        {props.text}
      </div>
    );
  }