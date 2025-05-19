
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Background video animation *****************

//$(function () {
//    var video = document.getElementById('bgVideo');
//    var videoSection = $('.video-section');
//    var videoLength = 0;
//
//    video.addEventListener('loadedmetadata', function() {
//        videoLength = video.duration;
//    });
//
//    $(window).scroll(function () {
//        var scrollTop = $(this).scrollTop();
//        var sectionTop = videoSection.offset().top;
//        var sectionHeight = videoSection.height();
//        var windowHeight = $(window).height();
//
//        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight - windowHeight) {
//            var scrollProgress = (scrollTop - sectionTop) / (sectionHeight - windowHeight);
//            video.currentTime = scrollProgress * videoLength;
//        } else if (scrollTop < sectionTop) {
//            video.currentTime = 0;
//        } else if (scrollTop >= sectionTop + sectionHeight - windowHeight) {
//            video.currentTime = videoLength;
//        }
//    });
//});




// const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
// const overlay = document.getElementById('overlay');
// const overlayContent = document.querySelector('.overlay-content');
// const productDataContainer = document.getElementById('product-data');

// learnMoreBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const productId = btn.getAttribute('data-product-id');
//     const productData = productDataContainer.querySelector(`[data-product-id="${productId}"]`);
    
//     if (productData) {
//       // Clone the content and append it to the overlay
//       const content = productData.cloneNode(true);
//       overlayContent.innerHTML = ''; // Clear previous content
//       overlayContent.appendChild(content);
//       overlay.style.display = 'flex';
//     }
//   });
// });

// overlay.addEventListener('click', (e) => {
//   if (e.target === overlay) {
//     overlay.style.display = 'none';
//   }
// });

// Post Request to the backend to send the email details
function emailSend() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  fetch("http://localhost:3000/send-email", {
    // Adjust URL if using production server
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then(() => {
      alert("Your message has been sent successfully!");
    })
    .catch((error) => {
      alert("Failed to send message. Please try again later.");
    });
}



// function emailSend(){

//     var userName = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var message = document.getElementById('message').value;

//     var messageBody = "Name : " + userName +
//     "<br/> Email : " + email +
//     "<br/> Phone : " + phone +
//     "<br/> The Message : " + message;
//     Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "Info@eecl.sa",
//     Password : "0045ED500F9638134423494C63B9766BE8DB",
//     To : 'Info@eecl.sa',
//     From : "Info@eecl.sa",
//     Subject : "Message From EECC Contact Form",
//     Body : messageBody
//     }).then(
//     message => {
//         if(message=='OK'){
//             swal("تم الإرسال بنجاح", "سنتواصل معك في أقرب وقت!", "success");
//           hideSubscriptionForm();
//         }
//         else{
//             swal("خطأ", "حدث خطأ يرجى المحاولة مرة اخرى!", "error");
//         }
//     }
//     );
// }




// Translations

const translations = {
  ar: {
    translate: "English",
    "home-link": "الرئيسية",
    "about-link": "من نحن",
    "products-link": "منتجاتنا",
    "contact-link": "تواصل معنا",
    "about-title": "من نحن",
    "about-text-1":
      "تأسست شركة EECC لتقديم أحدث تقنيات الذكاء الاصطناعي وإنترنت الأشياء في قطاع معدات مراقبة الطاقة الذكية. وتماشياً مع أهداف رؤية السعودية 2030 في التقدم التكنولوجي والابتكار، نسعى جاهدين للمساهمة في التقدم التكنولوجي للمملكة.",
    "about-text-2":
      "يشرفنا أن نحظى بشهادة صنع في السعودية، وهي شهادة تُجسّد التزامنا بالجودة وفخرنا الوطني. وقد اكتسب نهجنا المبتكر ومنتجاتنا الموثوقة ثقة كبرى الشركات في هذا المجال، بما في ذلك الشركة السعودية للكهرباء. وبصفتنا موردًا رئيسيًا، نزود الشركة السعودية للكهرباء بأنظمة مراقبة ذكية متطورة، مما يُمكّنها من الحفاظ على أعلى معايير توزيع الطاقة",
    "learn-more-btn": "يتعلم أكثر",
    "pdlc-title": "دورة حياة تطوير المنتج (PDLC)",
    "pdlc-item-1": "توليد الأفكار",
    "pdlc-item-2": "البحث واستكشاف الفرص",
    "pdlc-item-3": "التصور",
    "pdlc-item-4": "التطوير المستمر",
    "pdlc-item-5": "الاختبار والتحقق",
    "pdlc-item-6": "الإطلاق",
    "products-title": "منتجاتنا",
    "product-title-1": "مؤشرات الخطأ",
    "product-title-2": "معدات التوزيع الذكية",
    "product-title-3": "أنظمة المنزل الذكي",
    "learn-more-btn": "إعرف المزيد",
    "product-text-1":
      "مؤشرات الأعطال هي أجهزة مراقبة أساسية تُستخدم في أنظمة الطاقة الكهربائية للكشف عن الأعطال والإشارة إليها، مثل قصر الدوائر الكهربائية، أو أعطال التأريض، أو الأحمال الزائدة. تُعزز هذه الأجهزة موثوقية الشبكة من خلال تحديد مواقع الأعطال بسرعة، وتقليل فترات التوقف، وتحسين كفاءة الصيانة.",
    "product-text-2":
      "تُعزز معدات التوزيع الذكية كفاءة شبكة الطاقة وموثوقيتها وأتمتتها من خلال دمج أجهزة استشعار متطورة وتقنيات اتصال وتحليلات تعتمد على الذكاء الاصطناعي. تُتيح هذه الأجهزة المراقبة الفورية واكتشاف الأعطال والتحكم عن بُعد، مما يُحسّن توزيع الطاقة مع تقليل فترات التوقف وتكاليف التشغيل.",
    "product-text-3":
      "تستخدم أنظمة المنازل الذكية أجهزة مترابطة وتقنيات أتمتة لتعزيز الراحة والأمان وكفاءة الطاقة. تتيح هذه الأنظمة التحكم عن بُعد في الإضاءة والمناخ والأمن والأجهزة المنزلية عبر تطبيقات الهاتف المحمول أو المساعدين الصوتيين، مما يوفر بيئة معيشية أكثر راحة وذكاءً.",
    "smart-home-title": "أنظمة المنزل الذكي",
    "smart-home-subtitle": "تحكم كامل وراحة مطلقة",
    "smart-home-feature-1": "التحكم عن بعد عبر تطبيق EECC للمنزل الذكي",
    "smart-home-feature-2": "جدولة تشغيل وإيقاف الأجهزة",
    "smart-home-feature-3": "توفير الطاقة من خلال إدارة الاستهلاك الذكي",
    "smart-home-feature-4": "التكامل مع أجهزة المنزل الذكي الأخرى",
    "smart-switch-title": "مفتاح ذكي بتقنية WIFI-RF",
    "smart-switch-subtitle": "تحكم لاسلكي مرن وسهل الاستخدام",
    "smart-switch-feature-1": "دعم تقنيتي التردد الراديو والواي فاي",
    "smart-switch-feature-2": "إمكانية التركيب في الأماكن الصعبة",
    "smart-switch-feature-3": "سهولة التكامل مع تطبيق EECC للمنزل الذكي",
    "smart-switch-feature-4": "أمان معزز من خلال التحكم اللاسلكي",
    "kashef-501-title": "KASHEF - 501",
    "kashef-501-subtitle": "مؤشرات الخطأ العلوية",
    "kashef-501-feature-1":
      "تتبع شكل موجة التيار المتردد الذكي للتمييز بين الأشكال المختلفة لأعطال الأنظمة ثلاثية الطور",
    "kashef-501-feature-2":
      "مجموعة واسعة من أجهزة الكشف الفعالة تبدأ من 1 أمبير من التيار حتى 1000 أمبير",
    "kashef-501-feature-3":
      "تؤدي الأجهزة الطرفية الأقل إلى سهولة التثبيت باستخدام نظام الاتصالات المضمن",
    "kashef-501-feature-4":
      "طاقة متجددة بالكامل تعمل باستخدام تقنيات الطاقة الشمسية وحصاد الطاقة تعزيز استدامة الشبكة الكهربائية",
    "kashef-501-feature-5": "دعم الصيانة الوقائية",
    "kashef-001-title": "KASHEF - 001",
    "kashef-001-subtitle": "تعزيز الكشف الموثوق كفاءة",
    "kashef-001-feature-1": "الكشف الدقيق عن خطأ الأرض",
    "kashef-001-feature-2": "تصميم قوي",
    "kashef-001-feature-3": "مؤشر متعدد الألوان",
    "kashef-001-feature-4": "واجهة سهلة الاستخدام",
    "sefi-solar-kit-title": "SEFI - طقم الطاقة الشمسية",
    "sefi-solar-kit-description":
      "قامت EECC بتطوير مجموعة طاقة شمسية كحلاً اختيارياً لتوفير طاقة EECC-SEFI في الحالات التي يتم تركيب SEFI على RMUs التي لا تحتوي على محطة توزيع متصلة، أو أن المحطة الفرعية للتوزيع بعيدة.",
    "kashef-501-overhead-fault-indicator-title": "مؤشر ممرات الخطأ العلوية",
    "kashef-501-multifunctional-fault-detection-system-title":
      "نظام كشف الأعطال متعدد الوظائف",
    "kashef-501-feature-1":
      "تتبع ذكي لموجة AC للتمييز بين مختلف أنواع أخطاء أنظمة الثلاثي المرحلة.",
    "kashef-501-feature-2":
      "مجموعة واسعة للاكتشاف الفعال تبدأ من 1 أمبير من التيار حتى 1000 أمبير.",
    "kashef-501-feature-3":
      "مدعوم بالكامل بالطاقة المتجددة باستخدام تقنيات الطاقة الشمسية وجمع الطاقة.",
    "kashef-501-feature-4":
      "تقارير مباشرة إلى أنظمة SCADA بدون الحاجة إلى بوابة وسيطة.",
    "kashef-501-feature-5":
      "تتبع ذكي لموجة AC: يميز بين مختلف أنواع الأخطاء في أنظمة الثلاثي المرحلة، مما يحسن دقة اكتشاف الأخطاء.",
    "doctors-section-title": "عرض توضيحي لمزايا المنتج",
    "kashef-101-video-author": '"كاشف 101" مبين الأعطال الذكي"',
    "qhse-policy-title": "EECC - QHSE POLICY",
    "qhse-policy-subtitle": "دليل متكامل",
    "qhse-quality-title": "الجودة",
    "qhse-quality-description": "ضمان التميز في جميع عملياتنا ومنتجاتنا.",
    "qhse-leadership-title": "التزام القيادة",
    "qhse-leadership-description": "إدارة مكرسة لدفع التحسين المستمر.",
    "qhse-health-safety-title": "الصحة والسلامة",
    "qhse-health-safety-description":
      "إعطاء الأولوية لرفاهية موظفينا وأصحاب المصلحة.",
    "qhse-environment-title": "البيئة",
    "qhse-environment-description":
      "الالتزام بالممارسات المستدامة وتقليل بصمتنا البيئية.",
    "contact-section-title": "• تواصل معنا •",
    "contact-name-label": "الاسم",
    "contact-email-label": "البريد الإلكتروني",
    "contact-phone-label": "رقم الهاتف",
    "contact-message-label": "الرسالة",
    "contact-submit-btn": "إرسال",
    "contact-info-title": "معلومات الاتصال",
    "join-us-message": "❝ انضم إلينا واستمتع بأفضل المنتجات",
    "footer-contact-title": "اتصل بنا",
    "footer-quick-links-title": "روابط سريعة",
    "footer-quick-link-home": "الرئيسية",
    "footer-quick-link-about": "من نحن",
    "footer-quick-link-products": "منتجاتنا",
    "footer-quick-link-contact": "تواصل معنا",
    "footer-copyright": "©2024 هندسة الإختبارات. جميع الحقوق محفوظة.",
    "kashef-201-title": "KASHEF - 201",
    "kashef-201-description":
      "مؤشر ذكي للأخطاء الأرضية مع ميزات متقدمة للمراقبة والتحكم في الوقت الفعلي.",
    "kashef-201-connectivity-title": "إمكانية الاتصال",
    "kashef-201-connectivity-description":
      "مراقبة وتحكم في الوقت الفعلي للجهاز باستخدام أنظمة SCADA أو الهاتف المحمول للمشغل عبر الرسائل القصيرة",
    "kashef-201-accuracy-title": "كشف دقيق لأخطاء التأريض",
    "kashef-201-accuracy-description":
      "يستخدم الحث الكهرومغناطيسي والتحكم بالحاسوب الدقيق للكشف الدقيق عن الأخطاء",
    "kashef-201-design-title": "تصميم قوي",
    "kashef-201-design-description":
      "دقة عالية، مقاومة قوية للتداخل وعمر بطارية طويل",
    "kashef-201-interface-title": "واجهة سهلة الاستخدام",
    "kashef-201-interface-description":
      "زر اختبار / إعادة ضبط لسهولة الاختبار ووظائف إعادة الضبط",
    "kashef-201-what-is-it": "ما هو KASHEF 201؟",
    "kashef-201-explanation":
      "EECC-SEFI هو مؤشر ذكي لأخطاء التأريض، يستخدم على نطاق واسع في معدات RMU وSwitch-Gear للكشف عن أخطاء التأريض في خطوط نقل الطاقة مع ميزات اتصال تتيح المراقبة والتحكم عن بعد",
    "smart-home-systems-title": "أنظمة المنزل الذكي",
    "smart-home-systems-description":
      "تتيح أنظمة المنزل الذكي التحكم الكامل في الأجهزة الكهربائية وأنظمة الإضاءة في المنازل من خلال تطبيقات الهاتف المحمول، مما يوفر تجربة معيشية مريحة وآمنة.",
    "smart-home-remote-control": "التحكم عن بعد عبر تطبيق EECC للمنزل الذكي",
    "smart-home-scheduling": "جدولة تشغيل وإيقاف الأجهزة",
    "smart-home-energy-savings":
      "توفير الطاقة من خلال الإدارة الذكية للاستهلاك",
    "smart-home-integration": "التكامل مع أجهزة المنزل الذكية الأخرى",
    "smart-home-systems-offering": "تقدم EECC أنظمة تحكم فريدة للمنزل الذكي.",
    "wifi-rf-smart-switch-title": "مفتاح ذكي بتقنية WIFI-RF",
    "wifi-rf-smart-switch-description":
      "يوفر المفتاح الذكي بتقنية WIFI-RF للمستخدمين تحكمًا لاسلكيًا في الأجهزة الكهربائية باستخدام تقنيتي WIFI و RF، مما يتيح المرونة وسهولة الاستخدام.",
    "wifi-rf-smart-switch-rf-wifi-support":
      "دعم لتقنيتي RF و WIFI لخيارات تحكم متعددة",
    "wifi-rf-smart-switch-installation":
      "إمكانية التركيب في الأماكن التي يصعب الوصول إليها",
    "wifi-rf-smart-switch-integration":
      "سهولة التكامل مع تطبيق EECC للمنزل الذكي",
    "wifi-rf-smart-switch-security": "أمان معزز من خلال التحكم اللاسلكي",
    "kashef-501-title": "KASHEF-501",
    "kashef-501-description":
      "تعمل مؤشرات الخطأ العلوية على اكتشاف الأعطال في أنظمة التوزيع الكهربائية فورًا، مما يساعد على تقليل أوقات الانقطاع وتحسين أداء الشبكة.",
    "kashef-501-ac-waveform-monitoring":
      "تتبع ذكي لشكل موجة التيار المتردد للتمييز بين أشكال مختلفة من أعطال أنظمة الثلاث مراحل",
    "kashef-501-detection-range":
      "نطاق واسع من الكشف الفعال يبدأ من 1 أمبير من التيار حتى 1000 أمبير",
    "kashef-501-easy-installation":
      "أقل عدد من الملحقات يؤدي إلى سهولة التركيب مع نظام اتصال مدمج",
    "kashef-501-renewable-power":
      "يعمل بالكامل بالطاقة المتجددة باستخدام تقنيات الطاقة الشمسية وحصاد الطاقة",
    "kashef-501-grid-sustainability": "تعزيز استدامة الشبكة الكهربائية",
    "kashef-501-preventive-maintenance": "دعم الصيانة الوقائية",
    "kashef-001-title": "KASHEF 001 - كشف موثوق وكفاءة معززة",
    "kashef-001-what-is-it": "ما هو KASHEF 001؟",
    "kashef-001-explanation":
      "EECC-EFI هو مؤشر خطأ التأريض، يستخدم على نطاق واسع في معدات RMU وSwitch-Gear للكشف عن أخطاء التأريض في خطوط نقل الطاقة",
    "kashef-001-accuracy-title": "كشف دقيق لأخطاء التأريض",
    "kashef-001-accuracy-description":
      "يستخدم الحث الكهرومغناطيسي والتحكم بالحاسوب الدقيق للكشف الدقيق عن الأخطاء",
    "kashef-001-design-title": "تصميم قوي",
    "kashef-001-design-description":
      "دقة عالية، مقاومة قوية للتداخل وعمر بطارية طويل",
    "kashef-001-indicator-title": "مؤشر متعدد الألوان",
    "kashef-001-indicator-description":
      "مؤشرات LED لرؤية الخطأ الفورية: أحمر لخطأ التأريض، أصفر لفقدان الطاقة، أزرق للبطارية المنخفضة",
    "kashef-001-interface-title": "واجهة سهلة الاستخدام",
    "kashef-001-interface-description":
      "زر اختبار/إعادة ضبط لسهولة الاختبار ووظائف إعادة الضبط",
    "sefi-solar-power-kit": "SEFI - طقم الطاقة الشمسية",
    "sefi-solar-power-kit-details": "تفاصيل طقم الطاقة الشمسية SEFI",
    "sefi-solar-power-kit-description":
      "قامت EECC بتطوير مجموعة طاقة شمسية كحلاً اختيارياً لتوفير طاقة EECC-SEFI في الحالات التي يتم تركيب SEFI على RMUs التي لا تحتوي على محطة توزيع متصلة، أو أن المحطة الفرعية للتوزيع بعيدة.",
    "smart-overhead-error-path-indicator": "مؤشر ممرات الخطأ العلوية الذكي",
    "smart-overhead-error-path-indicator-title":
      "مؤشر ممرات الخطأ العلوية الذكي",
    "features-title": "الميزات",
    "feature-1":
      "تتبع ذكي لشكل موجة التيار المتردد للتمييز بين أنواع مختلفة من أعطال أنظمة الثلاث مراحل، مما يحسن دقة اكتشاف الأعطال.",
    "feature-2":
      "نطاق كشف واسع: يكتشف بكفاءة التيارات من 1 أمبير إلى 1000 أمبير، مما يجعله مناسبًا لتطبيقات متنوعة.",
    "feature-3":
      "طاقة متجددة: يعمل بالكامل بتقنيات الطاقة الشمسية وحصاد الطاقة.",
    "feature-4": "تقنية استشعار متكاملة: تكتشف الأعطال الكهربائية بكفاءة.",
    "feature-5": "اتصال RF و GPRS: يمكّن المراقبة عن بعد ونقل البيانات.",
    "feature-6": "تحديد المواقع GIS: يسمح بتتبع دقيق لموقع الخطأ.",
    "feature-7":
      "كفاءة التكلفة: يقلل من القوى العاملة واستخدام المركبات والتكاليف التشغيلية.",
    "feature-8": "مؤشرات LED للأعطال: تحدد أنواع الأعطال بإشارات ملونة مميزة.",
    "feature-9":
      "إضافات اختيارية: تشمل جهاز PDA للتحكم عن بعد ومحول تركيب للاستخدام المرن.",
    "feature-10":
      "تقارير IEC104 و DNP3.0 مباشرة إلى أنظمة SCADA دون الحاجة إلى بوابة وسيطة.",
    "section-title": "أنظمة التوزيع الذكية",
  },
  en: {
    translate: "العربية",
    "home-link": "Home",
    "about-link": "About",
    "products-link": "Products",
    "contact-link": "Contact us",
    "about-title": "About Us",
    "about-text-1":
      "EECC was established to introduce cutting-edge AI and IoT technologies into the Smart Energy Monitoring Equipment sector. Aligned with Saudi Vision 2030’s objectives of technological advancement and innovation, we strive to contribute to the Kingdom’s technological progress.",
    "about-text-2":
      "We are honored to be recognized with the Made in Saudi registration certificate, a mark of our dedication to quality and national pride. Our innovative approach and reliable products have earned the trust of major industry players, including the Saudi Electricity Company (SEC). As a key supplier, we provide SEC with Advanced Smart Monitoring Systems, empowering them to maintain high standards of power distribution.",
    "pdlc-title": "Product Development Life Cycle (PDLC)",
    "pdlc-item-1": "Idea Generation",
    "pdlc-item-2": "Research and Opportunity Exploration",
    "pdlc-item-3": "Conceptualization",
    "pdlc-item-4": "Continuous Development",
    "pdlc-item-5": "Testing and Verification",
    "pdlc-item-6": "Launch",
    "products-title": "Our Products",
    "product-title-1": "Fault Indicators",
    "product-title-2": "Smart Distribution Equipment",
    "product-title-3": "Smart Home Systems",
    "learn-more-btn": "Learn More",
    "product-text-1":
      "Fault indicators are essential monitoring devices used in electrical power systems to detect and signal faults such as short circuits, ground faults, or overloads. These devices enhance grid reliability by quickly identifying fault locations, reducing downtime, and improving maintenance efficiency.",
    "product-text-2":
      "Smart distribution equipment enhances power grid efficiency, reliability, and automation by integrating advanced sensors, communication technologies, and AI-driven analytics. These devices enable real-time monitoring, fault detection, and remote control, optimizing energy distribution while reducing downtime and operational costs.",
    "product-text-3":
      "Smart home systems use interconnected devices and automation technology to enhance convenience, security, and energy efficiency. These systems allow remote control of lighting, climate, security, and appliances via mobile apps or voice assistants, creating a more comfortable and intelligent living environment.",
    "smart-home-title": "Smart Home Systems",
    "smart-home-subtitle": "Full control and absolute comfort",
    "smart-home-feature-1": "Remote control through the EECC smart home app",
    "smart-home-feature-2": "Schedule device operation and shutdown",
    "smart-home-feature-3":
      "Energy saving through smart consumption management",
    "smart-home-feature-4": "Integration with other smart home devices",
    "smart-switch-title": "WIFI-RF Smart Switch",
    "smart-switch-subtitle": "Flexible and easy-to-use wireless control",
    "smart-switch-feature-1":
      "Support for both radio frequency and Wi-Fi technologies",
    "smart-switch-feature-2": "Ability to install in difficult locations",
    "smart-switch-feature-3": "Easy integration with the EECC smart home app",
    "smart-switch-feature-4": "Enhanced security through wireless control",
    "kashef-501-title": "KASHEF - 501",
    "kashef-501-subtitle": "Overhead Fault Indicators",
    "kashef-501-feature-1":
      "Smart AC waveform tracking to distinguish between different types of faults in three-phase systems",
    "kashef-501-feature-2":
      "Wide range of effective detection devices from 1 Ampere up to 1000 Amperes",
    "kashef-501-feature-3":
      "Smaller peripheral devices enable easier installation using the embedded communication system",
    "kashef-501-feature-4":
      "Fully renewable energy powered using solar and energy harvesting technologies to enhance grid sustainability",
    "kashef-501-feature-5": "Support for preventive maintenance",
    "kashef-001-title": "KASHEF - 001",
    "kashef-001-subtitle": "Enhance Reliable Efficiency Detection",
    "kashef-001-feature-1": "Precise ground fault detection",
    "kashef-001-feature-2": "Robust design",
    "kashef-001-feature-3": "Multi-color indicator",
    "kashef-001-feature-4": "User-friendly interface",
    "sefi-solar-kit-title": "SEFI - Solar Power Kit",
    "sefi-solar-kit-description":
      "EECC has developed a solar power kit as an optional solution to power EECC-SEFI in cases where SEFI is installed on RMUs that do not have a connected distribution substation, or the distribution substation is remote.",
    "kashef-501-overhead-fault-indicator-title": "Overhead Fault Indicators",
    "kashef-501-multifunctional-fault-detection-system-title":
      "Multifunctional Fault Detection System",
    "kashef-501-feature-1":
      "Smart AC waveform tracking to distinguish between different types of faults in three-phase systems.",
    "kashef-501-feature-2":
      "Wide range of effective detection from 1 Ampere up to 1000 Amperes.",
    "kashef-501-feature-3":
      "Fully renewable energy powered using solar and energy harvesting technologies.",
    "kashef-501-feature-4":
      "Direct reporting to SCADA systems without the need for an intermediate gateway.",
    "kashef-501-feature-5":
      "Smart AC waveform tracking: Distinguishes between different types of faults in three-phase systems, improving fault detection accuracy.",
    "doctors-section-title": "Product Demonstration",
    "kashef-101-video-author": '"Kashef 101" Smart Fault Indicator',
    "qhse-policy-title": "EECC - QHSE POLICY",
    "qhse-policy-subtitle": "Integrated Guideline",
    "qhse-quality-title": "Quality",
    "qhse-quality-description":
      "Ensuring excellence in all our operations and products.",
    "qhse-leadership-title": "Leadership Commitment",
    "qhse-leadership-description":
      "Dedicated management to drive continuous improvement.",
    "qhse-health-safety-title": "Health & Safety",
    "qhse-health-safety-description":
      "Prioritizing the well-being of our employees and stakeholders.",
    "qhse-environment-title": "Environment",
    "qhse-environment-description":
      "Commitment to sustainable practices and reducing our environmental footprint.",
    "contact-section-title": "• Contact Us •",
    "contact-name-label": "Name",
    "contact-email-label": "Email",
    "contact-phone-label": "Phone",
    "contact-message-label": "Message",
    "contact-submit-btn": "Submit",
    "contact-info-title": "Contact Information",
    "join-us-message": "❝ Pioneering Smart Energy Monitoring Solutions",
    "footer-contact-title": "Contact Us",
    "footer-quick-links-title": "Quick Links",
    "footer-quick-link-home": "Home",
    "footer-quick-link-about": "About Us",
    "footer-quick-link-products": "Our Products",
    "footer-quick-link-contact": "Contact Us",
    "footer-copyright": "©2024 Ekhtbarat Engineering. All rights reserved.",
    "kashef-201-title": "KASHEF - 201",
    "kashef-201-description":
      "Smart ground fault indicator with advanced real-time monitoring and control features.",
    "kashef-201-connectivity-title": "Connectivity",
    "kashef-201-connectivity-description":
      "Real-time device monitoring and control using SCADA systems or mobile operator via SMS",
    "kashef-201-accuracy-title": "Accurate Ground Fault Detection",
    "kashef-201-accuracy-description":
      "Uses electromagnetic induction and precise computer control for accurate fault detection",
    "kashef-201-design-title": "Rugged Design",
    "kashef-201-design-description":
      "High accuracy, strong interference resistance, and long battery life",
    "kashef-201-interface-title": "User-friendly Interface",
    "kashef-201-interface-description":
      "Test/reset button for easy testing and reset functions",
    "kashef-201-what-is-it": "What is KASHEF 201?",
    "kashef-201-explanation":
      "EECC-SEFI is a smart ground fault indicator, widely used in RMU and Switch-Gear equipment to detect ground faults in power transmission lines with communication features that enable remote monitoring and control",
    "smart-home-systems-title": "Smart Home Systems",
    "smart-home-systems-description":
      "Smart home systems allow full control of electrical appliances and lighting systems in homes through mobile applications, providing a comfortable and secure living experience.",
    "smart-home-remote-control": "Remote control via EECC Smart Home app",
    "smart-home-scheduling": "Scheduling of device operation",
    "smart-home-energy-savings":
      "Energy savings through smart consumption management",
    "smart-home-integration": "Integration with other smart home devices",
    "smart-home-systems-offering":
      "EECC offers unique control systems for smart homes.",
    "wifi-rf-smart-switch-title": "WIFI-RF Smart Switch",
    "wifi-rf-smart-switch-description":
      "The WIFI-RF smart switch provides users with wireless control of electrical devices using both WIFI and RF technologies, enabling flexibility and ease of use.",
    "wifi-rf-smart-switch-rf-wifi-support":
      "Support for both RF and WIFI technologies for multiple control options",
    "wifi-rf-smart-switch-installation":
      "Ability to install in hard-to-reach locations",
    "wifi-rf-smart-switch-integration":
      "Easy integration with EECC Smart Home app",
    "wifi-rf-smart-switch-security":
      "Enhanced security through wireless control",
    "kashef-501-title": "KASHEF-501",
    "kashef-501-description":
      "Overhead fault indicators quickly detect faults in electrical distribution systems, helping to reduce outage times and improve grid performance.",
    "kashef-501-ac-waveform-monitoring":
      "Smart AC waveform monitoring to distinguish between different types of three-phase system faults",
    "kashef-501-detection-range":
      "Wide effective detection range from 1 Amp to 1000 Amps",
    "kashef-501-easy-installation":
      "Minimal accessories for easy installation with integrated communication system",
    "kashef-501-renewable-power":
      "Fully renewable-powered using solar and energy harvesting technologies",
    "kashef-501-grid-sustainability": "Enhances electric grid sustainability",
    "kashef-501-preventive-maintenance": "Supports preventive maintenance",
    "kashef-001-title":
      "KASHEF 001 - Reliable Detection and Enhanced Efficiency",
    "kashef-001-what-is-it": "What is KASHEF 001?",
    "kashef-001-explanation":
      "EECC-EFI is a ground fault indicator, widely used in RMU and Switch-Gear equipment to detect ground faults in power transmission lines",
    "kashef-001-accuracy-title": "Accurate Ground Fault Detection",
    "kashef-001-accuracy-description":
      "Uses electromagnetic induction and precise computer control for accurate fault detection",
    "kashef-001-design-title": "Rugged Design",
    "kashef-001-design-description":
      "High accuracy, strong interference resistance, and long battery life",
    "kashef-001-indicator-title": "Multi-color Indicator",
    "kashef-001-indicator-description":
      "LED indicators for instant fault visibility: red for ground fault, yellow for power loss, blue for low battery",
    "kashef-001-interface-title": "User-friendly Interface",
    "kashef-001-interface-description":
      "Test/reset button for easy testing and reset functions",
    "sefi-solar-power-kit": "SEFI - Solar Power Kit",
    "sefi-solar-power-kit-details": "Details of the SEFI Solar Power Kit",
    "sefi-solar-power-kit-description":
      "EECC has developed a solar power kit as an optional solution to provide EECC-SEFI power in cases where SEFI is installed on RMUs that do not have a connected distribution substation, or where the distribution substation is located far away.",
    "smart-overhead-error-path-indicator":
      "Smart Overhead Error Path Indicator",
    "smart-overhead-error-path-indicator-title":
      "Smart Overhead Error Path Indicator",
    "features-title": "Features",
    "feature-1":
      "Intelligent waveform tracking to distinguish between different types of three-phase system faults, improving fault detection accuracy.",
    "feature-2":
      "Wide detection range: Efficiently detects currents from 1 Ampere to 1000 Amperes, making it suitable for various applications.",
    "feature-3":
      "Renewable energy: Fully operates with solar power and energy harvesting technologies.",
    "feature-4":
      "Integrated sensing technology: Efficiently detects electrical faults.",
    "feature-5":
      "RF and GPRS communication: Enables remote monitoring and data transmission.",
    "feature-6":
      "GIS Positioning: Allows for accurate fault location tracking.",
    "feature-7":
      "Cost-effective: Reduces labor, vehicle usage, and operational costs.",
    "feature-8":
      "Fault LED indicators: Identify fault types with distinctive color signals.",
    "feature-9":
      "Optional accessories: Include a PDA for remote control and a mounting adapter for flexible use.",
    "feature-10":
      "Direct IEC104 and DNP3.0 reporting to SCADA systems without the need for an intermediate gateway.",
    "section-title": "Smart Distribution Systems",
  },
};

// Function to set the language
function setLanguage(newLanguage) {
  
  // Show loading screen for a few seconds
  //showLoadingScreen(1000);
  
  const elements = document.getElementsByClassName('translate');
  
  // Update the text of all elements
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const text = element.getAttribute('data-translate');
    const translatedText = translations[newLanguage][text];
    if (translatedText) {
      element.innerText = translatedText;
    } else {
      element.innerText = text;
    }
    element.setAttribute('data-language', newLanguage);
  }
  
  const body = document.querySelector('body');
  const enContainer = document.getElementById('testimonials-en');
  const arContainer = document.getElementById('testimonials-ar');
  
  if (newLanguage === 'ar') {
    body.classList.remove('language-en');
    body.setAttribute('dir', 'rtl');
    enContainer.style.display = 'none';
    arContainer.style.display = 'block';
  } else {
    body.classList.add('language-en');
    body.setAttribute('dir', 'ltr');
    enContainer.style.display = 'block';
    arContainer.style.display = 'none';
  }
  
  // Save the language preference in localStorage
  localStorage.setItem('language', newLanguage);
  }
  
  // Function to toggle the language
  function toggleLanguage() {
  const currentLanguage = document.querySelector('.translate').getAttribute('data-language');
  const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
  setLanguage(newLanguage);
  }
  
  // Event listener to set the initial language when the page loads
  document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('language') || 'ar'; // Default to English if no saved preference
  setLanguage(savedLanguage);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
      let savedLanguage;
      setLanguage(savedLanguage);
  });