import Dashboard from './App';
import Profile from '../src/pages/Profile/Profile';
import AuthLogin from "./src/pages/Auth/AuthLogin";
import AuthSignup from "./src/pages/Auth/AuthSignup";
import Auth from "../src/pages/Auth/Auth";
import ForumPage from "../src/pages/ForumPage/ForumPage";
import AddPost from '../src/components/PostShare/PostShare';
import ViewPost from '../components/admin/post/Viewpost';
import EditPost from '../components/admin/post/Editpost';
import Order from '../components/admin/order/Order';
import Forum from "./Forum";


const routes = [
    { path: '/', exact: true, name: 'Admin' },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/AuthSignup', exact: true, name: 'Order', component: AuthSignup },
    { path: '/AuthLogin', exact: true, name: 'Order', component: AuthLogin },
    { path: '/forumpage', exact: true, name: 'ForumPage', component: ForumPage },
    { path: '/add-post', exact: true, name: 'AddPost', component: AddPost },
    { path: '/view-post', exact: true, name: 'ViewPost', component: ViewPost },
    { path: '/edit-post/:id', exact: true, name: 'Editpost', component: Editpost },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/orders', exact: true, name: 'Order', component: Order },
];

export default routes;