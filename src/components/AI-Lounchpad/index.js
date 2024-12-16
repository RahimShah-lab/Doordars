function Lounchpad() {
    const homeImage = process.env.PUBLIC_URL + '/Assets/images/ai-lounchpad-home.jpeg';

    return (
        <div>
            {/* for home image */}
            <div
                className="relative text-center font-bold"
                style={{
                    backgroundImage: `url(${homeImage})`,
                    opacity: 0.8,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="md:w-[40%] w-full text-center mx-auto py-6 text-2xl md:text-3xl text-white px-4 md:p-10 relative z-10">
                    Artificial Intelligence in Education DoorDars
                </h1>
            </div>


            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                {/* For Video number 01 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Introduction to AI Launchpad Kit</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/fp2f8lNc6dQ?list=TLGGQwmd5MhHQXgxMzEyMjAyNA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>

                {/* For Video number 02 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Installation of Thonny IDE for MicroPython</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=tdTM5PrtOOU&list=TLGGANrXg7nTN50xMzEyMjAyNA&t=22s"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>

                {/* For Video number 03 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Setting up the Raspberry Pi Pico</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=9gGpPbno8NY&list=TLGGbdZ-JCXKHzYxMzEyMjAyNA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>

                {/* For Video number 04 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Installing Micropython in RPi Pico and Blinking Onboard LED</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=zv3zMUMppf0&list=TLGGCf1D8ibvKOExMzEyMjAyNA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>

                {/* For Video number 05 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Interfacing the OLED Display with Pico</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=-bQvP1TAni4&list=TLGGn6gOVcs7n2gxMzEyMjAyNA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lounchpad;
