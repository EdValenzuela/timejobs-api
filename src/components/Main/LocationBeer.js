
const LocationBeer = () => {

    const LocationBox = ({children, message='Lorem ipsum dolor sit amet, consectetur adipiscing elit'}) => (
        <>
            <div className="flex flex-row items-center">
                {children}
            </div>
            <p className="leading-relaxed mb-5 text-gray-600">{message}</p>
        </>
    )

    const locationIcon = () => (
        <LocationBox>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-900 text-lg mb-1 font-medium title-font ml-3">Lorem ipsum</p>
        </LocationBox>
    )

    const locationPhone = () => (
        <LocationBox>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="text-gray-900 text-lg mb-1 font-medium title-font ml-3">Lorem ipsum</p>
        </LocationBox>
    )

    const locationTime = () => (
        <LocationBox>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-900 text-lg mb-1 font-medium title-font ml-3">Lorem ipsum</p>
        </LocationBox>
    )

    const locationMail = () => (
        <LocationBox message='loremipsum@timejobs.com'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-900 text-lg mb-1 font-medium title-font ml-3">Loremipsum</p>
        </LocationBox>
    )

    return (
        <section className="text-gray-600 body-font relative">
            <h1 className="container mx-auto text-center mt-5 font-bold text-4xl text-black">Location</h1>
            <div className="container px-5 py-5 md:py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    {locationIcon()}
                    {locationPhone()}
                    {locationTime()}
                    {locationMail()}
                </div>
                <div className="w-full lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-5 flex items-end justify-start relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.343609249409!2d-70.58216598424556!3d-33.41428500304425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfe90a339783%3A0xfb357b94257cd805!2sTime%20Jobs!5e0!3m2!1ses!2scl!4v1641660602284!5m2!1ses!2scl"  width="100%" height="450" frameBorder="0" style={{border:0}} aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
        </section>
    )
}

export default LocationBeer
