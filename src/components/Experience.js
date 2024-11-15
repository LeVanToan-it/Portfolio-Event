import React, { useRef } from "react";
import {useScroll, motion} from 'framer-motion'
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
                target="_blank"
                className="text-primary dark:text-primaryDark capitalize "
                >@{company}</a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]" />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                    position={"Sales & Executive"} company={""}
                    companyLink={""}
                    time={"8/2017 - 4/2024"} address={"Thành phố Biên Hòa, Đồng Nai"}
                    work={`Tư vấn, hỗ trợ khách hàng, cung cấp sản phẩm dịch vụ.
                            Lên kế hoạch cho truyên thông, kế hoạch phát triển cho các sự kiện thường niên, sự kiện
                            của các công ty,...
                            Quản lý và lập kế hoạch vận hành chi tiết cho các sự kiện.
                            Theo dõi quá trình chạy sự kiện.
                            Xác định số lượng nhân sự và ngân sách phù hợp để duy trì tính hiệu quả của các sự kiện,
                            chương trình.
                            Quản trị, chạy quảng cáo fanpage.
                            Thực hiện thi công.`}
                />
                    <Details 
                        position={"Software Developer"} company={"Digitech Solution"}
                        companyLink={"https://vndigitech.com/"}
                        time={"5/2022 - 6/2023"} address={"Tòa nhà SBI, Lô 6B, ĐS 03, CVPM Quang Trung, P.Tân Chánh Hiệp, Q 12, TP.HCM"}
                        work={`Làm việc trong một đội ngũ chịu trách nhiệm phát triển các chức năng mới cho dự án thực tế của Công ty. 
                            Thiết kế UI dựa trên Blazor web framework và viết code bằng ASP.NET.
                            Bên cạnh đó, tôi tự tìm hiểu và thực hành xây dựng API bằng NestJS. 
                            Làm việc với ngân ngữ lập trình Javascript/Typescript kết hợp với cơ sở dữ liệu PostgreSQL.
                            Làm việc nhóm theo quy trình Agile-scrum và kế hoạch cụ thể.`}
                    />
                    <Details 
                        position={"Freelancer"} company={""}
                        companyLink={""}
                        time={"3/2023 - 3/2024"} address={""}
                        work={`Xây dựng Fanpage, lập chiến lược chạy quảng cáo. Trao đổi để hiểu nhu cầu khách hàng, phân tích doanh nghiệp,
                             cung cấp các giải pháp và đàm phán ngân sách liên quan đến công việc Lập trình
                             và Tổ chức sự kiện`}
                    />
                    <Details 
                        position={"Account Executive & Project Manager"} company={"Maison Wedding & Events"}
                        companyLink={"https://www.facebook.com/maisonweddingnevent"}
                        time={"4/2024 - 11/2024"} address={""}
                        work={`Lập kế hoạch, xây dựng Proposal cho các sự kiện, dịch vụ theo yêu cầu của khách hàng
                            . Tìm kiếm khách hàng thông qua việc đăng bài viết trên facebook, Tiktok, Zalo,...
                            Nhận brief thông tin từ khách hàng, lên kế hoạch, Proposal, bảng chào giá chi tiết để chào
                            khách hàng.
                            Quản lý, điều phối, theo dõi tiến độ dự án để đáp ứng được yêu cầu của Client.
                            Gặp gỡ khách hàng để trao đổi về nhu cầu.
                            Làm việc với các bộ phận Creative, Project, team sản xuất nội bộ... để đưa ra từng chiến dịch
                            phù hợp với yêu cầu và ngân sách của từng khách hàng.
                            Thuyết trình về ý tưởng của chiến dịch và chi phí cho từng tệp khách hàng.
                            Đàm phán với khách hàng, giải quyết những rắc rối phát sinh hoàn thành đúng thời hạn.
                            Kiểm tra và báo cáo tiến độ của dự án.
                            Kiểm soát ngân sách và lập hóa đơn cho khách hàng.
                            Lập bảng kê và update số liệu hàng tuần/ tháng/ quý cho nội bộ.
                            Thống kê doanh thu và đảm bảo lợi nhuận.`}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience