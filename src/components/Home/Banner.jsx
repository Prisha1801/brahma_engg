import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import banner from "../../assets/posters/banner.png";

function Banner() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
        >
            <img src={banner} alt="Banner" className="w-full" />
        </motion.div>
    );
}

export default Banner;