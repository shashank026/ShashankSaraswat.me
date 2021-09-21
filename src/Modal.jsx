import React from 'react'

export const Modal = () => {
    return (
        <>
            <div class="popup center">
                <div class="icon">
                    <i class="fa fa-check"></i>
                </div>
                <div class="title">
                    Success!!
                </div>
                <div class="description">
                     Your Message has been sucessfully Sent. I will contact you soon.
                </div>
                <div class="dismiss-btn">
                    <button id="dismiss-popup-btn">
                        OK
                    </button>
                </div>
            </div>
        </>
    )
}
export default Modal;