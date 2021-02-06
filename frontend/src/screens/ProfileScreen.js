import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function ProfileScreen() {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(detailsUser(userInfo._id))
  }, [dispatch, userInfo._id])

  const sumbmitHandler = e => {
    e.preventDefault()
    /* dispatch(userUpdate()) */
  }
  return (
    <div>
      <form className="form" onSubmit={sumbmitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={user.name}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Enter email"
                value={user.email}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input id="password" type="text" placeholder="Enter password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="text"
                placeholder="Enter confirm password"
              />
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}
