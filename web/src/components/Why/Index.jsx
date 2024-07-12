const Why = () => {
  return (
    <div className="p-20 bg-gray-50 text-center   ">
      <h2 className="text-4xl font-bold mb-12">
        <span className="text-teal-500 text-5xl">3</span>{" "}
        เหตุผลที่ควรลงทุนด้วยปัจจัย ?
      </h2>
      <div className="flex justify-around items-start">
        <div className="max-w-xs">
          <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex justify-center items-center mx-auto mb-4 text-2xl">
            1
          </div>
          <h3 className="text-xl mb-2">ง่าย</h3>
          <p className="text-gray-600 mb-3">
            การลงทุนด้วยปัจจัยสามารถทำความเข้าใจได้ง่าย
            จากข้อมูลปัจจัยที่บ่งบอกถึงภาพรวมของตลาด
          </p>
          <button className="btn btn-warning ">สำรวจมากขึ้น</button>
        </div>
        <div className="max-w-xs">
          <div className="bg-teal-500 t text-white rounded-full w-16 h-16 flex justify-center items-center mx-auto mb-4 text-2xl">
            2
          </div>
          <h3 className="text-xl mb-2">ผลตอบแทนสูง</h3>
          <p className="text-gray-600 mb-3">
            การลงทุนด้วยปัจจัยมีความสามารถที่สร้างผลตอบแทนเหนือตลาดสามารถเลือกดูข้อมูลผลตอบแทนย้อนหลังได้
          </p>
          <button className="btn btn-warning ">สำรวจมากขึ้น</button>
        </div>
        <div className="max-w-xs">
          <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex justify-center items-center mx-auto mb-4 text-2xl">
            3
          </div>
          <h3 className="text-xl mb-2">ประหยัดเวลา</h3>
          <p className="text-gray-600 mb-3">
            การลงทุนเด้วยปัจจัยถือเป็นการลงทุนที่กึ่งระยะยาว
            ที่สามารถเลือกถือการลงทุนได้ยาวและปรับเปลี่ยนพอร์ตการลงทุนตามสภาพเศรษฐกิจ
          </p>
          <button className="btn btn-warning ">สำรวจมากขึ้น</button>
        </div>
      </div>
    </div>
  );
};

export default Why;
