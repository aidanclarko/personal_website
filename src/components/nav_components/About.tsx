import React, {useState, useEffect} from 'react';
import {FaDownload} from 'react-icons/fa';
import ResumeImage from '../../assets/resume.jpg'
type TypeEffectProps = {
    word: string;
    speed: number;
    className?: string;
}

type ContainerProps = {
    title: string;
    children?: React.ReactNode;
    containerSize?: number
}

const TypeEffect = ({word, speed, className} : TypeEffectProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
            console.log("go");
        const interval = setInterval(() => {
            if(currentIndex < word.length){
                setDisplayedText((currentText) => currentText + word[currentIndex]);
                setCurrentIndex(currentIndex => currentIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
        
        
    }, [currentIndex, speed, word]);

    return <span className={className}> {displayedText} </span>
}

export default function About() {
    return (
        <div className='flex flex-col bg-gray-950 h-screen text-lime-600 font-mono'>
            <Bio/>
            <InterestingThings/>
            <Introduction/>
            
        </div>
    );
} 

function Bio() {
    return (
        <div className="flex flex-col justify-center w-full space-y-10">
            <TypeEffect
                className='sm:text-2xl md:text-4xl lg:text-6xl flex justify-center font-bold py-5 underline'
                word="Hello, Welcome to my Page!"
                speed={60}
            />
        </div>
    );
}

function Introduction() {
    const [isPressed, changePressed] = useState(false);
    return (
        <div className='flex justify-center space-x-2 py-10'>
            <button className='text-2xl font-bold hover:text-white' onClick={() => changePressed((pressed) => !pressed)}>
            {isPressed ? "" : "Click Me"}
        </button>
            {isPressed && (
                <TypeEffect
                className="sm:text-3xl text-sm sm:w-220 m:w-55 w-45 p-1 border-2"
                word="I am a senior studying computer science, ranging from interest of software engineering and data science. What I enjoy about computer science is the constant challenges that are faced and the processs of learning new things."
                speed={25}
            />
            )}
        </div>
    );
}


function InterestingThings(){
    return (
        <div className='flex flex-row justify-center py-5'>
            <BuildContainer title='Skills' containerSize={300}>
                <>
                    <p>
                        Languages:<br/>
                        C, C++, Python, Dart, Java, JavaScript, TypeScript <br/> <br/>
                        Frameworks: <br/>
                        React, Flutter <br/> <br/>
                        Operating Systems: <br/>
                        Linux(fedora), MacOS, Windows

                    </p>
                </>
            </BuildContainer>
            <BuildContainer title='Interests' containerSize={275}>
                <>
                    <p>
                        Building Softwares <br/> <br/>
                        Data Science <br/> <br/>
                        Building Computers and AV Equipment <br/> <br/>
                        Music <br/> <br/>
                    </p>
                </>
            </BuildContainer>
            <BuildContainer title='Resume' containerSize={100}>
                <div className='flex flex-row justify-center'>
                    <h1> Download </h1>
                    <a href={ResumeImage} download="aidan_clark_resume.jpg" className='px-1'> <FaDownload color='green'/> </a>
                </div>
            </BuildContainer>
        </div>
    )
}

function BuildContainer({ title, children, containerSize }: ContainerProps) {
    const [show, setShow] = useState(false);

    return (
        <div
            className={`flex flex-col justify-center mr-10 transition-all duration-150 w-75 border-2 border-green-700 rounded-2xl hover:text-amber-50`}
            style={{
                height: show ? containerSize : '64px',
                justifyContent: !show ? 'center' : 'flex-start',
                padding: '.5rem'
            }}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className="flex justify-center text-2xl font-bold text-lime-500 mb-2">{title}</div>
            {show && children}
        </div>
    );
}
