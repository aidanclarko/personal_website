import {useState, useEffect, Suspense, createContext} from 'react';
import MyHeaders from '../../../public/myHead/MyHeaders';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


interface TypeEffectProps {
    word: string;
    speed: number;
    className: string;
    wait: number;
}



//add hook 


const TypeEffect: React.FC<TypeEffectProps> = ({word, speed, wait, className}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setIsTyping(true);
            console.log("wait");
        }, wait);

        return () => clearTimeout(timeoutID);
    }, [wait]);

    useEffect(() => {
        if(isTyping){
            console.log("go");
        const interval = setInterval(() => {
            if(currentIndex < word.length){
                setDisplayedText((currentText) => currentText + word[currentIndex]);
                setCurrentIndex(currentIndex => currentIndex + 1);
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
        }
        
        
    }, [isTyping, currentIndex, speed, word]);

    return <span className={className}> {displayedText} </span>
}

export default function About() {
    return (
        <div className='flex flex-col bg-gray-950 h-screen text-lime-600 font-mono'>
            <Bio/>
        </div>
    );
} 

function Bio() {
    return (
        <div className="flex flex-col justify-center w-full">
            <TypeEffect
                className='sm:text-2xl md:text-4xl lg:text-6xl flex justify-center font-bold py-5 underline'
                word="Hello, Welcome to my Page!"
                speed={65}
                wait={1000}
            />
            <Introduction/>
        </div>
    );
}

function Introduction() {
    const [show, setShow] = useState(false);
    return (
        <div className='flex justify-center space-x-2'>
            <TypeEffect
                className="sm:text-2xl text-sm sm:w-105 m:w-55 w-45 sm:ml-25 ml-10 p-1 border-2 hover:border-gray-100"
                word="I am a junior studying computer science, ranging from interest of software engineering and data science. What I enjoy about computer science is the constant challenges that are faced and the processs of learning new things."
                speed={25}
                wait={3000}
            />
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide Details' : 'Click to Learn more about me!'}
            </button>
            {show && (
                <div>
                    <TypeEffect
                        className='sm:text-2xl text-sm sm:w-105 m:w-55 w-45 p-1'
                        word='Outside of school I do a lot of other things as well'
                        speed={25}
                        wait={500}
                    />
                </div>
            )}
        </div>
    );
}