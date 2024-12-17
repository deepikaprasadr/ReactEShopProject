//we want the functional component everywhere 

import CategoryList from "../../components/CategoryList"
import Navbar from "../../components/NavBar"
import Header from "../../components/Header"
//HomePage/index.jsx
const HomePage=()=>{
    return(
        <>
       
        <Navbar/>
        <Header/>
        <CategoryList/>

        </>
    )
}
export default HomePage;
 {/* using a fragment here; we cannot have multiple elements, but we can have 
        one root element with an invisible root or container; 
        we can call the visual component*/}