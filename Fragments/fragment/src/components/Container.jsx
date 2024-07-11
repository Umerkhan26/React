import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
