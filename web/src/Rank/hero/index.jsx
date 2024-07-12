function Hero() {
  return (
    <div className="bg-[#DADFDB] max-w-8xl p-8 h-50 flex flex-col justify-center items-center">
      <header className="text-white py-4 px-12 flex justify-center items-center">
        <div className="text-4xl text-gray-700 font-bold ">
          ปัจจัยที่แนะนำให้ลงทุน
        </div>
        <div className="ml-12 text-4xl font-bold text-teal-600 mb-4  ">
          Value (MKT)
          <div className="text-m font-normal  ">โอกาสที่จะชนะตลาด 70%</div>
        </div>
      </header>
      <button className="btn btn-warning ">เริ่มต้นลงทุน</button>
    </div>
  );
}

export default Hero;
