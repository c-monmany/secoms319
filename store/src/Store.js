import { createContext, useContext, useState } from 'react';
import { products } from './products';
import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ProductCard from './ProductCard';


function Store() {
    const [Products, setProducts] = useState(products);
    const [search, setSearch] = useState("");




      return (
        <div>

          <Row className='px-4 my-5'>
            <Col sm={12} className='my-5'>
              <h1 className='font-weight-light text-center my-5'>Keycap Store</h1>
              
            </Col>
            
            <Form>
              <InputGroup className='my-3'>
                <Form.Control placeholder='Search Products'
                onChange={(e) => setSearch(e.target.value)}
                >

                </Form.Control>
              </InputGroup>
            </Form>
          </Row>
            <Row xs={1} md={2} lg={3} className='g-4'>
            {Products.filter((item) => {
              return search.toLowerCase() === '' ? item : item.title.toLowerCase()
              .includes(search)
            })
            .map((product) => (
              <ProductCard product={product} />
            ))}
          </Row>
         </div>
      )
}

export default Store;