import React from 'react';
import { Link } from 'react-router-dom';

function Blog(){
return(
    <div>
        <h2 className='text-3xl py-6 md:text-6xl md:py-12 font-bold text-center'>Blog</h2>
        <h3 className='text-3xl md:text-5xl font-bold px-3 md:px-20'>Welcome to the Future of Learning: Your AI-Powered STEM Discovery Hub!</h3>
        <p className='text-lg py-6 px-3 md:px-20'>Dive into an exciting world of innovation and creativity where <span className='font-bold'>education meets cutting-edge technology.</span> Our blog is your gateway to empowering young minds and fostering a passion for learning through <span className='font-bold'>AI, STEM, and hands-on exploration.</span></p>
        <h3 className='text-2xl md:text-4xl font-bold px-3 md:px-20'>Explore the AI Launchpad Kit</h3>
        <p className='text-lg px-3 md:px-20 pt-6 pb-3'>At the core of our mission is the <span className='font-bold'>AI Launchpad Kit—a </span>revolutionary toolkit designed to make learning engaging, interactive, and impactful. This all-in-one kit equips learners to build, experiment, and innovate using the power of <span className='font-bold'>Artificial Intelligence (AI), Internet of Things (IoT),</span> and <span className='font-bold'>coding.</span> From beginners to advanced tech enthusiasts, this kit is perfect for classrooms, STEM clubs, or home projects.</p>
        <p className='text-lg px-3 md:px-20'>With the AI Launchpad Kit, learners can:</p>
        <p className='text-lg px-5 md:px-24'><span className='font-extrabold'>. </span>Build <span className='font-bold'>AI-powered smart gadgets</span> like face-recognition security systems.</p>
        <p className='text-lg px-5 md:px-24'><span className='font-extrabold'>. </span>Design <span className='font-bold'>IoT-based home automation solutions</span> for a smarter future.</p>
        <p className='text-lg px-5 md:px-24'><span className='font-extrabold'>. </span>Create and program robots with real-time sensor interactions.</p>
        <p className='text-lg px-5 md:px-24'><span className='font-extrabold'>. </span>Develop <span className='font-bold'>AI models</span> for everyday problem-solving.</p>
        <p className='text-lg px-5 pb-5 md:px-24'>Craft <span className='font-bold'>digital stories</span> using AI tools and bring their imagination to life.</p>

        {/* What Else You’ll Find Here */}
        <div>
            <h3 className='text-2xl md:text-4xl font-bold pb-4 px-3 md:px-20'>What Else You’ll Find Here</h3>
            <p className='px-3 md:px-20 text-lg'>Our blog is more than just a resource—it's a thriving community for creators, educators, and learners. We offer:</p>
            <p className='px-5 md:px-24 leading-normal'><span className='text-lg font-bold'>. Step-by-step STEM project guides</span> with easy-to-follow instructions.</p>
            <p className='px-5 md:px-24 leading-normal'><span className='text-lg font-bold'>. Hands-on activities</span> that make concepts like coding, robotics, and AI tangible and fun.</p>
            <p className='px-5 md:px-24 leading-normal'><span className='text-lg font-bold'>. Creative educational content</span>such as digital e-stories and interactive challenges.</p>
            <p className='px-5 md:px-24 leading-normal'><span className='text-lg font-bold'>. Teacher and parent resources</span> for integrating STEM into everyday learning.</p>
            <p className='px-5 md:px-24 leading-normal'><span className='text-lg font-bold'>. </span>Insightful articles on the latest trends in STEM education and real-world applications.</p>
            
        </div>

        {/* Join the Movement */}
        <div className='py-8 px-3 md:px-20'>
            <h3 className='text-4xl font-bold'>Join the Movement</h3>
            <p className='text-lg py-4'>Whether you’re a teacher, parent, or young innovator, this is your hub for exploring the limitless possibilities of technology. Together, let’s prepare the next generation of creators, problem-solvers, and changemakers.</p>
            <p className='font-bold text-lg'>Start your journey today and turn curiosity into creation!</p>
        </div>

        {/* cards  */}
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 py-10">
        {/* First row  */}
        {/* First card  */}
        <div>
        <Link to="/ownaiLaunchpadKit" >
        <img src="/assets/images/front-page-ful-kit.avif" alt="User" className="object-cover " />
        <h4 className='text-gray-500 text-lg py-4'>Electronic Kit</h4>
        <h4 className='text-2xl font-bold'>Build Your Own AI Launchpad Kit: Empowering Innovation and Learning</h4>
        <p className='text-lg text-gray-500 py-4'>Build Your Own Kit</p>
        <p className='text-lg text-gray-500'>Lutfullah kakakhel</p>
        <p className='text-lg text-gray-500'>11/24/2024 . 3 min read</p>
        </Link>
            
        </div>
        {/* second card  */}
        <div>
        <Link to="/dhtSensor">
        <img src="/assets/images/dht-predicted.avif" alt="User" className="object-cover " />
        <h4 className='text-2xl font-bold py-4'>Transforming Lab Experiments with DHT Sensors into AI-Powered Predictions</h4>
        <p className='text-lg text-gray-500 py-4'>DHT Sensors data processing</p>
        <p className='text-lg text-gray-500'>Lutfullah kakakhel</p>
        <p className='text-lg text-gray-500'>11/24/2024 . 2 min read</p>
        </Link>
        </div>

        {/* Second Row  */}
        {/* Third card  */}
        <div>
        <Link to="/aiChildrenEducation">
        <img src="/assets/images/=an-illustration-showing-children-of-diverse-backgrounds-learning-with-ai-technology-in-a-classroom-setting.avif" alt="User" className="object-cover " />
        <h4 className='text-2xl font-bold py-4'>The Role of AI in Revolutionizing Children's Education</h4>
        <p className='text-lg text-gray-500 pb-2'>Transforming Education</p>
        <p className='text-lg text-gray-500'>generated</p>
        <p className='text-lg text-gray-500'>11/24/2024 . 2 min read</p>
        </Link>
        </div>

        {/* Fourth Card  */}
        <div>
        <Link to="/aiToolTransferming">
        <img src="/assets/images/an-educational-illustration-showcasing-open-source-ai-tools-in-action-within-a-school-environment.avif" alt="User" className="object-cover " />
        <h4 className='text-2xl font-bold py-4'>Open Source AI Tools Transforming Education in Schools</h4>
        <p className='text-lg text-gray-500 pb-2'>OPen Source Tools</p>
        <p className='text-lg text-gray-500'>generated</p>
        <p className='text-lg text-gray-500'>11/24/2024 . 2 min read</p>
        </Link>
        </div>

      </div>
    </div>
)
}
export default Blog