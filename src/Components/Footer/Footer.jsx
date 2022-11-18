import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor, FaChevronRight} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter email address'/>
            <button data-aos='fade-up' className="btn flex">
              SEND<FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className='icon'/> Travel.
              </a>
              </div>

              <div data-aos='fade-up' className="footerParagraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius minus dolorem accusamus. Ipsam similique sint deleniti sed quod autem totam atque earum ut alias quibusdam minima quam, neque temporibus cum vitae debitis praesentium eos commodi nemo quidem quos? Ipsam ab ea eaque deleniti voluptatum nisi amet, maxime expedita suscipit dolor?
              </div>

              <div data-aos='fade-up' className="footerSocials flex">
                <AiOutlineTwitter className='icon'/>
                <AiFillYoutube className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaTripadvisor className='icon'/>
              </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                RentCars
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                MMT
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>

            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Payment
              </li>
            </div>

            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                India
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Europe
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Australia
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                London
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Dubai
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer