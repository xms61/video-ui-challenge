import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

function ProtectedRoute(props) {
    return props.isAuth? <Outlet /> : <Navigate to='/' />
}


const mapStateToProps = (state) => { 
    return {
      isAuth: state.auth.isAuthenticated
    } 
  }
  
  export default connect(mapStateToProps)(ProtectedRoute)