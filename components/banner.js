import React from "react";
import GlobalStyle from "../components/globalStyle";
import Link from "next/link"




const Banner = ( ) => (
    <div className="above-the-fold" id="home" >
        <style jsx>{ `
            .above-the-fold {
                background-image: url( "http://ieee.metu.edu.tr/anlatrobotunu/background.png" );
                background-size: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                height: 100vh;
                position: relative;
                color: #eee;
            }

            .above-the-fold .centered-text {
                position: absolute;
                height: 350px;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }

            .above-the-fold h1 {
                color: #ee742a;
                font-size: 3.5rem;
                margin: 4px;
            }
            .above-the-fold h2 {
                marginTop: 30px;
            }
            

            .overlay {
              padding:3px;
                background: -webkit-radial-gradient(circle, rgba(0,0,0,0.5), #2F2727);
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }
        ` }</style>
        <div className="overlay" />
        <div className="centered-text">
            <h1> IEEE ODTÜ </h1><br/>
            
            <h1> Anlat Robotunu </h1> <br/><br/>
            <nav>
            <Link href="/anlatrobotunu/register"  ><a className="button page">
            
            Başvur</a>
            
            </Link>        
            </nav>
            <br/><br/>
         <h3> Son Başvuru Tarihi 6 Nisan 2018 </h3><br/>

        </div>
    </div>
);

export default Banner;
