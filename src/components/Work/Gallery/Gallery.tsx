import './Gallery.scss'

import { useState } from 'react';

interface GalleryProps {
    list: GalleryItem[];
}

export interface GalleryItem {
    logo: string;
}

function Gallery({ list }: GalleryProps) {
    const [entries, setEntries] = useState<GalleryItem[]>(list);
    const [selected, setSelected] = useState<number>(0);

    function prev() {
        if (selected == 0) {
            return;
        }
        setSelected(selected - 1)
    }

    function next() {
        if (selected == entries.length - 1) {
            return;
        }
        setSelected(selected + 1)
    }
    
    function getSelectedEntry() // Slow
    {
        return entries.at(selected);
    }

    return (
        <div className="Gallery">
            <div className="Gallery__Entry">
                <img className="Gallery__Image" src={getSelectedEntry()?.logo} alt="" />
            </div>

            <div className="Gallery__Actions">
                <div className="Gallery__Prev">
                    <a onClick={() => prev()}>❮</a>
                </div>
                <div className="Gallery__Next">
                    <a onClick={() => next()}>❯</a>
                </div>
            </div>
        </div>
    )
}

export default Gallery
