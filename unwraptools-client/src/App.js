import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRoute from './PrivateRoute/AdminRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UserDetails from './components/ManageUsers/UserDetails';
import Categories from './components/Pages/Categories';
import Discover from './components/Pages/Discover';
import Favorites from './components/Pages/Favourites';
import Homes from './components/Pages/Home';
import LatestNews from './components/Pages/LatestNews';
import ProductInformation from './components/Pages/ProductInformation';
import SearchCategory from './components/Pages/SearchCetagory';
import SubmitNews from './components/Pages/SubmitNews/SubmitNews';
import SubmitTool from './components/Pages/SubmitTool';
import UpdateNews from './components/Pages/UserNews/UpdateNews';
import UpdateTools from './components/UserTools/UpdateTools';
import SignIn from './components/authentication/SingIn';
import AdminProfile from './components/dashboard/AdminProfile';
import ApproveNews from './components/dashboard/ApproveNews';
import ApproveTools from './components/dashboard/ApproveTools';
import Content from './components/dashboard/Content';
import DashboardMain from './components/dashboard/Dashboard.main';
import Database from './components/dashboard/Database';
import ManageNews from './components/dashboard/ManageNews';
import ManageTools from './components/dashboard/ManageTools';
import ManageUsers from './components/dashboard/ManageUsers';
import Paperbase from './components/dashboard/Paperbase';
import SuggestEdit from './components/dashboard/SuggestEdit';
import ToolInformation from './components/dashboard/ToolInformation';
import UserManageNews from './components/dashboard/UserManageNews';
import UserManageTools from './components/dashboard/UserManageTools';
import useAuthCheck from './hooks/useAuthCheck';


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
             <Route path="/categories/:Id" element={<PrivateRoute> <SearchCategory/></PrivateRoute>}/>  
             <Route path="/news" element={<PrivateRoute> <LatestNews/></PrivateRoute>}/>  
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
               <Route path='authentication' element={<PrivateRoute> <Content/> </PrivateRoute>} />   
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
               <Route path='tool/:toolId' element={<ToolInformation/>} /> 
               <Route path='admin_profile' element={<AdminRoute><AdminProfile/></AdminRoute>} /> 
               {/* <Route path='manage_result' element={<ManageResult/>} />  */}
               <Route path='database' element={<Database />} />  
             </Route> 
        </Routes>
    </div>
  ); 
}

export default App;
