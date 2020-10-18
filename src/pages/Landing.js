import React from 'react'
import { useLocation } from 'react-router'
import '../stylesheet/global.css'
import '../stylesheet/pages/Landing.css'

import HeaderBar from '../components/headerBar.js'
import SlideTop from '../components/slideTop.js'

import $ from 'jquery'
import Axios from 'axios'

import { FiSearch } from 'react-icons/fi'

import netlifyIdentity from 'netlify-identity-widget'

export default function Landing() {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    
    let query = useQuery();

    $(document).ready(function getReady() {

        const user = netlifyIdentity.currentUser();
        console.log(user)

        var today = new Date()
        var curHr = today.getHours()

        if(user) {
            if (curHr < 12) {
                document.getElementById('usernameShow').innerText = `Bom dia, ${user.user_metadata.full_name}`
            } else if (curHr < 18) {
                document.getElementById('usernameShow').innerText = `Boa tarde, ${user.user_metadata.full_name}`
            } else {
                document.getElementById('usernameShow').innerText = `Boa noite, ${user.user_metadata.full_name}`
            }

            document.getElementById('loginSugestion1').hidden = true
            document.getElementById('loginSugestion2').hidden = true
        }
        if(!user) {
            document.getElementById('usernameShow').hidden = true
        }

        if(!query.get('q')) {
            Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b57b43f9142c9cc5e6b9e91d5a4f9cdb&language=pt-BR&page=1')
            .then(resp => {

                var results = resp.data.results

                console.log(resp.data)

                results.slice(0, 3).forEach(movie => {
                    console.log(movie)

                    var movieData = `<div id="${movie.title}"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" id="${movie.title}PosterImage"/><div id="${movie.title}DataDiv"><h1 id="${movie.title}h1Title">${movie.title}</h1><h2>${movie.popularity} pessoas assistiram a este filme</h2><h2>Descrição do filme</h2><h3>${movie.overview}</h3></div></div>`

                    $('#generatedMoviesContainer').append(movieData)
                    document.getElementById(`${movie.title}`).style.backgroundColor = "#FFF"
                    document.getElementById(`${movie.title}`).style.minHeight = "300px"
                    document.getElementById(`${movie.title}`).style.minWidth = "400px"
                    document.getElementById(`${movie.title}`).style.borderRadius = "24px"
                    document.getElementById(`${movie.title}`).style.padding = "15px"
                    document.getElementById(`${movie.title}`).style.display = "flex"
                    document.getElementById(`${movie.title}`).style.color = "black"
                    document.getElementById(`${movie.title}`).style.marginBottom = "15px"

                    document.getElementById(`${movie.title}PosterImage`).style.height = "350px"
                    document.getElementById(`${movie.title}PosterImage`).style.width = "250px"

                    document.getElementById(`${movie.title}DataDiv`).style.maxWidth = "550px"
                    document.getElementById(`${movie.title}DataDiv`).style.marginLeft = "15px"
                })
            })
        }
        if(query.get('l')) {
            var bookSearch = encodeURIComponent(query.get('l').trim())
            console.log(bookSearch)

            Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&callback=handleResponse`)
            .then(resp => {
                console.log(resp.data["items"])
            })
        }
    })

    return (
        <div id="mainContent">

            <header>

                <HeaderBar />

            </header>

            <hr />

            <div style={{display:"flex", justifyContent:"center"}}>
                <h1 id="usernameShow"></h1>
            </div>

            <div style={{display:"flex", justifyContent:"center", marginTop:"15px"}}>
                <div id="searchResult" style={{padding:"15px"}} hidden>
                    <h1>Procura feita com sucesso!</h1>
                    <h3 id="searchResultText"></h3>

                    <h2 id="otherDiscovery"></h2>

                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button className="startButton" onClick={netlifyIdentity.open('login')} id="loginSugestion">Fazer login</button>
                    </div>
                </div>
            </div>

            <div className="darkerContent" id="bookDiv" style={{justifyContent:"center"}}>

            <img src="https://loja.taglivros.com/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/s/o/sociedadeanel.png" style={{height:"500px", width:"550px"}}/>

            <div className="flexColumn" style={{justifyContent:'center'}}>

                <div className="title">
                    <h2 style={{fontSize:'64px', fontWeight:800}}>Você é o cara da leitura?</h2>  
                </div>

                <form>
                    <div className="bookSearchInputWrapper">
                        <FiSearch size={48} color={'rgb(65, 65, 65)'}/>
                        <input className="bookSearchInput" placeholder="Em desenvolvimento..." name="l" type="text" disabled/>
                    </div>
                </form>

                <h2 style={{fontSize:"32px", maxWidth:'800px', textAlign:"left"}}>Gosta de ler né? Está no lugar certo! <br /> Se você também tem vontade de que todo mundo leia o que você gosta, pode começar agora!</h2>

                <div style={{display:"flex", justifyContent:"center"}}>
                    <button className="startButton" id="loginSugestion1">Mostrar meus livros</button>
                </div>
            </div>

            </div>

            <div className="darkerContent" id="movieDiv" style={{background:'#ff3874', justifyContent:"center"}}>

            <div className="flexColumn" style={{justifyContent:'center'}}>

                <div className="title">
                    <h2 style={{fontSize: '58px', fontWeight:800}}>Você também gosta de filmes!?</h2>  
                </div>

                <h2 style={{fontSize:"32px", maxWidth:'800px', textAlign:"left"}}>Então acho que você vai gostar disso...</h2>

                <div className="generatedMoviesContainer" id="generatedMoviesContainer" style={{display:"flex", flexDirection:"column", marginBottom:"15px"}} /> 

                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h1 style={{marginRight:"30px"}}>Gostou desses filmes né?</h1>
                    <button className="startButton" id="loginSugestion2">Ver mais filmes</button>
                </div>

                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <form>
                        <div className="bookSearchInputWrapper">
                            <FiSearch size={48} color={'rgb(65, 65, 65)'}/>
                            <input className="bookSearchInput" placeholder="Em desenvolvimento..." name="m" type="text" id="moviesSearch"/>
                        </div>
                    </form>
                </div>
            </div>

            </div>

            <div className="darkerContent" id="socialDiv" style={{background:'#33cbd3', justifyContent:"center"}}>

            <div className="flexColumn" style={{justifyContent:'center'}}>

                <div className="title">
                    <h2 style={{fontSize: '58px', fontWeight:800}}>Você leu até aqui!?</h2>  
                </div>

                <h2 style={{fontSize:"32px", maxWidth:'1000px', textAlign:"left"}}>Que legal! Antes de subir de novo, eu queria te fazer um pedido...</h2>

                <h2 style={{fontSize:"32px", maxWidth:'1000px', textAlign:"left"}}>Você poderia nos seguir no instagram e no twitter? Juro que é quase INSTANTâneo!</h2>

                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{display:"flex", justifyContent:"center", backgroundColor:"#F4F4F4", borderRadius:'18px', alignItems:"center", width:"500px"}}>
                        <a href="https://www.instagram.com/istant.social/">
                            <img src="https://seeklogo.net/wp-content/uploads/2016/06/Instagram-logo.png" style={{height:'200px', width:'200px'}}/>
                        </a>

                        <a href="">
                            <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png" style={{height:'150px', width:'150px'}}/>
                        </a>
                    </div>
                </div>
            </div>

            </div>

            <SlideTop />

        </div>
    )
}