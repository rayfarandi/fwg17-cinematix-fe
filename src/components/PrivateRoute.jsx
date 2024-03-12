import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
  // const [token, setToken] = useState(window.localStorage.getItem('token'))
  const token = useSelector(state => state.auth.token)
  if(token){
    return(
      <>{children}</>
    )
  }else{
    return (
      <Navigate to={'/signin'} />
    )
  }
}
const PrivateRouteOrder = ({children}) => {
  // const [token, setToken] = useState(window.localStorage.getItem('token'))
  const data = useSelector(state => state.order.data)
  if(data.date){
    return(
      <>{children}</>
    )
  }else{
    return (
      <Navigate to={'/'} />
    )
  }
}

export default PrivateRoute
export {PrivateRouteOrder}