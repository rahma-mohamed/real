import React from 'react'
import Video from '../asests/WhatsApp Video 2024-02-28 at 22.08.20_a176b078.mp4'
import { FaAngleDoubleLeft } from "react-icons/fa";

function Navbar() {
  return (
    <>
    <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <nav className='navbar'>
        <a>الابتكار الحقيقي</a>
        <a>عن الشركه</a>
      </nav>
      <div className='tltel'>
      <p><br/>الابتكار في صناعة المعارض والمؤتمرات بمصداقية وجودة <br/>نقل المعرفة المتنامية وتطبيقها في أرض الوطن الخصبة<br/>تحقيق أعلى مستويات الجودة في الخدمات المقدمة <br/>مراقبة التغيرات في تقديم الخدمات بشكل مستمر</p>
      </div>
       <div className='contact'>
       <a>تواصل معنا <FaAngleDoubleLeft /></a>
       
       </div>
       <footer className='foot'>
       <p>فريق من العقول المبدعة الملهمة ملتزمون بتقديم تجربة استثنائية</p>
       <p>هي شركة سعودية مقرها الرياض ويرتكز نشاطها على تقديم <br/>خدمات تنظيم الفعاليات والمهرجانات السياحيه <br/>إدارة المعارض التجارية والاجتماعات والمؤتمرات والفعاليات والترويج لها</p>
       <a>اليك بعض اعمالنا <FaAngleDoubleLeft /></a>
      </footer>
    </div>
   
       </>
  )
}

export default Navbar
