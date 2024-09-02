import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import HomePage from "./pages/HomePage"
import AddProduct from "./pages/AddProduct"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<MainLayout/>}>

  < Route  path="/" element={<HomePage/>} />
  < Route  path="/add-product" element={<AddProduct/>} />
  </Route>

)
)

function App() {
  


  return (
<>
< RouterProvider  router={router}/>
  








{/* //     <div>
//       <button onClick={click}>on click</button>
//       < Navbar />
//  < BrowserRouter>
   

//    <Link to='/api/users'>
//     go to php api
//    </Link>
//  <Routes >

//  <Route  path='api/users' element={< Php/>}/>
//  </Routes>

//  </BrowserRouter>
//     </div> */}
  </>
  )
}

export default App