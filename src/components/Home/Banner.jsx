

const Banner = () => {

    return (
        <div className="w-11/12 mx-auto bg-[#fff] dark:bg-white rounded-md relative">

            {/* header */}
            <header
                className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">

                <div className="w-full dark:text-slate-600 lg:w-[45%]">
                    <p>Hi there! I'm KH SALAR HASSAN</p>
                    <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">A 
                        <span className="text-teal-500"> Frontend Developer</span> is here to be your assistance</h1>
                    <p className="mt-2 text-[1rem]">I am a frontend focused MERN stack developer, ready to help you in making creative digital products!</p>
                    <div className="flex gap-3">
                        <a className="btn" target="_blank" href="https://drive.usercontent.google.com/download?id=1tfgw7jFW0mPAQLlh2qCp7mDdmdS7xzZs&export=download&authuser=0&confirm=t&uuid=7bf67440-6395-4b4e-bad3-05cb4eeb066f&at=AN8xHopeyI5_C2dEd9CKZyRCqW-f:1750664458864">Download CV</a>
                        <button className="btn">Play Video</button>
                    </div>
                </div>

                <div className="w-full lg:w-[55%]">
                    <img src="banner.png" alt="image" className=""/>
                </div>
            </header>

            <section className="px-8 pb-[30px] mt-8">
                <h1 className="text-[1.3rem] text-slate-600 font-semibold">Our Service</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-10 w-[70%]">
                    <div>
                        <img src="https://i.ibb.co/z721j8b/Vector.png" alt="Vector" className="w-[30px]"/>
                        <h4 className="text-[1.1rem] dark:text-slate-600 mt-3">Branding</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Qn78BRJ/Ui-Design.png" alt="Vector"
                             className="w-[30px]"/>
                        <h4 className="text-[1.1rem] dark:text-slate-600 mt-3">Backend</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/GcsvXxk/Product.png" alt="Vector"
                             className="w-[30px]"/>
                        <h4 className="text-[1.1rem] dark:text-slate-600 mt-3">Website Design</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>

            {/* right blur shadow */}
            <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
        </div>
    );
};

export default Banner;
                    