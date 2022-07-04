import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, Delete }) =>
  isShowing
    ? ReactDOM.createPortal(
      <div style={{position:'absolute', top:'0', left:'0', backgroundColor:'#000000cf',height:'110vh', width:'100vw'}}>
            <div className="modal-wrapper">
              <div className="modal">
                <div style={{position:'relative', fontSize:'35px', zIndex:'2', left:'38vw', top:'30vh'}}>
                  <h4 style={{color:'white'}}>Voulez vous vraiment supprimer?</h4>
              <button
                style={{ height: '8vh', width: '10vw', marginLeft: '3vw', borderRadius: '10px', border: '1px solid #f2f4f8', backgroundColor: 'lightblue', color:'white', fontSize:20}}
                    type="button"
                    className="modal-close-button"
                  onClick={() => Delete()}
                >
                  oui
                </button>
              <button
                style={{height:'8vh', width:'10vw', marginLeft:'3vw', borderRadius:'10px', border:'1px solid #f2f4f8', backgroundColor:'red', color:'white', fontSize:20}}
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                >
                  non
                  </button>
                </div>
              </div>
            </div>
        </div>,
        document.body
      )
    : null;

export default Modal;