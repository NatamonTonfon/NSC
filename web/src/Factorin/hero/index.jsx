import backg from "../../assets/backg.jpg";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="mb-4 text-2xl font-bold ">
            ลงทุนที่สร้างโอกาศชนะตลาด
          </h1>
          <h2 className="mb-4 text-4xl font-semibold text-accent">
            Factor investing จัดการพอร์ตตามปัจจัยที่มีผลต่อตลาด
          </h2>
          <ul className="list-disc list-inside mb-5 text-xl">
            <li className="mb-2">ลงทุนระยะยาวอย่างมีหลักการ</li>
            <li className="mb-2">ค่าธรรมเนียมการจัดการ 0.5% ต่อปี</li>
            <li className="mb-2">บริหารและปรับพอร์ตอัตโนมัติ</li>
          </ul>
          <button className="btn btn-accent">เริ่มต้นลงทุน</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
