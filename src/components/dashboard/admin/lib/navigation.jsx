import {HiOutlineViewGrid ,HiLogout} from 'react-icons/hi';
import { FaListUl,FaHistory,FaSave, FaUser } from 'react-icons/fa';

export const ADMIN_DASHBOARD_SIDEBAR_LINKS = [
    {
        key:'adminDashBoard',
        label:'DashBoard',
        path:'/admin',
        icon:<HiOutlineViewGrid/>
    },
    {
        key:'users',
        label:'Users',
        path:'user',
        icon:<FaUser/>
    },
    {
        key:'properties',
        label:'Property List',
        path:'properties',
        icon:<FaListUl/>
    },
    
]

export const ADMIN_DASHBOARD_SIDEBAR_BOTTOM_LINKS =[
    {
        key:'logout',
        label:'Logout',
        path:'/',
        icon:<HiLogout/>
    }

]