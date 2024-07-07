import React, { useState } from "react";
function Types() {
  const [activeTab, setActiveTab] = useState("macroeconomic");

  const renderContent = () => {
    switch (activeTab) {
      case "macroeconomic":
        return (
          <div>
            <h3 className="text-2xl text-center font-bold">
              Macroeconomic factors capture broad risks that exist across asset
              classes.
            </h3>
            <p className="text-gray-600 text-center">
              Content for Style factors...
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-green-500">💳</div>
                <h3 className="text-xl font-bold mb-2">
                  จ่ายดอกเบี้ย 0% นานสุด 10 เดือน
                </h3>
                <p className="text-gray-600">
                  ไม่มีดอกเบี้ยในการผ่อนชำระถึง 10 เดือนเต็ม
                </p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-blue-500">📱</div>
                <h3 className="text-xl font-bold mb-2">นำอุปกรณ์ของคุณมาแลก</h3>
                <p className="text-gray-600">
                  เพื่อรับเครดิตสำหรับใช้ซื้อเครื่องใหม่
                </p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-green-500">🚚</div>
                <h3 className="text-xl font-bold mb-2">รับบริการจัดส่งฟรี</h3>
                <p className="text-gray-600">
                  หรือไปรับสินค้าที่มีพร้อมจำหน่ายที่ Apple Store
                </p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-purple-500">😊</div>
                <h3 className="text-xl font-bold mb-2">ทำให้เป็นของคุณ</h3>
                <p className="text-gray-600">สลักอิโมจิผสมตัวเลขได้ฟรี</p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-red-500">💡</div>
                <h3 className="text-xl font-bold mb-2">ประหยัดพลังงาน</h3>
                <p className="text-gray-600">
                  ผลิตภัณฑ์ที่เป็นมิตรต่อสิ่งแวดล้อม
                </p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-yellow-500">⚙️</div>
                <h3 className="text-xl font-bold mb-2">บริการหลังการขาย</h3>
                <p className="text-gray-600">บริการหลังการขายที่ยอดเยี่ยม</p>
              </div>
            </div>
          </div>
        );
      case "style":
        return (
          <div>
            <h3 className="text-2xl text-center font-bold">
              Style factors help to explain returns and risk within asset
              classes.
            </h3>
            <p className="text-gray-600 text-center">
              Content for Style factors...
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-green-500">💳</div>
                <h3 className="text-xl font-bold mb-2">
                  จ่ายดอกเบี้ย 0% นานสุด 10 เดือน
                </h3>
                <p className="text-gray-600">
                  ไม่มีดอกเบี้ยในการผ่อนชำระถึง 10 เดือนเต็ม
                </p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-blue-500">📱</div>
                <h3 className="text-xl font-bold mb-2">นำอุปกรณ์ของคุณมาแลก</h3>
                <p className="text-gray-600">
                  เพื่อรับเครดิตสำหรับใช้ซื้อเครื่องใหม่
                </p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-green-500">🚚</div>
                <h3 className="text-xl font-bold mb-2">รับบริการจัดส่งฟรี</h3>
                <p className="text-gray-600">
                  หรือไปรับสินค้าที่มีพร้อมจำหน่ายที่ Apple Store
                </p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-purple-500">😊</div>
                <h3 className="text-xl font-bold mb-2">ทำให้เป็นของคุณ</h3>
                <p className="text-gray-600">สลักอิโมจิผสมตัวเลขได้ฟรี</p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-red-500">💡</div>
                <h3 className="text-xl font-bold mb-2">ประหยัดพลังงาน</h3>
                <p className="text-gray-600">
                  ผลิตภัณฑ์ที่เป็นมิตรต่อสิ่งแวดล้อม
                </p>
              </div>
              <div className="card shadow-xl p-4 bg-white rounded-lg">
                <div className="text-5xl mb-4 text-yellow-500">⚙️</div>
                <h3 className="text-xl font-bold mb-2">บริการหลังการขาย</h3>
                <p className="text-gray-600">บริการหลังการขายที่ยอดเยี่ยม</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-10 bg-gray-50">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold mb-5 text-teal-600 ">
          ประเภทของปัจจัย
        </h2>
        <p className="text-gray-600 ">
          There are two main types of factors that have driven returns:
          macroeconomic factors, which capture broad risks across asset classes;
          and style factors, which help to explain returns and risk within asset
          classes.
        </p>
      </div>
      <div className="tabs tabs-bordered justify-center mb-6">
        <button
          className={`tab tab-lg ${
            activeTab === "macroeconomic" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("macroeconomic")}
        >
          Macroeconomic factors
        </button>
        <button
          className={`tab tab-lg ${activeTab === "style" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("style")}
        >
          Style factors
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
}
export default Types;
