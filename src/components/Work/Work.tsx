import Gallery from './Gallery/Gallery'
import './Work.scss'

function Work() {
    return (
        <div className="Work">
            <div className="Work__Container">
                <div className="Work__Left">
                    <div className="Work__Gallery">
                        <Gallery />
                    </div>
                </div>
                <div className="Work__Right">
                    <h1 className="Work__Title" id="work">Mijn werk</h1>
                    <h2 className="Work__SubTitle" id="work">Graphic Design</h2>
                    <p className="Work__Description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi libero, porro magni suscipit optio. 
                        Hic velit corporis fugiat ratione quae doloribus, vel commodi, totam autem itaque numquam tempora soluta.
                    </p>
                </div>
            </div>
            <div className="Work__Container">
                <div className="Work__Left">
                    <h2 className="Work__SubTitle" id="work">Illustraties</h2>
                    <p className="Work__Description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi libero, porro magni suscipit optio. 
                        Hic velit corporis fugiat ratione quae doloribus, vel commodi, totam autem itaque numquam tempora soluta.
                    </p>
                </div>
                <div className="Work__Right">
                    <div className="Work__Gallery">
                        <Gallery />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
