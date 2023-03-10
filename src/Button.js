import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text}){
    return <butto className={styles.btn}>{text}</butto>;

}

Button.propTypes = {
    text : PropTypes.string.isRequired
}

export default Button;