import styles from './Button.module.css'

const Button = ({children, handleClick}) => <button className={`${styles.button} btn_toast`} onClick={handleClick}>{children}</button>

export default Button
















