import {HiOutlineViewGrid ,HiLogout} from 'react-icons/hi';
import { FaListUl,FaHistory,FaSave, FaHeart } from 'react-icons/fa';

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key:'clientDashBoard',
        label:'ClientDashBoard',
        path:'/client',
        icon:<HiOutlineViewGrid/>
    },
    {
        key:'offerList',
        label:'Offer List',
        path:'offers',
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
        label:'Favourites',
        path:'savedList',
        icon:<FaHeart/>
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