import './Skills.scss'

import AE from '../../assets/ae.png';
import AI from '../../assets/ai.png';
import ID from '../../assets/id.png';
import PS from '../../assets/ps.png';
import M from '../../assets/m.png';
import PT from '../../assets/pt.png';
import UNITY from '../../assets/unity.png';

function Skills() {
    return (
        <div className="Skills">
            <div className="Skills__Container">
                <div className="Skills__Left">
                    <h1 className="Skills__Title" id="skills">Vaardigheden</h1>
                    <p className="Skills__Description">
                        Mijn ervaringen in Adobe software is zeer uitgebreid, zeker in de software Adobe Indesign, Illustrator, Photoshop en After Effects. 
                        Op het moment ben ik mijn kennis verder aan het uitbreiden op school, met het keuzedeel 3d Artwork. Daarbij gebruik ik de software Maya, Substance Painter en Unity. 
                    </p>
                </div>
                <div className="Skills__Right">
                    <div className="Skills__Row">
                        <div className="Skills__Item">
                            <img className="Skills__Image" src={AE} alt="" />
                        </div>
                        <div className="Skills__Item">
                            <img className="Skills__Image" src={AI} alt="" />
                        </div>
                        <div className="Skills__Item">
                            <img className="Skills__Image" src={ID} alt="" />
                        </div>
                        <div className="Skills__Item">
                            <img className="Skills__Image" src={PS} alt="" />
                        </div>
                    </div>
                    <div className="Skills__Row Skills__Row--Center">
                        <div className="Skills__Item">
                            <img className="Skills__Image" src={M} alt="" />
                        </div>
                        <div className="Skills__Item">
                            <img className="Skills__Image" src={PT} alt="" />
                        </div>
                        <div className="Skills__Item">
                            <img className="Skills__Image" src={UNITY} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
