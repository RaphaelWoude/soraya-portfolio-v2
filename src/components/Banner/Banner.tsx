import './Banner.scss'
import Soraya2 from '../../assets/soraya2.png';

function Banner() {
    return (
        <div className="Banner">
            <div className="Banner__Container">
                <div className="Banner__Left">
                    <h1 className="Banner__Title">Hallo!</h1>
                    <h2 className="Banner__Subtitle">Mijn naam is <span className="Banner__Name">Soraya</span></h2>
                    <p className="Banner__Description">
                        Wat leuk dat je mijn werk komt bekijken. Natuurlijk hoop ik dat je met plezier en nieuwsgierige ogen 
                        naar mijn grafisch werk kan kijken. Mocht je het leuk vinden kan je altijd verder kijken op mijn website. 
                    </p>
                    <p className="Banner__Scroll">
                        Scroll voor meer 
                        <button className="Banner__Button">▼</button>
                    </p>
                </div>
                <div className="Banner__Right">
                    <img className="Banner__Logo" src={Soraya2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
