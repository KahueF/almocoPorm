import { Link } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./LateralMenu.css"

export default function LateralMenu({ menuOpen, closeMenu }) {
    return (
        <div className={`${menuOpen ? "background" : ""}`}>
            <div className={`${menuOpen ? "lateralMenu" : "hiddenMenu"} `}>
                <div className="divHeader2">
                    <IoExitOutline
                        onClick={closeMenu}
                        className="iconMenu"
                    />
                    <section>
                        <h1>PORMADE PORTAS DE MADEIRAS DECORATIVAS LTDA</h1>
                    </section>
                </div>
                <div className="divMenuFooter">
                    <div className="divIconFooter">
                        <section>
                            <AiOutlineExclamationCircle className="iconFooter"/>
                            <p>v1.0</p>
                        </section>
                        <Link>Enviar diagnóstico</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}