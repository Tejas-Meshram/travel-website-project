import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Bora Bora island will make you feel love at first sight. This south pacific island could easily be defined as the center of the romantic universe, where luxury, beach resorts, and spas dot the island with overwater bungalows, thatched-roof villas, and a fabled ambiance. '
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: 'Machu-Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'More than 7,000 feet above sea level in the Andes Mountains, Machu Picchu is the most visited tourist destination in Peru. '
    },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. '
    },
    {
        id:4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'Famous for its unique rock formations and amazing hot air ballooning opportunities, the otherworldly landscapes of Cappadocia are one of Turkey most popular natural wonders. '
    },
    {
        id:5,
        imgSrc: img5,
        destTitle: 'Guanajuata',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'With its rich, well-preserved colonial past, Guanajuato has been recently named the most beautiful city in Mexico. '
    },
    {
        id:6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy ',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'Cinque Terre is famous for its fresh seafood. The towns are, after all, fishing villages! Sample pesto with your pasta, or try some fresh focaccia bread. '
    },
    {
        id:7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Angkor Wat is the most famous ancient temple site in Cambodia. '
    },
    {
        id:8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. '
    },
    {
        id:9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. '
    }
];

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
          Most Visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          data.map(({id, imgSrc, destTitle, location, grade, fees, description})=> {
            return (
              <div data-aos='fade-up' key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>
                  

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  )
}

export default Main