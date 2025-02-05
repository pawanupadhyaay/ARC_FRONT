import bannerImage from "../assets/Home-5.png"; // Replace with actual image

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center text-center h-[500px] bg-gray-800 text-white">
      <img src={bannerImage} alt="Gaming Banner" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold">Gaming is a Passion & eSports is a Career</h1>
        <p className="mt-4 text-lg">Join the best gaming community and start your journey.</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">Join Now</button>
      </div>
    </section>
  );
};

export default Hero;
