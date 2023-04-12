import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AdminRoute from './PrivateRoute/AdminRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NavBar from './components/AppBar/NavBar';
import UserDetails from './components/ManageUsers/UserDetails';
import NotFound from './components/NotFound/NotFound';
import Categories from './components/Pages/Categories';
import Discover from './components/Pages/Discover';
import Favorites from './components/Pages/Favourites';
import Homes from './components/Pages/Home';
import LatestNews from './components/Pages/LatestNews';
import LatestNewsToday from './components/Pages/LatestNewsToday';
import ProductInformation from './components/Pages/ProductInformation';
import SearchCategory from './components/Pages/SearchCetagory';
import SubmitNews from './components/Pages/SubmitNews/SubmitNews';
import SubmitTool from './components/Pages/SubmitTool';
import Tools from './components/Pages/Tools';
import UpdateNews from './components/Pages/UserNews/UpdateNews';
import UpdateTools from './components/UserTools/UpdateTools';
import SignIn from './components/authentication/SingIn';
import AdminProfile from './components/dashboard/AdminProfile';
import ApproveNews from './components/dashboard/ApproveNews';
import ApproveTools from './components/dashboard/ApproveTools';
import DashboardMain from './components/dashboard/Dashboard.main';
import Database from './components/dashboard/Database';
import ManageEmail from './components/dashboard/ManageEmail';
import ManageNews from './components/dashboard/ManageNews';
import ManageTools from './components/dashboard/ManageTools';
import ManageUsers from './components/dashboard/ManageUsers';
import Paperbase from './components/dashboard/Paperbase';
import SuggestEdit from './components/dashboard/SuggestEdit';
import ToolInformation from './components/dashboard/ToolInformation';
import UserManageNews from './components/dashboard/UserManageNews';
import UserManageTools from './components/dashboard/UserManageTools';


function App() {

  
  const { pathname } = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);


 


 

  const dashboard = !useLocation().pathname.includes('/dashboard');
    const login = !useLocation().pathname.includes('/login');
  const cobainDashboard = dashboard && login;

 

  return (
    <div className="App">
      {cobainDashboard && <NavBar/> }
       
       <Routes> 
            <Route path="/login" element={<SignIn/>}/>  
             <Route path="/" element={<Homes/>}/>  
             <Route path="/tool/:Id" element={  <ProductInformation/> }/>  
             <Route path="/categories" element={ <Categories/>}/>  
             <Route path="/categories/:Id" element={<SearchCategory/>}/>  
             <Route path="/tool-today" element={<Tools/>}/>  
             <Route path="/news" element={ <LatestNews/>}/>  
             <Route path="/news-today" element={ <LatestNewsToday/>}/>  
             <Route path="/tool/explore" element={<Discover/>}/>  
             <Route path="/submit-tool" element={<PrivateRoute> <SubmitTool/> </PrivateRoute>}/>  
             <Route path="/submit-news" element={<PrivateRoute> <SubmitNews/> </PrivateRoute>}/>  
             <Route path="/user/favourites" element={<PrivateRoute> <Favorites/> </PrivateRoute>}/> 
             <Route path="dashboard" element={  
                <PrivateRoute>
                   <Paperbase/>  
                </PrivateRoute>}> 
               <Route path='' element={ 
                <PrivateRoute> 
                   <DashboardMain/> 
                </PrivateRoute> } />   
               <Route path='user/manage_tools' element={<PrivateRoute> <UserManageTools/></PrivateRoute>} />   
               <Route path='user/manage_news' element={<PrivateRoute><UserManageNews/></PrivateRoute>} />  
               <Route path='user/update_news/:newsId' element={<PrivateRoute><UpdateNews/></PrivateRoute>} />   
               <Route path='user/update_tools/:toolsId' element={<PrivateRoute><UpdateTools/></PrivateRoute>} /> 
               <Route path='user/:email' element={<AdminRoute> <UserDetails/> </AdminRoute>} />   
               <Route path='user/suggest_edit' element={<SuggestEdit/>} />  
               <Route path='manage_tools' element={<AdminRoute><ManageTools/></AdminRoute>} /> 
               <Route path='manage_tools' element={<AdminRoute><ManageTools/></AdminRoute>} /> 
               <Route path='manage_news' element={<AdminRoute><ManageNews/></AdminRoute>} /> 
               <Route path='approve_news' element={<AdminRoute><ApproveNews/></AdminRoute>} /> 
               <Route path='approve_tools' element={<AdminRoute><ApproveTools/></AdminRoute>} /> 
               <Route path='manage_users' element={<AdminRoute><ManageUsers/></AdminRoute>} /> 
               <Route path='manage_email' element={<AdminRoute><ManageEmail/></AdminRoute>} /> 
               <Route path='tool/:toolId' element={<PrivateRoute><ToolInformation/> </PrivateRoute>} /> 
               <Route path='profile' element={<PrivateRoute><AdminProfile/></PrivateRoute>} /> 
               {/* <Route path='manage_result' element={<ManageResult/>} />  */}
               <Route path='database' element={<Database />} />   
             </Route> 
             <Route path='*' element={<NotFound />} />  
        </Routes>
    </div>
  ); 
}

export default App;
