import { Link } from "react-router-dom";
import stock from "../Data";
import "./Producto.css";

function Productos() {
  const render = stock.map((prod) => {
    return (
      <div key={prod.id} className="card carta__producto">
        <div>
          <img src={prod.img} className="card-img-top" alt={prod.nombre} />
          <div className="card-body">
            <h5 className="card-title">{prod.nombre}</h5>
            <p className="card-text">${prod.precio}</p>
            <Link to={`${prod.id}`} className="btn btn-primary">
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return <div className="productos__container">{render}</div>;
}

export default Productos;
