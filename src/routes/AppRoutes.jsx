import { Routes, Route} from 'react-router-dom';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={"layout"}>
                <Route path='/' element={"home"}/> 
                <Route path='/products' element={"catalogo"}/>
                <Route path='/product/:id' element={"productoDetallado"}/>  
                <Route path='/checkout' element={"checkout"}/>  
                <Route path='/auth' element={"auth"}/>  
                <Route path='/user/profile' element={"perfil"}/> 
                <Route path='*' element={"Error"}/>    
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes