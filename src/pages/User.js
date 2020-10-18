import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import netlifyIdentity from 'netlify-identity-widget'
import { param } from 'jquery';

export default class User extends React.Component {
    render() {
        console.log(this.props)

        var paramUser = this.props.match.params.user
        var loggedUser = netlifyIdentity.currentUser()

        if(paramUser == loggedUser.user_metadata.full_name) {
            alert("Bem vindo ao seu perfil")

            return (
                <div>
                    <h1 id="pageTitle">Agora você está vendo seu perfil, {loggedUser.user_metadata.full_name}</h1>
                </div>
            )
        }
        else {
            alert("Você está no perfil de outra pessoa")

            return (
                <div>
                    <h1 id="pageTitle">{loggedUser.user_metadata.full_name}, você está vendo o perfil de {paramUser}</h1>
                </div>
            )
        }
    }
}