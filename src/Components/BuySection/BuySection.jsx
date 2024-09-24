import React from "react";
import { motion } from "framer-motion";
import BuySectionItems from "../../Assets/BuySectionItems.js";
import BuyCard from "./BuyCard";

function BuySection() {
    return(
        <div className="bg-black text-light py-4 py-sm-5" id="plans">
        <div className="container">
            <motion.h2 
            className="text-center section-title fw-bold text-capitalize mb-4 mb-sm-5"
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            transition={{ duration:2 }}
            >
            Our <span className="text-purple">Cookies</span>
            </motion.h2>
               <div className="row g-4">
                {
                    BuySectionItems.map((item) => <BuyCard key = {item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} />)
                }
               </div>
            </div>
        </div>
    )
}

export default BuySection;