import React from 'react'
import location from "../Img/location.png"
import email from "../Img/pocta.png"
import sultan from "../Img/sultan.png"
import katalog from "../Img/katalog-img.png"
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <div className="container">
         <div className="headers">
            <div className="header-left-box">
                
            <div className="header">
                <img src={location} alt="location" className='img-h' />
                <h3 className="header-text">г. Кокчетав, ул. Ж. Ташенова 129Б
                <p className="header-p">(Рынок Восточный)</p></h3>
            </div>


            <div className="header">
                <img src={email} alt="" />
                <h3 className="header-text">opt.sultan@mail.ru
                <p className="header-p">На связи в любое время</p></h3>
            </div>
            </div>
            <div className="header-link-right">
                <ul className="header-list">
                    <li className="header-item">
                        <Link className='header-link' to={'/'} >О компании</Link>
                    </li>
                    <li className="header-item">
                        <Link className='header-link' to={'/'} >Доставка и оплата</Link>
                    </li>
                    <li className="header-item">
                        <Link className='header-link' to={'/'} >Возврат</Link>
                    </li>
                    <li className="header-item">
                        <Link className='header-link' to={'/'} >Контакты</Link>
                    </li>
                </ul>
                
            </div>

        </div>
        <hr />

            <div className="sultan-header">
            
                <img src={sultan} alt="sultan_logo" />

             <div className="btn-info">

                <button className="btn-katalog">
                    <p className='btn-text'>
                     Каталог
                     <img src={katalog} alt="katalog_logo" />
                    </p>
                </button>

             <div className="input-d">

               <input type="text" className='input' placeholder='Поиск...'/>
             </div>
             </div>
            


            </div>


        
     </div>
    </div>
  )
}

export default Header