// import Header from '../components/header/index'
import React from "react"
// import NavBar from '../components/navBar/index'
function Home() {
    return (
        <>
            {/* <Header /> */}
            {/* <NavBar /> */}

            <div>
                <div className="bg-[rgb(24,75,68)] text-center font-bold">
                    <h1 className="md:w-[35%] text-center mx-auto py-6 text-2xl md:text-3xl text-white px-2 md:p-10">Artificial Intelligence in Education
                        DoorDars</h1>
                </div>
                {/* Welcome to DoorDars-SMC:  */}
                <div className="bg-[#aebbe8] md:py-10 py-4">
                    <h2 className="text-black px-2 pb-3 text-3xl font-bold md:px-10 md::pb-6 md:pt-10 text-center">Welcome to DoorDars-SMC:  Empowering Education with AI and Hands-On Learning!</h2>
                    <p className="px-2 md:px-10 text-lg pb-3 md:pb-6">Dive into a world where education meets innovation. We are dedicated to enhancing learning in schools through the power of AI and hands-on experiments. Explore a wealth of resources and activities designed to inspire curiosity and creativity:</p>
                    <p className="text-xl px-4 md:px-16 leading-relaxed"><span className="font-bold">. AI for Education: </span> Discover how cutting-edge AI techniques transform classrooms into interactive and personalized learning environments.</p>
                    <p className="text-xl px-4 md:px-16 leading-relaxed"><span className="font-bold">. Hands-On STEM Projects: </span> Engage with practical experiments using Raspberry Pi Pico, ESP32, and IoT technology to bring STEM concepts to life.</p>
                    <p className="text-xl px-4 md:px-16 leading-relaxed"><span className="font-bold">. Digital Learning Resources: </span>Access a rich collection of e-books and children’s stories that make learning fun and interactive.</p>
                    <p className="text-xl px-4 md:px-16 leading-relaxed"><span className="font-bold">. AI Launchpad Kits: </span>Take learning further with our exclusive AI Launchpad kits, tailored for budding innovators.</p>
                    <p className="text-xl px-4 md:px-16 leading-relaxed"><span className="font-bold">. Inspiring Blog: </span>Stay updated with insights, tutorials, and ideas to foster STEM education and creativity.</p>
                    <p className="font-bold text-xl px-6 md:px-12 pt-6">Join us in shaping the next generation of thinkers and creators!</p>
                </div>

                {/* AI Launchpad  */}
                <div className="py-10 bg-[rgb(203,209,218)]">
                    <h2 className="text-center text-4xl font-bold">AI Launchpad </h2>
                    <h3 className="text-center text-3xl font-bold py-8">Our Unique Initiatiive</h3>
                    <img src="/assets/images/ai-landing.avif" alt="User" className="object-cover w-[90%] md:w-[30%] h-[200px] mx-auto" />
                    <p className="text-lg leading-normal py-3 md:py-6 px-2 md:px-10"><span className="font-bold">AI Launchpad Kit,</span> a hands-on kit designed to introduce children (ages 10-16) to the exciting world of artificial intelligence, coding, and electronics. Through a series of fun and practical projects, kids learn how to build smart devices using the Raspberry Pi Pico and various sensors. The AI Launchpad empowers young learners to explore real-world applications in health, agriculture, climate change, and home automation, creating a strong foundation in AI and STEM skills.</p>
                    <p className="text-lg leading-normal py-3 md:py-6 px-2 md:px-10">With the AI Launchpad, children will work on fascinating projects like heart rate monitoring systems for health analysis, soil moisture sensors for agriculture, and smart home devices for energy efficiency and automation. Each project is designed to be both educational and enjoyable, allowing kids to collect data and build AI models, sparking their creativity and curiosity.</p>
                    <p className="text-lg leading-normal py-3 md:py-6 px-2 md:px-10">Parents can rest assured that all the necessary guides, manuals, and video tutorials are downloadable from the website, making it easy to follow along. In case of any questions or help needed, buyers can join a dedicated WhatsApp group for support. Additionally, the AI Launchpad community offers a monthly newsletter filled with tips, project ideas, and the latest developments in the field of AI.</p>
                    <p className="text-lg leading-normal py-3 md:py-6 px-2 md:px-10">With AI Launchpad, your child will not only learn the basics of AI and machine learning but will also engage in practical problem-solving activities that address real-world challenges, making it an ideal investment in their future education. </p>
                    <p className="text-lg leading-normal py-3 md:py-6 px-2 md:px-10 font-bold">Assemble your Own or Buy Complete Kit.</p>

                    {/* Buttons  */}
                    <div className="flex gap-4 flex-row justify-evenly">

                        <a
                            href="/buildOwnKits"
                            className="px-3 py-4 md:px-10 md:py-6 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
                        >
                            Place an order
                        </a>




                        <a
                            href="/products/e-book"
                            className="px-3 py-4 md:px-10 md:py-6 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
                        >
                            Place an order
                        </a>

                    </div>


                </div>
            </div>

        </>

    )
}

export default Home