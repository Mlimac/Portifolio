import React, { useRef, useEffect, useState } from "react";
import "../About/styles.css";
import Header from "../../components/Header/Header";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import javascript from "../../assets/js.png";
import reactImg from "../../assets/react.png";
import figma from "../../assets/figma.png";
import mysql from "../../assets/mysql.png";
import php from "../../assets/php.png";
import java from "../../assets/java.png";

function About() {
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const [titleVisible, setTitleVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
    const observer = new window.IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.target === titleRef.current && entry.isIntersecting && !titleVisible) {
                    setTitleVisible(true);
                }
                if (entry.target === textRef.current && entry.isIntersecting && !textVisible) {
                    setTextVisible(true);
                }
            });
        },
        { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
        if (titleRef.current) observer.unobserve(titleRef.current);
        if (textRef.current) observer.unobserve(textRef.current);
    };
}, [titleVisible, textVisible]);

    return (
        <section id="sobre">
            <Header />
            <div className="about-container">
                <div
                    className={`about-title${titleVisible ? " text-reveal" : ""}`}
                    ref={titleRef}
                >
                    <h2>Seja bem vindo!</h2>
                    <div className="about-links">
                        <a className="linkedin" href="https://www.linkedin.com/in/murilo-lima-bb39b022b/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a className="github" href="https://github.com/Mlimac" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div
                    className={`about-text${textVisible ? " text-reveal" : ""}`}
                    ref={textRef}
                >
                    <p>
                        Sou engenheiro de software com experiência em desenvolvimento web, mobile e backend. Trabalho com foco em entregar soluções.
                        Atuo como freelancer em projetos de diferentes tamanhos, desde landing pages e aplicativos simples até sistemas completos com integração de APIs, bancos de dados e automações. Domino linguagens como JavaScript, Python, C, além de frameworks como React e Node.js.
                    </p>
                </div>
                <div className="tecnologias">
                    <div className="tecnologias-container">
                        <ul>
                            <li className="tecnologia">
                                <img src={html} alt="HTML" />
                            </li>
                            <li className="tecnologia">
                                <img src={css} alt="CSS" />
                            </li>
                            <li className="tecnologia">
                                <img src={javascript} alt="JavaScript" />
                            </li>
                            <li className="tecnologia">
                                <img src={reactImg} alt="React" />
                            </li>
                            <li className="tecnologia">
                                <img src={figma} alt="Figma" />
                            </li>
                            <li className="tecnologia">
                                <img src={mysql} alt="MySQL" />
                            </li>
                            <li className="tecnologia">
                                <img src={php} alt="PHP" />
                            </li>
                            <li className="tecnologia">
                                <img src={java} alt="Java" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;