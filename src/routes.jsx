import Dashboard from './App';
import Profile from '../src/Pages/Profile/Profile';
import AuthLogin from "./src/pages/Auth/AuthLogin";
import AuthSignup from "./src/pages/Auth/AuthSignup";
import Auth from "../src/Pages/Auth/Auth";
import AuthSignUp from "../src/Pages/Auth/AuthSignup";
import AuthLogin from "../src/Pages/Auth/AuthLogin";
import Auth from "../src/Pages/Auth/Auth";
import ForumPage from "../src/Pages/ForumPage/ForumPage";
import AddPost from '../src/components/PostShare/PostShare';
import ViewPost from '../components/admin/post/Viewpost';
import EditPost from '../components/admin/post/Editpost';
import Order from '../components/admin/order/Order';
import Forum from "./Forum";


const routes = [
    { path: '/', exact: true, name: 'Admin' },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/Signup', exact: true, name: 'Order', component: AuthSignUp },
    { path: '/Login', exact: true, name: 'Order', component: AuthLogin },
    { path: '/forumpage', exact: true, name: 'ForumPage', component: ForumPage },
    { path: '/add-post', exact: true, name: 'AddPost', component: AddPost },
    { path: '/view-post', exact: true, name: 'ViewPost', component: ViewPost },
    { path: '/edit-post/:id', exact: true, name: 'Editpost', component: Editpost },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/orders', exact: true, name: 'Order', component: Order },
];

export default routes;