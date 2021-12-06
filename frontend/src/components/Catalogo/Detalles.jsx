import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";

function Detalles() {
  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();

  const obtenerUsuario = async () => {
    //dentro de la constante res tengo la respuesta a esta peticion
    const res = await axios.get(`producto/listar/${id}`);
    const users = await res.data;
    setUsuario(users);
  };

  useEffect(() => {
    obtenerUsuario();
  }, []);
  return (
    <div>
      {/* <h4>{usuario.nombre}</h4>
            <p>Descripcion:{usuario.descripcion}</p>
            <p>Material:{usuario.material}</p>
            <p>Material:{usuario.precio}</p>
            <img src={usuario.imagen}></img>
             */}
      <div className="d-flex mt-5">
        <div className="container p-5">
          <Card className="row">
            <div className="col-md-6">
              <Card className="p-1 m-4">
                <div className="d-flex justify-content-center">
                  <img
                    style={{borderRadius:"9px"}}
                    className="d-flex m-3"
                    src={usuario.imagen}
                    alt={usuario.descripcion}
                    width="400px"
                  />
                </div>
              </Card>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <Card className="m-5">
                <h3 className="mt-3">{usuario.nombre}</h3>
                <div className="h1 mt-3">${usuario.precio}</div>
                <Card className="product__details__quantity"></Card>
                <h4 className="m-4">{usuario.descripcion}</h4>
                <b>Estado</b> <span>{usuario.estado}</span>
                <br />
                <b>Material</b> <span>{usuario.material}</span>
                <br />
                <b>Compartir en</b>
                <br />
                <br />
                <div className="Compartir">
                  <a href="#">
                    <i
                      className="fab fa-facebook-square me-1"
                      style={{ color: "rgb(0,0,0,0.4)" }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      className="fab fa-twitter me-1"
                      style={{ color: "rgb(0,0,0,0.4)" }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      className="fab fa-instagram me-1"
                      style={{ color: "rgb(0,0,0,0.4)" }}
                    ></i>
                  </a>
                </div>
                <CardActions className="d-flex justify-content-center">
                  <Button
                    size="large"
                    href="/#!"
                    style={{ color: "rgb(0,0,0,0.4)" }}
                  >
                    Añadir al carrito
                    <ShoppingCartOutlinedIcon />
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
