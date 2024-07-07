import React, { useRef } from "react";
function FactorCard({ title, description, details }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center w-64 mx-2">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-600">{details}</p>
    </div>
  );
}

function FactorsSection() {
  const carouselRef = useRef(null);
  const factors = [
    {
      title: "Value",
      description: "ความเสี่ยงสูง",
      details: "ลงทุนหุ้นดัชนีราคาถูกในตลาดหุ้น Nasdaq และ NYSE 5-20 บริษัท",
    },
    {
      title: "Size",
      description: "ความเสี่ยงสูง",
      details: "ลงทุนหุ้นดัชนีราคาถูกในตลาดหุ้น SET และ MAI 5-20 บริษัท",
    },
    {
      title: "Qulity",
      description: "ความเสี่ยงสูง",
      details: "ลงทุนหุ้นดัชนีราคาถูกในตลาดหุ้น SSE และ SZSE 5-20 บริษัท",
    },
    {
      title: "Risk",
      description: "ความเสี่ยงสูง",
      details: "ลงทุนหุ้นดัชนีราคาถูกในตลาดหุ้น Nasdaq และ NYSE 5-20 บริษัท",
    },
    {
      title: "Momentum",
      description: "ความเสี่ยงสูง",
      details: "ลงทุนหุ้นดัชนีราคาถูกในตลาดหุ้น SET และ MAI 5-20 บริษัท",
    },
    {
      title: "Growth",
      description: "ความเสี่ยงสูง",
      details: "ลงทุนหุ้นดัชนีราคาถูกในตลาดหุ้น SSE และ SZSE 5-20 บริษัท",
    },
    // Add other factors here
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="flex flex-col  items-center  p-10
 bg-green-100  "
    >
      <h2 className="text-4xl font-bold text-center mb-4 text-teal-600">
        ประเภทของปัจจัย
      </h2>
      <p className="text-lg mb-10 text-center">
        Jitta Ranking คืออัลกอริทึมวิเคราะห์หุ้นด้วยเทคโนโลยี AI
        พัฒนาโดยบริษัทจิตตะ ดอท คอม จำกัด
        ผู้ให้บริการเว็บไซต์วิเคราะห์หุ้นแนวเน้นคุณค่า Jitta.com
      </p>
      <div className="relative w-full overflow-hidden">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white rounded-full p-3 z-10"
        >
          &lt;
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth gap-8 no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {factors.map((factor, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <FactorCard
                flag={factor.flag}
                title={factor.title}
                description={factor.description}
                details={factor.details}
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white rounded-full p-3 z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
export default FactorsSection;
