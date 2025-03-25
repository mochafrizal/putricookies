import React from "react";
import "./JoinSection.css"
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import PurpleBtn from "../PurpleBtn/PurpleBtn";

function JoinSection() {
    return (
        <div className="join-section py-5 text-light">
            <Container className="h-100">
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">

                    <motion.h3
                        className="text-start w-75 fw-bolder text-black"
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p>
                            🍰 <strong>Kastengel dengan Rasa Keju Terbaik!</strong>
                            <br />Gurih, renyah, dan penuh cita rasa keju premium yang lumer di mulut. Sekali coba, pasti ketagihan!
                        </p>
                        <p>
                            🌿 <strong>Nastar dengan Isian Selai Nanas Homemade!</strong>
                            <br />Manis, lembut, dan isian selai nanas yang kami olah sendiri dari buah segar. Setiap gigitan menghadirkan kehangatan dan kenikmatan sejati!
                        </p>
                        <p>
                            🥩 <strong>Pastel dengan Isian Abon Sapi Asli</strong>
                            <br />Kulit renyah, isi melimpah! Abon sapi berkualitas tinggi yang gurih dan nikmat, bikin nggak bisa berhenti ngemil!
                        </p>
                    </motion.h3>
                    <br />
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <PurpleBtn btnTitle="order now" />
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}
export default JoinSection