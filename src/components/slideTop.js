import React from 'react'

import { FiArrowUp } from 'react-icons/fi'

import '../stylesheet/components/slideTop.css'

export default function slideTop() {

    function slidePageTop() {
        window.scrollTo(0, 0)
    }

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"15px", cursor:"pointer"}}>
            <div className="slideTop">
                <FiArrowUp size={24} color={'#FFF'} onClick={slidePageTop}/>
            </div>
        </div>
    )
}