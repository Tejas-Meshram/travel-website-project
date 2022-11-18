import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const menuItems = ['Home', 'Packages', 'Shop', 'About','Pages','News', 'Contact'];

const Navbar = () => {

  const [menu, setMenu] = useState(menuItems);
  const [active, setActive] = useState('navBar');

  
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1><MdOutlineTravelExplore className='icon'/> Travel.</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            {menu.map((item)=>{
              return (
                <li className="navItem">
                  <a href="#" className="navLink">{item}</a>
                </li>
              );
            })}
            <button className="btn">BOOK NOW</button>
          </ul>
          <div onClick={()=>setActive('navBar')} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div onClick={()=>setActive('navBar activeNavbar')} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar