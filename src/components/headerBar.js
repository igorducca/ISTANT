import React from 'react'
import '../stylesheet/components/headerBar.css'

import { FiSearch } from 'react-icons/fi'
import { FiBook } from 'react-icons/fi'
import { FiFilm } from 'react-icons/fi'
import { FiAtSign } from 'react-icons/fi'

import { initNetlifyIdentity, openNetlifyModal } from '../lib/netlifyFunctions'

export default function headerBar() {

    initNetlifyIdentity();

    function searchInputRise() {
        const input = document.getElementById('search')
        document.getElementById('search').style.justifyContent = 'left'
        document.getElementById('q').hidden = false

        input.style.width = '300px'
    }

    function slideToBooks() {
        document.getElementById('bookDiv').scrollIntoView()
    }

    function slideToMovie() {
        document.getElementById('movieDiv').scrollIntoView()
    }

    function slideToSocial() {
        document.getElementById('socialDiv').scrollIntoView()
    }

    return (
        <div className="headerBarContainer">
            <div className="headerBar">
                <h1>ISTANT</h1>

                <h2 style={{marginLeft:'15px', marginRight:'15px'}}>Compartilhe suas mídias</h2>

                <div className="headerBarIconDiv">
                    <FiBook size={24} color={'rgb(65, 65, 65)'} onClick={slideToBooks} id="bookIcon"/>
                </div>

                <div className="headerBarIconDiv">
                    <FiFilm size={24} color={'rgb(65, 65, 65)'} onClick={slideToMovie}/>
                </div>

                <div className="headerBarIconDiv">
                    <FiAtSign size={24} color={'rgb(65, 65, 65)'} onClick={slideToSocial}/>
                </div>

                <div className="headerBarIconDiv" onClick={openNetlifyModal}>
                    <h3>Login</h3>
                </div>

                <div className="createAccountDiv" onClick={openNetlifyModal}>
                    <h3>Criar conta</h3>
                </div>
            </div>
        </div>
    )
}