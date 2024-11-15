import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/about-pic-1.jpg"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Tools from "@/components/Tools";
import Certificate from "@/components/Certificate";
/* eslint-disable */

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)
    
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [ springValue, value ])

    return <span ref={ref}></span>

}

const about = () => {
    return (
        <>
            <Head>
                <title>Toan's Portfolio | About Page</title>
                <meta name="description" content="any descpription" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text={"ĐAM MÊ & KỶ LUẬT"} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 " />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 md:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start text-justify xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Giới thiệu</h2>
                            <p className=" my-4 font-medium">
                                Chào bạn, rất vui vì bạn đã ghé thăm trang giới thiệu thông tin về bản thân tôi. Tên đầy đủ của tôi là Lê Văn Toàn, sinh năm 2000, hiện tại đang sống và làm việc ở Thành phố Biên Hòa.
                            </p>
                            <p className=" my-4 font-medium">
                                 Tôi đã tốt nghiệp vào tháng 10/2024 tại Trường Đại học Công Nghiệp Thành phố Hồ Chí Minh (IUH)
                                 với chuyên ngành Kỹ thuật phần mềm, một ngành khá HOT cho đến hiện tại. Có lẽ bạn sẽ khá ngạc nhiên rằng 
                                 tại sao một Sinh viên ngành Kỹ thuật như tôi sau khi ra trường không làm những công việc liên quan đến chuyên ngành mà lại dấn thân vào ngành Sự kiện này. 
                                 Thực ra đó cũng là cái duyên với nghề, một người bạn, cũng đóng vai trò như một người thầy đã dẫn dắt, hướng dẫn tôi từ những năm cấp 3, hồi đó tôi làm các công việc 
                                 đơn giản thôi, như đi phụ ảo thuật, làm chú hề bong bóng, làm trang trí sinh nhật, sự kiện,... Và đó là cách mà tôi bước chân vào với nghề. <br />
                                 
                                 Tôi yêu thích sự mới mẻ, tự do, linh hoạt đi kèm với sự nguyên tắc trong cách làm việc, và tôi nhận thấy những yếu tố này đều có trong ngành Sự kiện sau những dự án đã triển khai.

                            </p>
                            <p className=" my-4 font-medium">
                                Để hiểu rõ hơn về tôi, mời các bạn cùng xem thêm những dự án mà tôi đã tham gia, những kỹ năng mà tôi đã tiếp thu học hỏi sau từng ngày nha  ^^
                            </p>                 
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:order-1 ">
                           
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
                            " />
                            <Image 
                                src={profilePic} 
                                alt="CodeBucks" 
                                className="w-full h-auto rounded-2xl" 
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:!text-6xl sm:!text-5xl xs:!text-4xl">
                                    <AnimatedNumbers value={200} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Khách hàng</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:!text-6xl sm:!text-5xl xs:!text-4xl">
                                <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Dự án</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:!text-6xl sm:!text-5xl xs:!text-4xl">
                                <AnimatedNumbers value={6} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Năm kinh nghiệm</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Tools />
                    <Experience />
                    <Education />
                    <Certificate />
                </Layout>
            </main>
        </>
    )
}

export default about