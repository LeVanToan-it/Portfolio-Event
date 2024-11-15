import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkIcon } from "@/components/Icon";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import project2 from "../../public/images/projects/mikenco.jpg"
import project3 from "../../public/images/projects/nhat-tin.jpg"
import project4 from "../../public/images/projects/birthday-pokemon.jpg"
import project5 from "../../public/images/projects/abc-center.jpg"
import project6 from "../../public/images/projects/viet-duc-vgu.jpg"
import project7 from "../../public/images/projects/hoan-my.jpg"
import project8 from "../../public/images/projects/eros.jpg"
import project9 from "../../public/images/projects/dhqg.jpg"
import project10 from "../../public/images/projects/suzuki.jpg"
import project11 from "../../public/images/projects/dung-thu.jpg"
import project12 from "../../public/images/projects/nhi-long.jpg"
import project13 from "../../public/images/projects/manwell.jpg"
import { motion } from "framer-motion";
/* eslint-disable */

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, sumary, img, link, github}) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
            rounded-br-3xl dark:bg-light 
            " />
            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark dark:text-primaryDark xs:text-base">
                    {type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{sumary}</p>
                <div className="mt-2 flex items-center">
                <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
                <Link href={link} target="_blank"
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark
                sm:px-4 sm:text-base
                "
                >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            " />
            <Link href={link} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lh md:text-base">
                    {type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} 
                        target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                        >Visit </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <LinkIcon /> </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Toan's Portfolio | Projects Page</title>
                <meta name="description" content="any descpription" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Các Dự Án Đã Thực Hiện"
                    className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        
{/**                       <div className="col-span-12">
                            <FeaturedProject 
                                title={"Crypto Screener Application"}
                                img={project1}
                                sumary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency.`}
                                link={"/"}
                                github={"/"}
                                type={"Featured Project"}
                            />
                        </div>
*/} 
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Grand Openning Mikenko Store - Chi nhánh HCM"}
                                img={project2}
                                sumary={`Re-Openning Mikenco Hồ Chí Minh - T11/2023`}
                                link={"https://www.facebook.com/maisonmikenco/posts/pfbid02HrnERDbCaJQxi2bQkcSMq93Mx622UB98AXNWNHXrAEBBscTosYq4wiWk5TQj5kfFl?__cft__[0]=AZWFTYY9HIid-urtRoXPA5xkK3BNkrpltOUpAkzGgcqrtor7wZJYbYB_UOHnoLbuulh3S4TxG8-Acu_-eSQ302U-bMFRectsBTse1psFOXwJXpN82xDEbZ6GnNQ7LkjF6bO_5VWk-xRREsfl_qaHceV91Sryjagbbp8tCTFUsKuMvg&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/maisonmikenco/posts/pfbid02HrnERDbCaJQxi2bQkcSMq93Mx622UB98AXNWNHXrAEBBscTosYq4wiWk5TQj5kfFl?__cft__[0]=AZWFTYY9HIid-urtRoXPA5xkK3BNkrpltOUpAkzGgcqrtor7wZJYbYB_UOHnoLbuulh3S4TxG8-Acu_-eSQ302U-bMFRectsBTse1psFOXwJXpN82xDEbZ6GnNQ7LkjF6bO_5VWk-xRREsfl_qaHceV91Sryjagbbp8tCTFUsKuMvg&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"YEP Nhất Tín Logistic 2024"}
                                img={project3}
                                sumary={`YEP Công ty Nhất Tín Logistic 2024`}
                                link={"https://www.facebook.com/sweetdecorevent/posts/pfbid0H8xGqanabuuUoKY9iBa3RnYEsHBfZTnBjcG3yfZH44Cb44F5ThjeDg59PzTjAxgSl?__cft__[0]=AZUM85gRj2kMjXoCpzyKgFFuLYj92mCRolVsrt8yBAzZL4KKisPrONS1uMUQpcJRB8pwnO3f2_wTpO06o3TKT1npwkc_uwpqpNAp6KODqOCn4d8hCo4wmHUH2aJyXt6MYrQaEOXkkcIxAqmzX6mQlWM6hYKmwflfWpd4NEz1rytZig&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/sweetdecorevent/posts/pfbid0H8xGqanabuuUoKY9iBa3RnYEsHBfZTnBjcG3yfZH44Cb44F5ThjeDg59PzTjAxgSl?__cft__[0]=AZUM85gRj2kMjXoCpzyKgFFuLYj92mCRolVsrt8yBAzZL4KKisPrONS1uMUQpcJRB8pwnO3f2_wTpO06o3TKT1npwkc_uwpqpNAp6KODqOCn4d8hCo4wmHUH2aJyXt6MYrQaEOXkkcIxAqmzX6mQlWM6hYKmwflfWpd4NEz1rytZig&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>
                        
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"YEP Suzuki 2024 - Claris Palace"}
                                img={project10}
                                sumary={`YEP Suzuki 2024 - Claris Palace`}
                                link={"https://www.facebook.com/sweetdecorevent/posts/pfbid0rSfMtNYBc1qQSmmkgbPQ2KydhQEKjAV11KpE4jVGv8NXg2tJiMFNjAX5iAyk28d3l?__cft__[0]=AZWyGPs60yvjL2E2p98K9SKsORyRDq7iDalPqwB2AFkP-Z97DSdu-9mY_rHjL8oDMXujWArYN_syyspHnuGj_QFrytCE1_WAvQ5NrWevuTQrOUppIP9KGF7GclRsGMq4xN93riqnDsZIEV7KZstoB3btRtQtXSMonMCCuqOzIv-QAo7GfILsfd8VMTpPhvaYGOI&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/sweetdecorevent/posts/pfbid0rSfMtNYBc1qQSmmkgbPQ2KydhQEKjAV11KpE4jVGv8NXg2tJiMFNjAX5iAyk28d3l?__cft__[0]=AZWyGPs60yvjL2E2p98K9SKsORyRDq7iDalPqwB2AFkP-Z97DSdu-9mY_rHjL8oDMXujWArYN_syyspHnuGj_QFrytCE1_WAvQ5NrWevuTQrOUppIP9KGF7GclRsGMq4xN93riqnDsZIEV7KZstoB3btRtQtXSMonMCCuqOzIv-QAo7GfILsfd8VMTpPhvaYGOI&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Sinh Nhật Concept Pokemon"}
                                img={project4}
                                sumary={`Sinh nhật bé Ethan - Khang Nguyễn - Concept Pokemon`}
                                link={"https://www.facebook.com/lvtoan.it/posts/pfbid02zufpwaZqxir1DwscyLpsyRc4nHxGGhmvJHaL2uMBhu3nzjNSzWFpmp21FXVfQFtQl?__cft__[0]=AZUzVyFKf1-RFG3uSBLVy5qAllAjStyb_gobQKfWPRj1xDjcIP8eqhdqbpbZIIA2Qp_SizN2mYq40mmSFeEUGkwqP-T1JqBftoo0p1tFCIhnvIOJFVZao1xWN5YPjPhl30qV1d0ugW9PYc4nrnBxVnpuGi9nqMTVvCpirf9iQT3ib43IFk4wGBtGN7-uA8wmfQA&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/lvtoan.it/posts/pfbid02zufpwaZqxir1DwscyLpsyRc4nHxGGhmvJHaL2uMBhu3nzjNSzWFpmp21FXVfQFtQl?__cft__[0]=AZUzVyFKf1-RFG3uSBLVy5qAllAjStyb_gobQKfWPRj1xDjcIP8eqhdqbpbZIIA2Qp_SizN2mYq40mmSFeEUGkwqP-T1JqBftoo0p1tFCIhnvIOJFVZao1xWN5YPjPhl30qV1d0ugW9PYc4nrnBxVnpuGi9nqMTVvCpirf9iQT3ib43IFk4wGBtGN7-uA8wmfQA&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Trung Thu - ABC Language Center - Biên Hòa "}
                                img={project5}
                                sumary={`Trung Thu - ABC Language Center - Biên Hòa`}
                                link={"https://www.facebook.com/lvtoan.it/posts/pfbid0PKbmQNyZD7QJQtLYS5bRAtFR68sBQrx3bVBfBadvff7VvtYErCCibrF7eWyZ7C8Gl?__cft__[0]=AZW7jdgakMLTbXvtt--9WbWw_kvwaBT8wNu5ZESxg8cUZt314V4yIuOZSW55WCpW9SmVKp1YqAEX1VKak6pTNlUoJC1bvrdQtoVqYfeEZh22SCTasTpDA24z7AZCpSM_46_1xHkb2d3orEwTdkUIsUZQWhwypATjb45URugVpjIVjSOizAcRZOn66V1Q6rizMxk&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/lvtoan.it/posts/pfbid0PKbmQNyZD7QJQtLYS5bRAtFR68sBQrx3bVBfBadvff7VvtYErCCibrF7eWyZ7C8Gl?__cft__[0]=AZW7jdgakMLTbXvtt--9WbWw_kvwaBT8wNu5ZESxg8cUZt314V4yIuOZSW55WCpW9SmVKp1YqAEX1VKak6pTNlUoJC1bvrdQtoVqYfeEZh22SCTasTpDA24z7AZCpSM_46_1xHkb2d3orEwTdkUIsUZQWhwypATjb45URugVpjIVjSOizAcRZOn66V1Q6rizMxk&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Graduation Ceremony - ĐH Việt Đức VGU"}
                                img={project6}
                                sumary={`Graduation Ceremony - ĐH Việt Đức VGU - Bình Dương`}
                                link={"https://www.facebook.com/lvtoan.it/posts/pfbid02Mhne74kzJsVxaKEmXcvkFKroByZ3se9fCgsvMKTtPT2B7jgZHGD64fauKioDioGql?__cft__[0]=AZXZ-SJOzLwqp_Erg39P07Yyke5dy3JDMp3ndzw6Y7jONeYuiSDN22pDnC7DSBwWSLim1E9cciXkr5K9RXEr_XDTemQw1G__1sqnI6NJj_WG_uqQSMk5Q6znqwq4ELWn-vvq3OC9JS2IGr4XChOh8D8bRGqfqW7wFXPjIqc3mi5Ib-UJzS7pomRXJQl3BSbTOrc&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/lvtoan.it/posts/pfbid02Mhne74kzJsVxaKEmXcvkFKroByZ3se9fCgsvMKTtPT2B7jgZHGD64fauKioDioGql?__cft__[0]=AZXZ-SJOzLwqp_Erg39P07Yyke5dy3JDMp3ndzw6Y7jONeYuiSDN22pDnC7DSBwWSLim1E9cciXkr5K9RXEr_XDTemQw1G__1sqnI6NJj_WG_uqQSMk5Q6znqwq4ELWn-vvq3OC9JS2IGr4XChOh8D8bRGqfqW7wFXPjIqc3mi5Ib-UJzS7pomRXJQl3BSbTOrc&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Tiểu Cảnh Tết - Bện Viện Hoàn Mỹ"}
                                img={project7}
                                sumary={`Tiểu Cảnh Tết - Bện Viện Hoàn Mỹ`}
                                link={"https://www.facebook.com/sweetdecorevent/posts/pfbid0SMyTCTEUgkpitD4tCnTK5W3cZ85FbSsqW8RrK3tuKMJ8g6PSEXfs4ewHY9iL79rBl?__cft__[0]=AZVWF3olHaS35GVQGnJcwMnUDVsOsrV3qU86aT630KWi7JeeVrk1YwcIbXI9jcMWIljeYEkwlbet9jnznue6P02jh7Fom0rqjTTSYcqNJ_z5xgaCe2AzupRIy0mG1OsJvlSPvXEkkcTP0Ku7yzaxXYaN4h_sQmyc78RwGoxV6aQZo-_KOBVm_JnbkVXKg-PJwZw&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/sweetdecorevent/posts/pfbid0SMyTCTEUgkpitD4tCnTK5W3cZ85FbSsqW8RrK3tuKMJ8g6PSEXfs4ewHY9iL79rBl?__cft__[0]=AZVWF3olHaS35GVQGnJcwMnUDVsOsrV3qU86aT630KWi7JeeVrk1YwcIbXI9jcMWIljeYEkwlbet9jnznue6P02jh7Fom0rqjTTSYcqNJ_z5xgaCe2AzupRIy0mG1OsJvlSPvXEkkcTP0Ku7yzaxXYaN4h_sQmyc78RwGoxV6aQZo-_KOBVm_JnbkVXKg-PJwZw&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>
                        
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Cổng Hoa Thạch Thảo - Eros Palace Luxury"}
                                img={project8}
                                sumary={`Cổng Hoa Thạch Thảo - Eros Palace Luxury`}
                                link={"https://www.facebook.com/lvtoan.it/posts/pfbid0UhBCYbEZrBHL7vdsRBX6rEfL3RzrsUJiPGWzEfB2wqPbiors91ZHVuY82KUzBLvhl?__cft__[0]=AZWHisc2uPj_Mx14zkbShvS6b2BAbBXYnyx1c8vi0w2BQc9-MAYwAmcVhNHr3c_kNw1EiofYqKVF64teqT1dO8zDKUawE0KeRuVz-92GV9-6Gw7nBOt3ET7ZlsLqbYKuBji1A0vIPWzvea3VOoppRrjFAyAaIMYwmc7MOEBmy1wsbXX4OBjalNb6xL6g-62YI40&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/lvtoan.it/posts/pfbid0UhBCYbEZrBHL7vdsRBX6rEfL3RzrsUJiPGWzEfB2wqPbiors91ZHVuY82KUzBLvhl?__cft__[0]=AZWHisc2uPj_Mx14zkbShvS6b2BAbBXYnyx1c8vi0w2BQc9-MAYwAmcVhNHr3c_kNw1EiofYqKVF64teqT1dO8zDKUawE0KeRuVz-92GV9-6Gw7nBOt3ET7ZlsLqbYKuBji1A0vIPWzvea3VOoppRrjFAyAaIMYwmc7MOEBmy1wsbXX4OBjalNb6xL6g-62YI40&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Sự Kiện 20/11 - Đại Học Quốc Gia Thành Phố Hồ Chí Minh"}
                                img={project9}
                                sumary={`Sự Kiện 20/11 - Đại Học Quốc Gia Thành Phố Hồ Chí Minh`}
                                link={"https://www.facebook.com/sweetdecorevent/posts/pfbid0xqebGqNbGx7dUBkZWfc3sUA21bKDAhScm5bK3rdHHAs7otZkL3cyhCqWRCjGAKjVl?__cft__[0]=AZXTXIKehX2iruAZIpYIphpPhFd24dndHptjikzgyfJc_I1rWn8baXLP7srbhdMpTKz9QkriZiNLlRwhBlKLYVH-G9XFlfoA9htxwIZSHR0RgHt-Oz23ysyVYt7lESCR6S5dpHzpeWIOuJTUGYZkLTNN_IE1gynSveBbx6IMyxceAMAlynC7ltYL5vE33Ynppqc&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/sweetdecorevent/posts/pfbid0xqebGqNbGx7dUBkZWfc3sUA21bKDAhScm5bK3rdHHAs7otZkL3cyhCqWRCjGAKjVl?__cft__[0]=AZXTXIKehX2iruAZIpYIphpPhFd24dndHptjikzgyfJc_I1rWn8baXLP7srbhdMpTKz9QkriZiNLlRwhBlKLYVH-G9XFlfoA9htxwIZSHR0RgHt-Oz23ysyVYt7lESCR6S5dpHzpeWIOuJTUGYZkLTNN_IE1gynSveBbx6IMyxceAMAlynC7ltYL5vE33Ynppqc&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Trang Trí Gia Tiên - Lễ Tân Hôn - Dũng & Thu"}
                                img={project11}
                                sumary={`Lễ Tân Hôn - Dũng & Thu`}
                                link={"https://www.facebook.com/lvtoan.it/posts/pfbid0t9wAHqERL7s8YxLhYjg2aQWPRwivdi5N2hRxTYK72Hq69oqrUgqMnTv17pPxX8nCl?__cft__[0]=AZU7flQX4HVD9RDP8jnPJHwvMAbUPauwJSD6gTxwAIcDBdC3qVBQ7a8ImNV4DVCkQ832zEh-JSrSmxORmvcMDzR7QFTTWJ7zJecLHk8FbZgoi33iQBE1TXvhr463omklCQWEawcZ6Ud7SrS23rlmJWklW7G_ZX8ztTghxnXkr17ux_1n3AMDGX0dIO23wFTMoEA&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/lvtoan.it/posts/pfbid0t9wAHqERL7s8YxLhYjg2aQWPRwivdi5N2hRxTYK72Hq69oqrUgqMnTv17pPxX8nCl?__cft__[0]=AZU7flQX4HVD9RDP8jnPJHwvMAbUPauwJSD6gTxwAIcDBdC3qVBQ7a8ImNV4DVCkQ832zEh-JSrSmxORmvcMDzR7QFTTWJ7zJecLHk8FbZgoi33iQBE1TXvhr463omklCQWEawcZ6Ud7SrS23rlmJWklW7G_ZX8ztTghxnXkr17ux_1n3AMDGX0dIO23wFTMoEA&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Trang Trí Gia Tiên - Lễ Đính Hôn - Nhi & Long"}
                                img={project12}
                                sumary={`Trang Trí Gia Tiên - Lễ Đính Hôn - Nhi & Long`}
                                link={"https://www.facebook.com/lvtoan.it/posts/pfbid0axJNNTjCg7wwckmMeQm4V4J9sV5touQwmrZfddkfDybhyBrMKQqWECjaREtKgNREl?__cft__[0]=AZUYlIfE9zvtPiajFQ-Nfk_o60nukcBgP_Iac73qvLw8XdMh4V51ltKtlZ9UDB_UkyXDHq7h0FsOwZBIqCw2aqDgtE1YrO6YUMtDabCpTzQwY0_YdS5MkfrHZ-FP7L3ljbN8YgcbGBm8aL0BHfmrvkYh6lH04-_pOOd2uQlQc9lvwVHgU53A6BI42D5qivGkORA&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/lvtoan.it/posts/pfbid0axJNNTjCg7wwckmMeQm4V4J9sV5touQwmrZfddkfDybhyBrMKQqWECjaREtKgNREl?__cft__[0]=AZUYlIfE9zvtPiajFQ-Nfk_o60nukcBgP_Iac73qvLw8XdMh4V51ltKtlZ9UDB_UkyXDHq7h0FsOwZBIqCw2aqDgtE1YrO6YUMtDabCpTzQwY0_YdS5MkfrHZ-FP7L3ljbN8YgcbGBm8aL0BHfmrvkYh6lH04-_pOOd2uQlQc9lvwVHgU53A6BI42D5qivGkORA&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title={"Anniversary 17 Years Establish - Viện Trẻ Hóa Manwell"}
                                img={project13}
                                sumary={`Anniversary 17 Years Establish - Viện Trẻ Hóa Manwell`}
                                link={"https://www.facebook.com/sweetdecorevent/posts/pfbid0oCVZKB8W2JkygebJtabXxCiq7wxKbw4GnFN8fEBRedYB5LMXjxven2Ldr6og3UHKl?__cft__[0]=AZV-_k5wOeEDufMB43eAqpQe4F3n5LT82x4Lt_syiTUT3oDws8FXlq_5V4NacXwrGFjYJlPkOP2psgdkqsikbbR4Y9t5TcKZU-u7gwcfNVoZRaUyJ55_NCqodUa38uvntUhAqgGh8BQLqKArvbjZ3EKT2Gl-5AmlU5e5-Vf5P6Tpv8wd86cBM_FMhUHs_uWAjx4&__tn__=%2CO%2CP-R"}
                                github={"https://www.facebook.com/sweetdecorevent/posts/pfbid0oCVZKB8W2JkygebJtabXxCiq7wxKbw4GnFN8fEBRedYB5LMXjxven2Ldr6og3UHKl?__cft__[0]=AZV-_k5wOeEDufMB43eAqpQe4F3n5LT82x4Lt_syiTUT3oDws8FXlq_5V4NacXwrGFjYJlPkOP2psgdkqsikbbR4Y9t5TcKZU-u7gwcfNVoZRaUyJ55_NCqodUa38uvntUhAqgGh8BQLqKArvbjZ3EKT2Gl-5AmlU5e5-Vf5P6Tpv8wd86cBM_FMhUHs_uWAjx4&__tn__=%2CO%2CP-R"}
                                type={"Project"}
                            />
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default projects