import React from "react";
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:dark:bg-transparent
         xs:dark:text-light xs:dark:border-light xs:dark:border-2 xs:font-bold
        "
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition:{duration:1.5}}}
        transition={{duration:1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
                Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            ">
                <motion.div 
                className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                whileHover={{scale:1.05}}>
                    Event
                </motion.div>
                <Skill name={"Schedule"} x={"-25vw"} y={"2vw"} />
                <Skill name={"Sale & Consultant"} x={"-15vw"} y={"10vw"} />
                <Skill name={"MS Office"} x={"-5vw"} y={"-10vw"} />
                <Skill name={"Phottoshop"} x={"-35vw"} y={"-5vw"} />
                <Skill name={"Javascript"} x={"25vw"} y={"10vw"} />
                <Skill name={"Team work"} x={"0vw"} y={"12vw"} />
                <Skill name={"Project Manager"} x={"-20vw"} y={"-15vw"} />
                <Skill name={"Research"} x={"15vw"} y={"-12vw"} />
                <Skill name={"Canva"} x={"32vw"} y={"-5vw"} />
                <Skill name={"Self-Study"} x={"0vw"} y={"-20vw"} />
                <Skill name={"IT"} x={"-25vw"} y={"18vw"} />
                <Skill name={"Illushtrator"} x={"18vw"} y={"4vw"} />
                <Skill name={"Fanpage admin"} x={"10vw"} y={"17vw"} />
                <Skill name={"Facebook Ads"} x={"-10vw"} y={"22vw"} />
            </div>
        </>
        
    )
}

export default Skills