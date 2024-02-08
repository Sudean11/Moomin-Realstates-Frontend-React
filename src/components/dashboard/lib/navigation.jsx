import {HiOutlineViewGrid ,HiLogout} from 'react-icons/hi';
import { FaListUl,FaHistory,FaSave } from 'react-icons/fa';
export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key:'clientDashBoard',
        label:'ClientDashBoard',
        path:'/client',
        icon:<HiOutlineViewGrid/>
    },
    {
        key:'offerList',
        label:'OfferList',
        path:'offerList',
        icon:<FaListUl/>
    },
    {
        key:'offerHistory',
        label:'OfferHistory',
        path:'offerHistory',
        icon:<FaHistory/>
    },
    {
        key:'savedList',
        label:'SavedList',
        path:'savedList',
        icon:<FaSave/>
    },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS =[
    {
        key:'logout',
        label:'Logout',
        path:'/',
        icon:<HiLogout/>
    }

]