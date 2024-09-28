export default function Project({name, time, description}) {
    return (
        <div className='w-96 max-w-[90vw] h-36 border border-[rgba(var(--border-rgba))] rounded-md h-auto pb-4 bg-[rgb(var(--background-rgb))]'>
            <h1 className='text-lg p-4 font-bold'>{name}</h1>
            <h3 className='text-xs p-4 py-0 -mt-3 font-light opacity-75'>{time}</h3>

            <h2 className='text-sm p-4 py-0 mt-1 font-light opacity-75'>{description}</h2>
        </div>
    );
};