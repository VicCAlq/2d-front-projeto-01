function Card({ nome, codigo }) {
  return (
    <div style={styles.card}>
      <h3>{nome}</h3>
      <pre>
        <code>{codigo}</code>
      </pre>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    padding: "16px",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  }
};

export default Card;