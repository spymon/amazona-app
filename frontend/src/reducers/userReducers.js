import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_RESET,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from '../constants/userConstant'

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      }

    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }

    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        loading: true,
      }

    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }

    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    case USER_SIGNOUT:
      return {}

    default:
      return state
  }
}

export const userDetailsRreducers = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        loading: true,
      }

    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      }

    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_REQUEST:
      return {
        loading: true,
      }

    case USER_PROFILE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      }

    case USER_PROFILE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_PROFILE_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
