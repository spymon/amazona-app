import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutStep from '../components/CheckoutStep'

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  if (!userInfo) {
    props.history.push('/signin')
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    )
    props.history.push('/payment')
  }

  return (
    <div>
      <CheckoutStep step1 step2 />
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Shipping Adress</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="adress">Address</label>
          <input
            type="text"
            id="adress"
            placeholder="Enter Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter Country"
            value={country}
            onChange={e => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}
