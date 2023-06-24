import React from 'react';
import { AiOutlineForm, AiOutlineAppstoreAdd } from 'react-icons/ai';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-100 py-5 px-10 border-b border-gray-300">
      <div className="flex items-center ml-[100px]">
        <Link href="/">
          <span className="text-gray-800 text-2xl font-bold">RapidConnect</span>
        </Link>
        <div className="space-x-4 flex mx-[3rem] px-[1rem]">
          <Link href="/form">
            <span className="p-2 rounded-[4px] bg-gray-200 flex px-1">
              Form <AiOutlineForm className="h-6 w-6 mr-2" />
            </span>
          </Link>
          <Link href="/template">
            <span className="p-2 rounded-[4px] bg-gray-200 flex px-1">
              Template <AiOutlineAppstoreAdd className="h-6 w-6 mr-2" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;