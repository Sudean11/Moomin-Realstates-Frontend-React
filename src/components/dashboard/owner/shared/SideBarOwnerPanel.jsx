import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { OWNER_DASHBOARD_SIDEBAR_LINKS } from '../lib/navigation'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { authService } from '../../../../services/client-api/authService'

const linkCLasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const SidebarOwnerPanel = () => {
  const navigate = useNavigate();

  const logoutHandler = () =>{
    console.log('logging out');
    authService.logout();
    navigate('/');
  }

  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <BsPersonCircle fontSize={24} />
        <span className='text-neutral-100 text-lg'>Username</span>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {OWNER_DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className={classNames('border-t text-red-500' , linkCLasses)} onClick={logoutHandler}>
        <span className='text-xl'><HiOutlineLogout/></span>
        Logout
      </div>
    </div>
  )
}

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkCLasses)}>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}

export default SidebarOwnerPanel