import { faList, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'antd';
import * as React from 'react';

export default function Header () {
  return (
    <div className='pr-4  bg-black text-white flex justify-between items-center border-b border-gray-600'>
        <div className='common-item'>
          <FontAwesomeIcon icon={faList} className='size-5! mr-7 ml-6 text-gray-400'/>
        </div>
        <div className='flex-1 mx-96 bg-gray-900'>
          <Input placeholder='Tìm kiếm (Ctrl+Alt+E)'
          prefix={<FontAwesomeIcon icon={faSearch} className='size-4 text-gray-500 ml-4 mr-3' />}
          className="custom-search-input"
          style={{
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            color: 'white',
          }} />
        </div>
        <div className='common-item'>
          <FontAwesomeIcon icon={faUser} className='size-6!'/>
        </div>
    </div>
  );
}
