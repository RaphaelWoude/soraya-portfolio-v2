import Gallery, { GalleryItem } from './Gallery/Gallery'
import './Work.scss'

function Work() {
    const items1: GalleryItem[] = [
        { logo: 'assets/gallery1.png' },
        { logo: 'assets/gallery2.png' },
        { logo: 'assets/gallery3.png' },
        { logo: 'assets/gallery4.png' },
        { logo: 'assets/gallery5.png' },
        { logo: 'assets/gallery6.png' },
        { logo: 'assets/gallery7.png' }
    ];

    const items2: GalleryItem[] = [
        { logo: 'assets/illustraties1.png' },
        { logo: 'assets/illustraties2.png' },
        { logo: 'assets/illustraties3.jpg' },
        { logo: 'assets/illustraties4.jpg' },
        { logo: 'assets/illustraties5.png' },
        { logo: 'assets/illustraties6.png' },
        { logo: 'assets/illustraties7.png' },
        { logo: 'assets/illustraties8.jpg' },
        { logo: 'assets/illustraties9.jpg' },
        { logo: 'assets/illustraties10.jpg' },
        { logo: 'assets/illustraties11.jpg' },
    ];
        
    return (
        <div className="Work">
            <div className="Work__Container">
                <div className="Work__Left">
                        <h1 className="Work__Title" id="work">Mijn werk</h1>
                        <h2 className="Work__SubTitle" id="work">Graphic Design</h2>
                        <p className="Work__Description">
                            Door mijn voor opleiding heb ik natuurlijk heel veel kennis op gedaan in de software Adobe Indesign, 
                            Photoshop en Illustrator. in die kennis heb ik allerlei grafische magazines, visite kaartje en flyers gemaakt, 
                            hier naast kan je dat zien. <br/> <br/>
                            Voor meer informatie over mijn werk, kan je op de foto's klikken.
                        </p>
                </div>
                <div className="Work__Right">
                    <div className="Work__Gallery">
                        <Gallery list={items1} />
                    </div>
                </div>
            </div>
            <div className="Work__Container">
                <div className="Work__Left">
                    <h2 className="Work__SubTitle" id="work">Illustraties</h2>
                    <p className="Work__Description">
                        In mijn vrije tijd vind ik illustraties maken erg leuk, ik maak illustraties graag in de app Procreate, 
                        maar ik vind het ook erg leuk om op papier te tekenen. <br/> <br/>
                        Voor meer informatie over mijn werk, kan je op de foto's klikken.
                    </p>
                </div>
                <div className="Work__Right">
                    <div className="Work__Gallery">
                        <Gallery list={items2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
