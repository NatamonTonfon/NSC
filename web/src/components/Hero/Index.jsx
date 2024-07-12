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
          <h1 className="mb-5 text-6xl font-bold">Factor Investing ?</h1>
          <p className="mb-5 text-xl">
            การเลือกลงทุนตามปัจจัยที่มีผลต่อตลาด สร้างผลตอบแทนเหนือตลาดได้ ง่าย
            สะดวก ประหยัดวลา
          </p>
          <button className="btn btn-warning">สำรวจให้มากขึ้น</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
