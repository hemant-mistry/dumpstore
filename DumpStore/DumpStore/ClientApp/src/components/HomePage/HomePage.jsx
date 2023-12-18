import React, { useEffect, useState } from "react";
import "./HomePage.css";
import FiHelpAppLogo from "../../assets/FiHelpAppLogo.png"

export default function HomePage(){
    
    return (

     
        <div className="main-container">
            <div className="app-heading-container">
                <div className="app-header">DumpStore</div>
                <div className="app-desc">Welcome to DumpStore, this is where I dump all my apps</div>
            </div>
            
            <div className="allcards">
                <div className="card">
                   
                    <div className="card-body">
                        <div className="card-content">
                        <img src={FiHelpAppLogo} className="card-img-top" alt="..." />
                        <h5 className="card-title">FiHelp</h5>
                        </div>
                           
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary"><p>Download</p></a>
                        
                    </div>

                </div>
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Download</a>
                        </div>
                </div>
            </div>
        </div>
    );
}