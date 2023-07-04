import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>ESTA PAGINA NO SE HA ENCONTRADO</h2>
      <Link to={"/"}>Volver al Home</Link>
    </div>
  );
}

export default Error;