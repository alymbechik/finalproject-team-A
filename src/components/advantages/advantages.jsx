import React from 'react';
import styles from './style.module.css'
import { motion } from 'framer-motion';

const Advantages = (props) => {

    const {
        icon,
        title
    } = props

    return (
        <motion.div className={styles.advantages}
        initial={{ opacity: 0, x: -150}}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: 0}}
        transition={{ duration: 2 }}
        >
            <div className={styles.circle}>
                <img src={icon} alt=""/>
            </div>
            <h3 className={styles.title}>
                {title}
            </h3>
        </motion.div>
    );
};

export default Advantages;