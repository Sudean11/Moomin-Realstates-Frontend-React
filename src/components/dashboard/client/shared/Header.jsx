import { Popover } from '@headlessui/react'
import React from 'react'
import { HiOutlineChatAlt, HiOutlineSearch, HiOutlineBell } from 'react-icons/hi';
import classNames from 'classnames';

const Header = () => {
    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-color-black-900'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1' />
                <input type='text' placeholder='Search....' className='text-sm focus:outline:none active:outline-none h-10 w-[24rem] border border-gray-600 rounded-sm pl-11 pr-4' />
            </div>
            <div className='flex items-center gap-2 mr-2'>
                <Popover className='relative'>
                    {({ open }) => (
                        <>
                            <Popover.Button >
                                <HiOutlineChatAlt fontSize={24} />

                            </Popover.Button>
                        </>
                    )}
                </Popover>

                <HiOutlineBell fontSize={24} />
            </div>

        </div>
    )
}

export default Header