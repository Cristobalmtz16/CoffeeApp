import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'



export default function Coffee({ coffee }) {
    const [quantity, setquantity] = useState(1)
    const [size, setsize] = useState('small')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart()
    {
       dispatch(addToCart(coffee, quantity, size)) 
    }

    return (
        <div className='shadow-lg p-3 mb-5 bg-white rounded'>

            <div onClick={handleShow}>
                <h1><b>{coffee.name}</b></h1>
                <img src={coffee.image} className='img-fluid' style={{ height: '200px', width: '200px' }}></img>
            </div>


            <div className='flex-container'>

                <div className='w-100 m-1'>
                    <p><b>Size</b> </p>
                    <select className='form-control' value={size} onChange={(e) => { setsize(e.target.value) }}>
                        {coffee.size.map(size => {
                            return <option value={size}>{size}</option>
                        })}
            
                    </select>

                </div>

                <div className='w-100 m-1'>
                    <p><b> Quantity</b> </p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {

                            return <option value={(i + 1)}>{i + 1}</option>

                        })}

                    </select>

                </div>

            </div>

            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1 className='mt-1'> <b>Price: $ {coffee.prices[0][size] * quantity} </b></h1>
                </div>


                <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>Add To Cart</button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{coffee.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={coffee.image} className='img-fluid' style={{height:'400px'}} />
                    <p><b>{coffee.description}</b></p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}