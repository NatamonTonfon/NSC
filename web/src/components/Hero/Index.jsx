import back1 from "../../assets/finance.jpg";
function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${back1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Factor Investing ?</h1>
          <p className="mb-5">
            หมุนเวียนปัจจัยให้ตรงตามเศรษฐกิจเพื่อเพิ่มประสิทธิภาพในการลงทุนด้วยปัจจัย
          </p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
