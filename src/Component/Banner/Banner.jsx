import bannerIng from "../../assets/pngwing 1.png"
const Banner = () => {
    return (
        <div className="md:flex justify-evenly items-center py-12 my-10 rounded-xl bg-gray-100">
            <div className="space-y-8">
                <h1 className="text-5xl font-medium ">Books to freshen up <br /> your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-white">Vew The List</button>
            </div>
            <div className="">
                <img src={bannerIng} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;