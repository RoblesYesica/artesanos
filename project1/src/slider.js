import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './slider.css';


function Slider() {
return (
  <Carousel data-bs-theme="dark">
    <Carousel.Item>

                    
      <img   src="/img/portada.jpg"
               alt="Sec slide"
               style={{ width: '100%', height: '400px' }}       
                     />
                       
             

      
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    
        
        <img
          className=" d-block w-100 " 
          src="/img/fondo.jpg"
          alt="Second slide"
          style={{ width: '100%', height: '400px' }}
        />

           
      
      <Carousel.Caption>
      <Container>
                 <Row>
                    <Col>
                    <div align="left">
                       <h5>Nombre del nuevo producto</h5>
                        <p>Descripcion del producto
                          es una obra de escultura, especialmente en madera.
                          La madera se talla mediante un proceso de desgaste
                          y pulido, con el propósito de darle una forma
                          determinada,que puede ser un objeto concreto o abstracto </p>
                         
                          <Button variant="link">Mas informacion</Button>
                          <Button variant="dark">Comprar</Button>{' '}
                   </div>
                    </Col>
                    <Col>
                    
                      <div className="imagen-animacion">                     
                         <img  src="/img/img4.jpg"
                         alt="Second slide"
                        
                          />
                       
                      </div>
                    </Col>
                 </Row>
    </Container>
      </Carousel.Caption>
    </Carousel.Item>
   
  </Carousel>
);
}
export default Slider;