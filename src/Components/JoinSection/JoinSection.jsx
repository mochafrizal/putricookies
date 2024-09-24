import React from "react";
import "./JoinSection.css"
import Container  from "react-bootstrap/Container";
import { motion } from "framer-motion";
import PurpleBtn from "../PurpleBtn/PurpleBtn";

function JoinSection () {
    return (
        <div className="join-section py-5 text-light">
            <Container className="h-100">
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                    
                    <motion.h3
                        className="text-start w-75 fw-bolder text-dark"
                        initial={{ opacity: 0, x: 300}}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration:1 }}
                        >
                           <p>
                           kastengel dengan rasa keju terbaik
                           </p>
                           <p>
                           Nastar dengan isian selai nanas yang kami olah sendiri
                           </p>
                           <p>
                           Pastel dengan isian abon sapi          
                           </p>
                    </motion.h3>
                    <br />
                    <motion.div
                        initial={{ opacity: 0, x: -200}}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration:1 }}
                    >
                        <PurpleBtn btnTitle="order now"/>
                    </motion.div>
                </div>
            </Container>
        </div>
    )   
}

export default JoinSection; 