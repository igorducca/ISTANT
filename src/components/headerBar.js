import React from 'react'

import { Link } from 'react-router-dom'

import '../stylesheet/components/headerBar.css'

import { FiSearch } from 'react-icons/fi'
import { FiBook } from 'react-icons/fi'
import { FiFilm } from 'react-icons/fi'
import { FiAtSign } from 'react-icons/fi'

import NetlifyIdentity from 'netlify-identity-widget'

import $ from 'jquery'

export default function headerBar() {

    const user = NetlifyIdentity.currentUser();

    if(user) {
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
    
                    <div className="headerBarIconDiv" onClick={() => {
                        NetlifyIdentity.logout()
                    }
                    } id="loginHeaderButton">
                        <h3>Sair</h3>
                    </div>

                    <Link to={`/perfil/${user.user_metadata.full_name}`} style={{textDecoration:"none"}}>
                        <div className="createAccountDiv" onClick={() => {NetlifyIdentity.open('signup')}} id="signupHeaderButton">
                            <h3>Meu perfil</h3>
                        </div>
                    </Link>
                </div>
            </div>
        )
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

                <div className="headerBarIconDiv" onClick={() => {NetlifyIdentity.open('login')}} id="loginHeaderButton">
                    <h3>Login</h3>
                </div>

                <div className="createAccountDiv" onClick={() => {NetlifyIdentity.open('signup')}} id="signupHeaderButton">
                    <h3>Criar conta</h3>
                </div>
            </div>
        </div>
    )
}