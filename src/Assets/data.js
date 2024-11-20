import bookingImage from './booking.png'
import databaseImage from './sql.png'
import modelChckerImage from './ctl.png'
import foodgo from './foodgo-home_page.png'
import taskmanagement from './taskmanagement.png'


export const PROJECTS = [
    {
        image: foodgo ,
        title: 'Full Stack E-commerce Website - Foodgo',
        description: 
        [
            "Developed a full-stack e-commerce web application using the MERN stack, with React (Vite) for the front end and Node.js/Express.js for the back end, ensuring a fast, responsive user experience and robust server-side functionality.",
            "Designed and implemented a MongoDB database to enable flexible, schema-less data storage for dynamic product and user information.",
            "Integrated secure user authentication with JWT and payment processing via Stripe to ensure smooth and reliable transactions.",
            "Leveraged useContext, React Router, and Axios for efficient state management, navigation, and API integration.",
            "Followed the MVC design pattern to achieve modularity and maintainability in application architecture."
        ]
    },
    {
        image: taskmanagement ,
        title: 'Personal Task Management Application',
        description: 
        [
            "Built a web-based application using ASP.NET Core, Entity Framework, SQL Server, JavaScript, HTML, and CSS, delivering a well-structured API and responsive front-end interface.",
            "Designed back-end services with a structured API layer to support efficient data retrieval and management, including CRUD operations for task management and user authentication.",
            "Used Postman for API testing to validate back-end services, ensuring accurate data flow between the API and database.",
            "Verified CRUD operations for task management and task categorization to maintain seamless functionality.",
            "Compiled a detailed test report demonstrating the application's robustness through comprehensive testing of both API endpoints and user interfaces."
        ]
    },
    {
        image: bookingImage ,
        title: 'Full Stack Travel Website - Trip Aspire',
        description: 
        [
            "Built a full-stack web application using the MERN stack following Agile process. Delivered an intuitive and engaging user interface, scalable operations, and efficient data storage and retrieval.",
            "Crafted a detailed Software Requirements Specification (SRS) to outline functional and non-functional requirements, establishing a clear project roadmap.",
            "Integrated and tested RESTful APIs using Postman to validate API functionality, ensuring accurate data exchange between client and server.",
            "Utilized SQL in the backend to handle front-end requests related to search, sort, and pagination, ensuring optimized data retrieval and processing."
        ]
    },

    {
        image: databaseImage ,
        title: 'Database Design for Airline Management',
        description: 
        [
            "Focused on the sophisticated design and robust implementation of a relational database using MSSQL Server. ",
            "Wrote and executed various SQL scripts to define and manipulate the database schema, handling operations such as table creation, indexing, and defining relationships between entities.",
            "Utilized SQL scripts for performing complex queries, ensuring efficient data retrieval for airline management processes such as flight scheduling, bookings, and passenger records.",
            "Performed Postman for API testing of backend endpoints, verifying the accuracy of the ER diagram to relational schema conversion, and ensuring correct data retrieval and integrity across the system."

        ]
    },    
    {
        image: modelChckerImage ,
        title: 'CTL Model Checker',
        description: 
        [
            "Constructed desk application in the MVC architectural pattern and implemented it in Java, leveraging an intuitive JavaFX graphical user interface.",
            "Integrated sophisticated algorithms for decomposing complex CTL formulas into ASTs, enabling efficient evaluation against Kripke structures through depth-first search and backtracking techniques.",
            "Prepared a detailed test report focused on the evaluation results of CTL formulas against Kripke structures, demonstrating the application's robust verification capabilities"
        ]
    }
];

export const SKILLS = [
    {
        skillName: 'Programming Languages',
        skillContent: [ 'Java', 'C/C++', 'Python' ]
    },
    {
        skillName: 'Web Technologies',
        skillContent: [  'JavaScript',' Node.js',' React', 'HTML', 'CSS' ]
    },
    {
        skillName: 'Database Technologies',
        skillContent: [ 'MySQL', 'Oracle', 'MongoDB', 'Database Design' ]
    },
    {
        skillName: 'Testing',
        skillContent: [ 'JUnit','Jest','Playwrite', "API Testing", "Postman"]
    },
    {
        skillName: 'Version Control',
        skillContent: [ 'Git', 'Github' ]
    },
    {
        skillName: 'Agile Methodologies',
        skillContent: [ 'SCRUM', 'Kanban' ]
    },
    {
        skillName: 'Collaboration Tools',
        skillContent: [ 'JIRA', 'Slack' ]
    },
    {
        skillName: 'Other Tools',
        skillContent: [ 'Postman', 'MS Excel',' MS Powerpoint', 'MS Word' ]
    },

];