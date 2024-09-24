import React from "react";
import Card from "react-bootstrap/Card"
import PurpleBtn from "../PurpleBtn/PurpleBtn"
import { motion } from "framer-motion";

function BuyCard (props) {
  return (
    <motion.div 
            className="col-lg-4"
            initial={{ opacity:0, y:100 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:1 }}
            whileHover={{ scale: 1.1 }}
        >
    <div className="">
      <Card className="shadow h-100 overflow-hidden">
        <Card.Img className="img-hover" variant="top" src={props.itemImage} />
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="text-center text-uppercase fw-bold">
              {props.itemTitle}
            </Card.Title>
            <Card.Text className="text-start">{props.itemDescription}</Card.Text>
            <PurpleBtn className="item-center" btnTitle ="order now" />
          </Card.Body>
      </Card>
    </div>
  </motion.div>
  )
}

export default BuyCard;