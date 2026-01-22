import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-2 px-5 bg-amber-50 h-screen'>
                    <h2 className='text-[30px] font-bold pt-5'>Navigation</h2>

                    <div className='mt-10 flex flex-col gap-2.5'>
                        <Link className='text-[18px] font-semibold bg-amber-200 px-5 py-1' href={"/dashboard/add-story"}>Add Story</Link>
                        <Link className='text-[18px] font-semibold bg-amber-200 px-5 py-1' href={"/dashboard/settings"}>Settings</Link>
                        <Link className='text-[18px] font-semibold bg-amber-200 px-5 py-1' href={"/dashboard/my-profile"}>My Profile</Link>
                    </div>
                </div>
                <div className='col-span-10'>
                    {children}
                </div>
            </div> 
        </>
    );
};

export default DashboardLayout;