import styles from './Button.module.css'
import classNames from 'classnames'

export default function Button(props) {

    return (
      <button
        {...props}
        className={classNames(styles["button"], props.className ?? null)}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    );
  }