function Chose() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        คลิกอ่านหัวข้อที่คุณสนใจ
      </h1>
      <ul className="list-disc list-inside space-y-4 text-lg text-center">
        <li className="mb-4">
          <a href="#jitta-ranking" className="text-gray-600 hover:underline">
            Factor rotation คืออะไร
          </a>
        </li>
        <li className="mb-4">
          <a href="#jitta-score" className="text-gray-600 hover:underline">
            Factor ranking คืออะไร
          </a>
        </li>
        <li className="mb-4">
          <a href="#jitta-line" className="text-gray-600 hover:underline">
            ลงทุนตาม factor ranking ดีอย่างไร
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Chose;
