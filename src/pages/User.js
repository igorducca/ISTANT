import React from 'react'
import { useParams } from 'react-router-dom'
import netlifyIdentity from 'netlify-identity-widget'
import { param } from 'jquery';

export default class User extends React.Component {
    render() {
        console.log(this.props)

        var searchedUser = this.props.match.params.user
        var loggedUser = netlifyIdentity.currentUser()

        if(loggedUser) {
            return(
                <div>
                    <h1 id="perfilTitle">Bem vindo ao seu perfil, {loggedUser.user_metadata.full_name}</h1>
                </div>
            )
        }
        if(searchedUser) {
            return(
                <div>
                    <h1 id="perfilTitle">Perfil de {searchedUser}</h1>
                </div>
            )
        }
    }
}