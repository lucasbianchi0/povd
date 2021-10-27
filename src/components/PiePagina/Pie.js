import React from 'react'
import "./Pie.css"

const Pie = () => {
    return (  
        <footer >

    <div class="ancho">
    <div class="estructura-footer">
        <div >
          <h4 class="nombre-empresa-footer">TuProveedorDigital</h4>
          <p class="intro-empresa-footer">TuProveedorDigital es una plataforma de ecommerce b2b que ofrece una nueva experiencia al momento de obtener stock de productos para vender: una transacción más simple, confiable y transparente gracias a la innovación tecnológica en cada uno de sus pasos.</p>
        </div>

        <div class=" caja-2-footer">
            <div class="caja-2medio-footer">
                <h5>Empresa</h5>
                <p>Comprar</p>
                <p>Vender mayorista</p>
                <p>Soporte</p>
            </div>
            <div class="caja-2medio-footer">
              <h5>Recursos</h5>
              <p>Faqs</p>
              <p>Blog</p>
             
            </div>

        </div>
        
    </div>



    <div class="pie-hoja">
        <p>© 2021 TuProveedorDigital, Todos los derechos reservados</p>
        <div class="redes">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
</footer>


            

    )
}

export default Pie

