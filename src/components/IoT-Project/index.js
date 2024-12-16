function iotProject () {
return(
    <div>
        <div className="bg-[rgb(24,75,68)]">
        <h2 className="text-white text-3xl md:text-6xl font-bold text-center p-3 md:p-6">IOT Meets Machine Learning:</h2>
        <h4 className="text-[rgb(140,160,167)] text-xl md:text-2xl font-bold text-center p-3 md:p-4">DHT Sensor Data Logging for Predictive Analysis</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-6 gap-3 mx-auto">
            <div className="col-span-1">
            {/* for card 01   */}
                <img src="\assets\images\Iot 01.avif" alt="img" className="w-[100%] h-[280px] object-fill"></img>
                <p className="text-white text-center pt-4">Raspberry Pi Pico wired to DHT </p>
                <p className="text-white text-center p-1">sensor and SD Card for storage.</p>
            </div>
            
            {/* for card 02  */}
            <div className="col-span-1">
                <img src="\assets\images\Iot 02.avif" alt="img" className="w-[100%] h-[280px] object-fill"></img>
                <p className="text-white text-center pt-4">Plot of Temperature and  </p>
                <p className="text-white text-center p-1">Plot of Temperature and Humidity against Timestamp</p>
            </div>


        </div>
        <div className="bg-[rgb(24,75,68)]  p-2 md:p-6 gap-3 mx-auto">
        {/* for card 03  */}
        <div className="col-span-1">
                <img src="\assets\images\Iot 03.avif" alt="img" className="md:w-[50%] w-[100%] mx-auto h-[280px] object-fill"></img>
                <p className="text-white text-center pt-4">Example of Predicted Temperature plotted against Actual </p>
                <p className="text-white text-center p-1">Temperature, after regression analysis.</p>
                <a href="/stem/coding-robotics" className="flex justify-center hover:underline py-2">Click here for Code</a>
            </div>
            </div>
        </div>


        <div className="flex justify-center p-1 md:p-4">
                {/* For Video number 01 */}
                <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-3xl font-bold py-3">Raspberry Pi Pico Rings the Healing Bowl</h3>
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=E_4TnPioqhY&list=TLGGEaMGexI0oBwxMzEyMjAyNA&t=8s"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg w-[100%]"
                        ></iframe>
                    </div>
                </div>
                </div>
    </div>
)
}
export default iotProject