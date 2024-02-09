import {HiOutlineViewGrid ,HiMail, HiFolderAdd } from 'react-icons/hi';
import { FaListUl,FaHistory} from 'react-icons/fa';
export const OWNER_DASHBOARD_SIDEBAR_LINKS = [
    {
        key:'ownerHome',
        label:'OwnerHome',
        path:'/owner-dashboard',
        icon:<HiOutlineViewGrid/>
    },
    {
        key:'addProperty',
        label:'Add Property',
        path:'addProperty',
        icon:<HiFolderAdd/>
    },
    {
        key:'offer',
        label:'Offers',
        path:'offers',
        icon:<FaListUl/>
    },
    {
        key:'propertiesTable',
        label:'Properties List',
        path:'propertyList',
        icon:<FaListUl/>
    },
    {
        key:'userMessage',
        label:'User Message',
        path:'userMessage',
        icon:<HiMail/>
    },
]

