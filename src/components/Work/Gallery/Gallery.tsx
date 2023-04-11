import { Modal } from '../../Modal/Modal';
import './Gallery.scss'

import { useEffect, useMemo, useState } from 'react';

interface GalleryProps {
    list: GalleryItem[];
}

export interface GalleryItem {
    logo: string;
    title: string;
    description: string;
    extraImage: ExtraImage[];
}

export interface ExtraImage {
    link: string;
}

function Gallery({ list }: GalleryProps) {
    const [entries, setEntries] = useState<GalleryItem[]>(list);
    const [selectedEntry, setSelectedEntry] = useState<GalleryItem>();
    const [selected, setSelected] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setSelectedEntry(entries.at(0));
    }, [])

    function prev() {
        if (selected == 0) return;
        const select = selected - 1;
        setSelected(select);
        setSelectedEntry(entries.at(select));
    }

    function next() {
        if (selected == entries.length - 1) return;
        const select = selected + 1;
        setSelected(select);
        setSelectedEntry(entries.at(select));
    }

    return (
        <div className="Gallery">
            <div className="Gallery__Entry">
                <img className="Gallery__Image" onClick={() => setOpen(true)} src={selectedEntry?.logo} alt="" />
            </div>

            <div className="Gallery__Prev">
                <a className="Gallery__Anchor" onClick={() => prev()}>❮</a>
            </div>
            <div className="Gallery__Next">
                <a className="Gallery__Anchor" onClick={() => next()}>❯</a>
            </div>

            <Modal open={open} logo={selectedEntry?.logo!} onClose={() => setOpen(false)}>
                <>
                    <h1>{selectedEntry?.title} </h1>
                    <p>
                        {selectedEntry?.description}
                    </p>
                </>
            </Modal>
        </div>
    )
}

export default Gallery
