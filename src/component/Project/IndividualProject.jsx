import "./Project.css"


export default function IndividualProject({image, title, description}){
    return (
        <div className='individual-project'> 
            <div >
                <img src={image} alt={title} className='project-image'/>    
            </div>   
            <div className='project-title'>
                {title}
            </div>
            <div>
                <ul>
                    {description.map((item) => (
                    <li className='project-description' key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}