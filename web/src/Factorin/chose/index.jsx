function Chose() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
        คลิกอ่านหัวข้อที่คุณสนใจ
      </h1>
      <ul className="list-disc list-inside space-y-4 text-lg text-center">
        <li className="mb-4">
          <a href="#factor-investing" className="text-gray-600 hover:underline">
            Factor investing คืออะไร
          </a>
        </li>
        <li className="mb-4">
          <a href="#factor-types" className="text-gray-600 hover:underline">
            ประเภทของปัจจัยมีอะไรบ้าง
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#factor-investment-how"
            className="text-gray-600 hover:underline"
          >
            ลงทุนด้วยปัจจัยได้อย่างไร
          </a>
        </li>
        <li className="mb-4">
          <a href="#factor-advantage" className="text-gray-600 hover:underline">
            ลงทุนด้วยปัจจัย ดีกว่าอย่างไร
          </a>
        </li>
        <li className="mb-4">
          <a href="#factor-longterm" className="text-gray-600 hover:underline">
            ทำไม Factor investing จึงชนะตลาดในระยะยาว
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Chose;
