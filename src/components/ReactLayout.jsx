import { FaReact } from "react-icons/fa";

function ReactLayout() {
  return (
    <div style={styles.container}>
      <FaReact style={styles.icon} />
      <span style={styles.text}>Scandiweb Test using React</span>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(82 164 231 / 72%)",
    padding: "10px",

    color: "#fff",
  },
  icon: {
    fontSize: "24px",
    marginRight: "10px",
  },
  text: {
    fontSize: "18px",
  },
};

export default ReactLayout;
