import './Nav.scss'

function Nav() {
    return (
        <div className="Nav">
            <div className="Nav__Container">
                <div className="Nav__Left">
                    
                </div>
                <div className="Nav__Right">
                    <ul className="Nav__List">
                        <li className="Nav__Item"><a className="Nav__Anchor" href="#skills">Vaardigheden</a></li>
                        <li className="Nav__Item"><a className="Nav__Anchor" href="#work">Mijn werk</a></li>
                        <li className="Nav__Item"><a className="Nav__Anchor" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
