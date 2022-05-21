import './App.css';
import {Box} from "@material-ui/core"
import Header from "./componets/Header"
import Footer from "./componets/Footer"
import Home from "./componets/Home/Home"
import PostDetails from "./componets/Home/post/PostDetails"
import Createpost from "./componets/Home/post/create/Createviews"
import Updatepost from "./componets/Home/post/update/Updatepost"
import {BrowserRouter , Switch , Route } from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
  <Header/> 
   <Box style={{marginTop:64}}>
     <Switch>  
     <Route exact path="/" component={Home}/>
     <Route exact path="/postdetails/:id" component={PostDetails}/>
     <Route exact path="/createpost" component={Createpost}/>
     <Route exact path="/updatepost/:id" component={Updatepost}/>
     </Switch>
  </Box>
  <Box style={{marginTop:65}}>
  <Footer/>
  </Box>

 
  </BrowserRouter>
  );
}

export default App;
