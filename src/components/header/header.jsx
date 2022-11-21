import React from 'react'
import './header.css'
import {FiSearch} from 'react-icons/fi'

const Header = () => {

  return (
    
    <div className='col-12' id='id_header'>
      <div className='row justify-content-center'>
        <div className='col-lg-10 col-md-12 border border-danger'>
          <div className='row'>
            <div className='col-4'>
            <FiSearch value={{ className: 'react-icons' }}/>
            </div>

            <div className='col-4' id='id_header_middle'>
            </div>

            <div className='col-4'></div>
          </div>
        </div>
        <div className='col-lg-9 col-md-11'>

        </div>
      </div>
    </div>
  )
}

export default Header