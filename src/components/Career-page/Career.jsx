import './Career.css';
import Navbar from '../Navbar/Navbar';
import Subintro from '../Sub-Intro/Subintro';


const Career = () =>{
    return (<>
        <Navbar/>
        <div className="career-intro-container">
            <Subintro 
            heading="Join the AI-led revolution"
            description="We create a world with more founders and do work that will have an impact on the world today, tomorrow, and beyond"
            buttonText="Get Started"
            IsHead = {false}
            IsButton = {true}
            IsSecondButton = {true}
            secontBtnText = "Apply now"
            IsInput={false}
            subHeadName = 'Career'
            onClick={() => console.log('Button clicked')}
        />
        </div>
    </>)
}

export default Career;