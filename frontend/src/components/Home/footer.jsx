import React from "react";
import Logo from "../../assets/CraftCol_fwhite.png";
import "../../styles/Footer.css";
function Footer() {
  return (
    <div>
      <div class="container my-5 w-100">
        <footer class=" text-center text-xl-start text-white ">
          <div class="container p-4" style={{ backgroundColor: "#c99a75" }}>
            <div class="row my-4" style={{ fontFamily: "cursive" }}>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div
                  class="rounded-circle shadow-1-strong d-flex align-items-center justify-content-center mb-4 me-auto"
                  style={{
                    backgroundColor: "#f6d0b2",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <img src={Logo} height="250" alt="" className="p-3" />
                </div>

                <p class="text-center"></p>

                <ul class="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a class="text-white px-2" href="#!">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a class="text-white px-2" href="#!">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a class="text-white ps-2" href="#!">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-5">Conocenos</h5>
                <ul class="list-unstyled">
                  <li class="mb-3">
                    <a href="#!" class="text-white">
                      <i class="-0"></i>Quienes Somos
                    </a>
                  </li>
                  <li class="mb-3">
                    <a href="#!" class="text-white">
                      <i class=""></i>Objetivo
                    </a>
                  </li>
                  <li class="mb-3">
                    <a href="#!" class="text-white">
                      <i class=""></i>Impacto
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-5">Servicio al Cliente</h5>

                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="#!" class="text-white">
                      <i class=""></i>Información General
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#!" class="text-white">
                      <i class=""></i>Envios y Tiempo de Entrega
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#!" class="text-white">
                      <i class=""></i>Terminos y Condiciones
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#!" class="text-white">
                      <i class=""></i>Aviso de Privacidad
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#!" class="text-white">
                      <i class=""></i>Politica de Garantias
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#!" class="text-white">
                      <i class=""></i>Preguntas Frecuentes
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-5">Contacto</h5>

                <ul class="list-unstyled">
                  <li>
                    <p>
                      <i class="fas fa-map-marker-alt pe-2"></i>Bogotá Cra 57
                      #10 45
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="fas fa-phone pe-2"></i>+ 57 316 413 6026
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="fas fa-envelope pe-2 mb-0"></i>
                      craftcol@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="text-center p-3">
            <a class="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
