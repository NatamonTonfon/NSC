import FactorsSection from "../Type";
import Chose from "../chose";

function MainContent() {
  return (
    <div>
      <Chose />
      <section id="factor-investing">
        <div className="flex flex-col items-center p-10 ">
          <h2 className="text-4xl font-bold text-center text-teal-600">
            Factor investing คืออะไร
          </h2>
          <div className="flex justify-center max-w-4xl">
            <div className="flex-1 p-6">
              <p className="text-lg mb-4 text-center">
                Jitta Ranking คืออัลกอริทึมวิเคราะห์หุ้นด้วยเทคโนโลยี AI
                พัฒนาโดยบริษัทจิตตะ ดอท คอม จำกัด
                ผู้ให้บริการเว็บไซต์วิเคราะห์หุ้นแนวเน้นคุณค่า Jitta.com
              </p>
              <p className="text-lg text-center">
                Jitta Ranking จะพิจารณาคุณสมบัติหลัก 3 ประการ ได้แก่
                คุณภาพพื้นฐานธุรกิจ มูลค่าที่เหมาะสมของธุรกิจ
                และอัตราการเติบโตในช่วง 2-3 ปีที่ผ่านมา จากตัวเลขหลายๆ
                ตัวในงบการเงินย้อนหลัง 10 ปี
                ซึ่งเป็นหลักฐานพิสูจน์ถึงศักยภาพของธุรกิจที่เป็นกลาง จับต้องได้
                และอยู่ภายใต้การกำกับดูแลของสำนักงานก.ล.ต.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="factor-types">
        <FactorsSection />
      </section>

      <section id="factor-investment-how" className="py-8">
        <h2 className="text-3xl font-bold mb-4">ลงทุนด้วยปัจจัยได้อย่างไร</h2>
        <p className="text-lg">Content for ลงทุนด้วยปัจจัยได้อย่างไร...</p>
      </section>

      <section id="factor-advantage" className="py-8">
        <h2 className="text-3xl font-bold mb-4">
          ลงทุนด้วยปัจจัย ดีกว่าอย่างไร
        </h2>
        <p className="text-lg">Content for ลงทุนด้วยปัจจัย ดีกว่าอย่างไร...</p>
      </section>

      <section id="factor-longterm" className="py-8">
        <h2 className="text-3xl font-bold mb-4">
          ทำไม Factor investing จึงชนะตลาดในระยะยาว
        </h2>
        <p className="text-lg">
          Content for ทำไม Factor investing จึงชนะตลาดในระยะยาว...
        </p>
        npm
      </section>
    </div>
  );
}

export default MainContent;
