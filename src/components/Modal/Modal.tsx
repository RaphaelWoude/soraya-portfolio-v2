import { PropsWithChildren, useState } from "react";
import ReactDOM from "react-dom";
import './Modal.scss';
import Gallery, { GalleryItem } from "../Work/Gallery/Gallery";

interface ModalProps extends PropsWithChildren {
    open: boolean;
    logo: string;
    extraImages: GalleryItem[];
    onClose: () => void;
}

export function Modal(props: ModalProps) {
    return ReactDOM.createPortal(
        <>
            { props.open && 
                <div className="Modal" onClick={() => props.onClose()}>
                    <div className="Modal__Content" onClick={e => e.stopPropagation()}>
                        <div className="Modal__Header">
                            {!props.extraImages && (
                                <img className="Modal__Image" src={props.logo} />
                            )}
                            {props.extraImages && (
                                <Gallery list={props.extraImages} clickable={false} />
                            )}
                        </div>
                        <div className="Modal__Body">
                            { props.children }
                        </div>
                        {/* <div className="Modal__Footer">
                            <button onClick={() => props.onClose()} className="Modal__Button">
                                Sluiten
                            </button>
                        </div> */}
                    </div>
                </div>
            }
        </>,
        document.getElementById("root")!
    );
}