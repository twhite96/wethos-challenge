import React from 'react';
import { Footer, Container, Content, Navbar } from 'react-bulma-components';
import './react-bulma-components.min.css';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import './App.css';


/* Instructions

   1. Setup Auth
   2. Fetch user/me from dev API
   3. When logged in need to show my profile
   4. Create link to project, anywhere in app
   5. When clicked, project link should show summary of project */


/*  */

const App = () => {
  return (
     <Container fluid>
       <Content>
         <Navbar>
           <Navbar.Container>
             <BrowserRouter>
               <Switch>
                 <Route path='/' exact component={Home} />
                  <Navbar.Item renderAs="a" href={Link}>
                    Home
                  </Navbar.Item>
                 <Route path='/login' component={Login} />
                   <Navbar.Center>
                     <Navbar.Item renderAs="a" href={Link}>
                       Sign In
                     </Navbar.Item>
                   </Navbar.Center>
               </Switch>
             </BrowserRouter>
           </Navbar.Container>
         </Navbar>
       </Content>
       <Footer>
         <p>Some social stuff</p>
         <p>Our Blog</p>
       </Footer>
     </Container>
  );
}

export default App;
