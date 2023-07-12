import Banner from "./Banner";

const BannerOverlay = ({src, title, subtitle}) => {
    return (
        <div className="relative">
            <Banner src={src}/>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white" >
                <div className="grid h-full w-full space-y-10 place-items-center">
                    <div className="flex flex-col space-y-4 text-center">
                        <p className="text-5xl md:text-7xl font-bold">{title}</p>
                        <div className="border border-primary w-1/3 mx-auto"></div>
                        <p className="p-4">{subtitle}</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerOverlay;
