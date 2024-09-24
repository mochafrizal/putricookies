import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

function Hero () {
    return (
        <header className="h-100 min-vh-100 d-flex align-items-center">
          <div className="container">
            <div className="row">
                <motion.div 
                    className="col-md-6 d-flex flex-column justify-content-start align-items-center align-items-sm-start"
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    >
                      
                    <h1 className="hero-title text-light text-center text-sm-start fw-bold text-uppercase lh-1">
                     Always <span className="" style={{color: '#543310'}}>Fresh</span> & <span className="" style={{color: '#543310'}}>Autentic</span>
                    </h1>
                    <p className="text-center text-sm-start fw-bolder text-light">Karena hanya dibuat di dapur kami</p>
                </motion.div>
            </div>
          </div>
        </header>
    )
}

export default Hero;