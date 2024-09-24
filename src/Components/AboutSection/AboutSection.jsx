import React from "react";
import { motion } from "framer-motion";
import Aboutimg from "../../Assets/Images/cake-7190829_1280.jpg"

function AboutSection () {
    return (
        <div className="bg-black text-light py-4 py-sm-5" id="about">
            <div className="container">
                <div className="flex-column-reverse flex-lg-row row">
                    <motion.div 
                      className="col-lg-6 d-flex justify-content-center"
                      initial={{ opacity:0, x:-300 }}
                      whileInView={{ opacity:1, x:0 }}
                      transition={{ duration: 1}}
                      >
                        <img className="img-fluid w-75 mt-4 mt-lg-0" src={Aboutimg} alt="about us img" />
                    </motion.div>
                    <motion.div
                     className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center"
                     initial={{ opacity:0, x: 350 }}
                     whileInView={{ opacity:1, x:0 }}
                     transition={{ duration: 1}}
                    >
                     <h2 className="section-title text-capitalize fw-bold ">
                        About <span className="text-purple">us</span>
                     </h2>
                     <p>
                        Kami selalu membuat setiap cookies di dapur kami dengan kebersihan yang kami jaga di setiap pembuatan dan hanya menggunakan bahan baku dengan kwalitas terbaik
                     </p>
                     <p>
                        Oleh karena itu kwalitas rasa produk kami selalu terjaga, dan selalu baru karena hanya di buat saat anda telah memesan
                     </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;