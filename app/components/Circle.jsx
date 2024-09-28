export default function Circle({x, y, radius, from, to}) {
    return (
        <div className={`absolute rounded-full -z-10`} style={{background: `radial-gradient(circle, ${from}, ${to} 50%)`, marginLeft: x + 'px', marginTop: y + 'px', width: radius + 'px', height: radius + 'px'}}>

        </div>
    );
};