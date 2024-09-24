import React from "react";
import "./TrainSection.css";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";

function TrainSection () {
    return (
        <div className="train-section py-5 position-relative" id="contact">
            <motion.div 
                className="bg-shape position-absolute"
                initial={{ opacity:0, x:-300 }}
                whileInView={{ opacity:0.5, x:0 }}
                transition={{ duration:4 }}            
            >
            </motion.div>
            <Container>
                <div className="row">
                    <div className="col-md-4 z-2">
                        <h2 className="text-start text-capitalize fw-bold">Anda bisa menghubungi nomor di bawah ini</h2>
                        <div className="d-flex">
                            <h5 className="text-capitalize fw-semibold text-nowrap">call us:</h5>
                            <a href="https://wa.me/6281330087125" className="mx-2 text-decoration-none h5">081330087125</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TrainSection;

