import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.css'

const News = (props) => {

    const {
        image,
        text
    } = props

    return (
        <motion.div className={styles.flex}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        >
            <p>{text}</p>
            <div className={styles.image}>
                <img src={image} alt=""/>
            </div>
        </motion.div>
    );
};

export default News;