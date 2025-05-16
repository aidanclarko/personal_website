import { Link } from "react-router-dom";
import navBackground from "../assets/stars.jpg";
import linkedIn from "../assets/linkedin.webp";
import gitHub from "../assets/git.png";

import {Suspense} from 'react'
import MyHeaders from '../../public/myHead/MyHeaders';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const navLinks = [
    {id: 1, path: "/projects", label: "Projects"},
    {id: 2, path: "/resume", label: "Resume"},
];


export default function Navigation() {
    return (
        <header className='font-stretch-100% font-bold w-full h-30 flex items-center justify-between sticky top-0 drop-shadow-2xl border-b-2 border-green-600'
             style={{backgroundImage: `url(${navBackground})`}}
            >
            <NavLinks/>
                
        </header>
    );
}

function NavLinks() {
    return(
        <div className="flex sm:flex-row w-full items-center justify-start">
            <WebTitle/>
            <Pages/>
            <Socials/>
        </div>

    );
}

function WebTitle(){
    return(
        <>
            <Link to='/' className=' ml-15 mr-8 sm:ml-10 sm:mr-20'>
                    <h1 className='text-white 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl hidden md:block'> Aidan Clark </h1>
                    <div className="w-25 md:hidden">
                        <Model/>
                    </div>
            </Link>
        </>

    );
}

function Pages(){
    return(
        <>
            <ul className='flex flex-col sm:flex-row sm:text-xl m:text-2xl lg:text-3xl'>
                    {navLinks.map((link => (
                                <Link className='text-white rounded-xl hover:scale-105 hover:bg-gray-900 hover:text-lime-600 px-3 transition m-0 sm:m-1 ' key={link.id} to={link.path}>
                                    {link.label}
                                </Link>
                            
                    )))}
            </ul>
        </>
    );
}

function Socials(){
    return(
        <div className='flex items-center gap-1 sm:gap-2 ml-auto mr-15'>
            <a className='hover:h-18'href='https://linkedin.com'>
                <img className='h-16 w-15'src={linkedIn}/>
            </a>

            <a className='hover:h-13'href='https://github.com'>
                <img className ='h-10 w-10'src={gitHub}/>
            </a> 
        </div>
    );
}

function Model() {
    return( 
        <Canvas camera={{position:[0,5,2], fov:50}}
            gl={{powerPreference:"high-performance", antialias: false}}
            style={{width:'100px', height: '100px'}}
        >
            <ambientLight intensity={.6}/>
            <Suspense fallback={null}>
                <MyHeaders/>
            </Suspense>
            <OrbitControls 
                enableZoom={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
}