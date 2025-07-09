import { Header } from "./Header"
import { Footer } from "./Footer"
import type { SphereBlock } from "../mock/types"
import { ButtonsComponent } from "./buttonsCom"
import { useState } from "react"
import { FooterButtons } from "./FooterButtons"
import { CircleNav } from "./CircleNav"
import { Years } from "./Years"
export interface  AllComponentsProps {
  response: SphereBlock[]
}
export function AllComponents({response}:AllComponentsProps) {
        const [currentIndex, setCurrentIndex] = useState(0);

        function handleNextClick () {
            setCurrentIndex((prev) => {
                return Math.min(prev + 1, response.length - 1)
            })
        }

        function handlePrevClick () {
            setCurrentIndex((prev) => {
                return Math.max(prev -1 , 0)
            })
        }
    return (
        <>
        <Header/>
        <Years
        currentIndex = {currentIndex}
        response = {response}
        />
        <CircleNav 
        currentIndex = {currentIndex}
        setCurrentIndex = {setCurrentIndex}
        response = {response}
        />
        <ButtonsComponent 
        response = {response}
        onNext = {handleNextClick}
        onPrev = {handlePrevClick}
        currentPeriod = {currentIndex + 1}
        />
        <Footer 
        response = {response}
        currentIndex = {currentIndex}
        onNext={handleNextClick}
        onPrev={handlePrevClick}
        />
        <FooterButtons
        onNext = {handleNextClick}
        onPrev = {handlePrevClick}
        />
        
        </>
    )
}