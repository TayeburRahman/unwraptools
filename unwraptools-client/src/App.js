import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/authentication/SingIn';
import AdminProfile from './components/dashboard/AdminProfile';
import ApproveNews from './components/dashboard/ApproveNews';
import ApproveTools from './components/dashboard/ApproveTools';
import Content from './components/dashboard/Content';
import DashboardMain from './components/dashboard/Dashboard.main';
import Database from './components/dashboard/Database';
import ManageNews from './components/dashboard/ManageNews';
import ManageResult from './components/dashboard/ManageResult';
import ManageTools from './components/dashboard/ManageTools';
import ManageUsers from './components/dashboard/ManageUsers';
import Paperbase from './components/dashboard/Paperbase';
import ToolInformation from './components/dashboard/ToolInformation';
import Categories from './components/Pages/Categories';
import Discover from './components/Pages/Discover';
import Favorites from './components/Pages/Favourites';
import Homes from './components/Pages/Home';
import ProductInformation from './components/Pages/ProductInformation';
import SubmitNews from './components/Pages/SubmitNews/SubmitNews';
import SubmitTool from './components/Pages/SubmitTool';
import useAuthCheck from './hooks/useAuthCheck';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {

  const authChecked = useAuthCheck();

  return ! authChecked ?(
    <div> Checking Authentication </div>
  ):(
    <div className="App">
       <Routes> 
            <Route path="/login" element={<SignIn/>}/>  
             <Route path="/" element={<Homes/>}/>  
             <Route path="/tool/:Id" element={<PrivateRoute> <ProductInformation/> </PrivateRoute>}/>  
             <Route path="/categories" element={<PrivateRoute> <Categories/></PrivateRoute>}/>  
             <Route path="/tool/explore" element={<PrivateRoute> <Discover/> </PrivateRoute>}/>  
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
               <Route path='authentication' element={<Content/>} />   
               <Route path='manage_tools' element={<ManageTools/>} /> 
               <Route path='manage_news' element={<ManageNews/>} /> 
               <Route path='approve_news' element={<ApproveNews/>} /> 
               <Route path='approve_tools' element={<ApproveTools/>} /> 
               <Route path='manage_users' element={<ManageUsers/>} /> 
               <Route path='tool/:toolId' element={<ToolInformation/>} /> 
               <Route path='admin_profile' element={<AdminProfile/>} /> 
               <Route path='manage_result' element={<ManageResult/>} /> 
               <Route path='database' element={<Database />} />  
             </Route> 
        </Routes>
    </div>
  );
}

export default App;
