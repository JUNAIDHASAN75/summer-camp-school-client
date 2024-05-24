// import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import ClassCards from "./ClassCards";
import { motion } from "framer-motion"


const PopularClasses = () => {
    
    const [popular] = useClasses();
    const filterClass = popular.filter(item=>item.status === 'approved')
    // console.log(popular)
    return (
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Your content goes here */}
      <SectionTitle heading={"Popular Classes"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10 my-12">
                {
                    filterClass.map(classes =><ClassCards
                    key={classes._id}
                    classes={classes}
                    ></ClassCards>)
                }
            </div>
    </motion.div>
    );
};
            

export default PopularClasses;