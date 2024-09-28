import Image from "next/image";
import Link from "next/link";

import Project from "./components/Project.jsx";
import Circle from "./components/Circle.jsx"

export default function Home() {
	const onToggleSchemeMode = () => {
		
	}

	return (
		<>
			<nav className='flex justify-center md:justify-between align-middle fixed w-full h-16 backdrop-blur-md left-0 top-0 border-b border-b-[rgba(var(--border-rgba))] z-10'>
				<div className='flex items-center justify-start pl-5'>
					<span className='font-bold hidden md:block text-[rgb(var(--foreground-rgb))]'>Tal Figenblat</span>
				</div>

				<div className='flex items-center justify-end pr-5 gap-6'>
                                        <Image src='moon.svg' width='30' height='30' alt="Toggle Scheme Mode"/>
					<a href="https://www.linkedin.com/in/talfig" className='bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--background-rgb))] rounded-md px-3 py-1'>
						LinkedIn
					</a>

					<a href="mailto:talfig@gmail.com" className='bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--background-rgb))] rounded-md px-3 py-1'>
						Email
					</a>
				</div>
			</nav>

			<h2 className='text-center mt-36 text-3xl font-extrabold text-[rgb(var(--foreground-rgb))]'>Tal Figenblat</h2>
			<h3 className='text-center mt-1 text-1xl font-light text-[rgb(var(--foreground-rgb))] opacity-75'>
				Software Developer
			</h3>

			<div className='flex flex-col gap-7 items-center justify-start mt-7 relative'>
				<Circle x='0' y='-290' radius='700' from='rgba(255, 0, 0, 0.2)' to='rgba(0, 0, 0, 0)'/>
				<Project name="Quantum Fourier Transform" time="25th of July - 17th of November" description="Collaborated with google to develop a discrete quantum fourier transform"/>
				<Project name="Sign Language" time="27th of July - 29th of July" description="Utilized convultional neural networks to construct a sign language classifier, such that it is able to provide real-time application..."/>
			</div>
		</>
	);
}