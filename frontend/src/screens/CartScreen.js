import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MessageBox from '../components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'

export default function CartScreen(props) {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const productId = props.match.params.id
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1

  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = id => {
    //delete action
  }

  const chackoutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is Empty. <Link to="/">Go shoping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img src={item.image} alt={item.name} className="small" />
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={e =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      className="button"
                      onClick={removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)}
                items) : $
                {cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0)}
              </h2>
            </li>
            <button
              className="primary block"
              type="button"
              onClick={chackoutHandler}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}
