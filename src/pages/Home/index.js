import menu from '../../image/menu.png';
import logo from '../../image/logo.png';
import './home.css'
import { useState } from 'react';
import { RiShieldCheckFill } from "react-icons/ri";
import logoReserva from '../../image/LogoReserva.png'
import LateralMenu from '../../Componente/LateralMenu';

export default function Home() {

    const [horaAtual, setHoraAtual] = useState(null);
    const [openMenu, setOpenMenu] = useState(false)

    const atualizaHora = () => {
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const hour = hours < 10 ? `0${hours}` : hours
        const minute = minutes < 10 ? `0${minutes}` : minutes
        const second = seconds < 10 ? `0${seconds}` : seconds
        setHoraAtual(`${hour}:${minute}:${second}`)
    }

    setInterval(() => {
        atualizaHora()
    }, 1000)



    const handle_modal = () => {
        setOpenMenu(!openMenu)
    };

    return (
        <div className='containerPai'>
            <div className='header'>
                <span className='span_image' onClick={handle_modal}>
                    <img src={menu} className='image' alt='menu' />
                </span>
            </div>
            

            <div className='container'>

                <div className='containerButton'>

                    <div className='button' onClick={() => window.location.assign('/keyboard')}>

                        <span className='containerImage'>
                            <img src={logo} className='portal' alt='logo' />
                        </span>

                        <div className='containerText'>
                            <h2 className='text-principal'>Confirmar Almoço</h2>
                            <h2 className='text-principal text-ajustes'>{horaAtual}</h2>
                        </div>
                    </div>
                </div>
                    <div className='iconsFooter'>
                        <div className="textFooter">
                            <RiShieldCheckFill className="iconeFooter"/>
                            <p>Sicronizado</p>
                        </div>
                        <img src={logoReserva} alt="Imagem do logo"/>
                    </div>
            </div>
            <LateralMenu menuOpen={openMenu} closeMenu={() =>setOpenMenu(!openMenu)}/>
        </div>

    )
}