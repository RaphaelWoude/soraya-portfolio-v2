import Gallery, { GalleryItem } from './Gallery/Gallery'
import './Work.scss'

function Work() {
    const items1: GalleryItem[] = [
        { logo: 'assets/gallery1.png', title: "Magazine De Tijdgeest", description: "Voor het vak Beeldvorming moest ik een magazine maken met als thema 'De Tijdgeest' \n\nProgramma's die ik heb gebruikt is: Adobe Indesign, Adobe Photoshop en Procreate" },
        { logo: 'assets/gallery2.png', title: "Wikkelvouw bronchure Portfolio", description: "Voor het vak Print heb ik een wikkelvouw bronchure gemaakt, om het in het productie huis het zelf uit te printen en het zelf uit te snijden. Voor extra skills in de machines. \n\nProgramma's die ik heb gebruikt: Adobe Indesign en Procreate." },
        { logo: 'assets/gallery3.png', title: "Visite kaartje", description: "Voor mijn toekomstige bedrijf heb ik een visite kaartje gemaakt. met als doel mijn eigen kaartje \n\nProgramma's die ik heb gebruikt: Adobe Indesign en Procreate" },
        { logo: 'assets/gallery4.png', title: "Pop art poster", description: "In het vak software moest ik een bepaald soort artwork maken genaamd 'Pop art' Daarbij vond ik het erg leuk om mezelf daarin te verwerken in het zwart wit \n\nProgramma die ik heb gebruikt: Procreate" },
        { logo: 'assets/gallery6.png', title: "Magazine Catalogus", description: "Voor het vak Beeldvorming moet ik een magazine maken met als thema 'Catalogus'een Catalogus houd simpel weg in een boek/magazine met een aantal kunstenaars met hun tentoongestelde werk \n\nProgramma's die ik heb gebruikt: Adobe Indesign en Adobe photoshop" },
        { logo: 'assets/gallery7.png', title: "Record", description: "" }
    ];

    const items2: GalleryItem[] = [
        { logo: 'assets/illustraties1.png', title: "League of Legends: Caitlin, Jinx en Vi ", description: "" },
        { logo: 'assets/illustraties2.png', title: "Kittycat", description: "Mijn vliegende Kittycat eiland" },
        { logo: 'assets/illustraties3.jpg', title: "Realitische dot Illustratie", description: "" },
        { logo: 'assets/illustraties4.jpg', title: "Mushroom Woman", description: "" },
        { logo: 'assets/illustraties5.png', title: "Character Design Chloe", description: "" },
        { logo: 'assets/illustraties6.png', title: "Character Design Luca", description: "" },
        { logo: 'assets/illustraties7.png', title: "GLR Winter Editie insta post", description: "" },
        { logo: 'assets/illustraties8.jpg', title: "Gekleurde League of Legends Lulu", description: "" },
        { logo: 'assets/illustraties9.jpg', title: "Fineline", description: "" },
        { logo: 'assets/illustraties10.jpg', title: "Realistische vogel", description: "" },
        { logo: 'assets/illustraties11.jpg', title: "Butterfly head", description: "" },
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
