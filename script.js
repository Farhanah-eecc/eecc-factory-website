
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



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



// Translations

const translations = {
  ar: {
    translate: "English",
    //nav section
    "home-link": "الرئيسية",
    "about-link": "من نحن",
    "products-link": "منتجاتنا",
    "contact-link": "تواصل معنا",

    //buttons
    "learn-more-btn": "يتعلم أكثر",
    "download-data-sheet": "تنزيل ورقة البيانات",
    "download-operation-manual": "تنزيل دليل التشغيل",
    "watch-video": "مشاهدة الفيديو",
    "close": "إغلاق",

    //about section
    "about-title": "من نحن",
    "about-text-1":
      "تأسست شركة EECC لتقديم أحدث تقنيات الذكاء الاصطناعي وإنترنت الأشياء في قطاع معدات مراقبة الطاقة الذكية. وتماشياً مع أهداف رؤية السعودية 2030 في التقدم التكنولوجي والابتكار، نسعى جاهدين للمساهمة في التقدم التكنولوجي للمملكة.",
    "about-text-2":
      "يشرفنا أن نحظى بشهادة صنع في السعودية، وهي شهادة تُجسّد التزامنا بالجودة وفخرنا الوطني. وقد اكتسب نهجنا المبتكر ومنتجاتنا الموثوقة ثقة كبرى الشركات في هذا المجال، بما في ذلك الشركة السعودية للكهرباء. وبصفتنا موردًا رئيسيًا، نزود الشركة السعودية للكهرباء بأنظمة مراقبة ذكية متطورة، مما يُمكّنها من الحفاظ على أعلى معايير توزيع الطاقة",

    //pdlc section
    "pdlc-title": "دورة حياة تطوير المنتج (PDLC)",
    "pdlc-item-1": "توليد الأفكار",
    "pdlc-item-2": "البحث واستكشاف الفرص",
    "pdlc-item-3": "التصور",
    "pdlc-item-4": "التطوير المستمر",
    "pdlc-item-5": "الاختبار والتحقق",
    "pdlc-item-6": "الإطلاق",

    //products section
    "products-title": "منتجاتنا",
    "product-title-1": "مؤشرات الخطأ",
    "product-title-2": "معدات التوزيع الذكية",
    "product-title-3": "أنظمة المنزل الذكي",
    "product-text-1":
      "مؤشرات الأعطال هي أجهزة مراقبة أساسية تُستخدم في أنظمة الطاقة الكهربائية للكشف عن الأعطال والإشارة إليها، مثل قصر الدوائر الكهربائية، أو أعطال التأريض، أو الأحمال الزائدة. تُعزز هذه الأجهزة موثوقية الشبكة من خلال تحديد مواقع الأعطال بسرعة، وتقليل فترات التوقف، وتحسين كفاءة الصيانة.",
    "product-text-2":
      "تُعزز معدات التوزيع الذكية كفاءة شبكة الطاقة وموثوقيتها وأتمتتها من خلال دمج أجهزة استشعار متطورة وتقنيات اتصال وتحليلات تعتمد على الذكاء الاصطناعي. تُتيح هذه الأجهزة المراقبة الفورية واكتشاف الأعطال والتحكم عن بُعد، مما يُحسّن توزيع الطاقة مع تقليل فترات التوقف وتكاليف التشغيل.",
    "product-text-3":
      "تستخدم أنظمة المنازل الذكية أجهزة مترابطة وتقنيات أتمتة لتعزيز الراحة والأمان وكفاءة الطاقة. تتيح هذه الأنظمة التحكم عن بُعد في الإضاءة والمناخ والأمن والأجهزة المنزلية عبر تطبيقات الهاتف المحمول أو المساعدين الصوتيين، مما يوفر بيئة معيشية أكثر راحة وذكاءً.",

    //video section
    "doctors-section-title": "عرض توضيحي لمزايا المنتج",
    "kashef-101-video-author": '"كاشف 101" مبين الأعطال الذكي"',

    //qhse section
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

    //contact section
    "contact-section-title": "• تواصل معنا •",
    "contact-name-label": "الاسم",
    "contact-email-label": "البريد الإلكتروني",
    "contact-phone-label": "رقم الهاتف",
    "contact-message-label": "الرسالة",
    "contact-submit-btn": "إرسال",
    "contact-info-title": "معلومات الاتصال",
    "join-us-message": "❝ انضم إلينا واستمتع بأفضل المنتجات",

    //footer section
    "footer-contact-title": "اتصل بنا",
    "footer-quick-links-title": "روابط سريعة",
    "footer-quick-link-home": "الرئيسية",
    "footer-quick-link-about": "من نحن",
    "footer-quick-link-products": "منتجاتنا",
    "footer-quick-link-contact": "تواصل معنا",
    "footer-copyright": "©2024 هندسة الإختبارات. جميع الحقوق محفوظة.",

    // ترجمات صفحة أنظمة التوزيع الذكية (Smart Distribution Products)
    //kashef-701
    "section-title-smart-distribution": "أنظمة التوزيع الذكية",
    "kashef-701-title": "هابس 71",
    "kashef-701-description":
      "كاشف EECC-DTSMS هو حل مراقبة متقدم مصمم لتعزيز أداء وموثوقية محولات التوزيع. من خلال التحليل المستمر للمعلمات الكهربائية الحرجة، يضمن جودة الطاقة، ويقلل الخسائر، ويقيم صحة الشبكة.",
    "kashef-701-feature-1":
      "كشف الخسائر: يحدد الخسائر الفنية وغير الفنية، مما يساعد المرافق على تقليل هدر الطاقة وتحسين توزيع الطاقة.",
    "kashef-701-feature-2":
      "معالجة البيانات في الوقت الفعلي: تعالج وحدة تحكم ذكية البيانات المجمعة، مما يوفر تحليلًا مباشرًا لظروف الشبكة.",
    "kashef-701-feature-3":
      "تكامل SCADA وعداد ذكي: متوافق تمامًا مع SCADA، مما يتيح المراقبة عن بُعد وتحليلات البيانات المتقدمة.",
    "kashef-701-feature-4": "مراقبة جودة الطاقة",
    "kashef-701-feature-4-item-1":
      "يتتبع تقلبات الجهد، والتوافقيات، ومعامل القدرة، وتغيرات التردد.",
    "kashef-701-feature-4-item-2":
      "يحدد الشذوذ التي قد تؤثر على الأحمال المتصلة وكفاءة النظام.",
    "kashef-701-feature-5": "تحليل فقدان الطاقة",
    "kashef-701-feature-5-item-1":
      "يكتشف الخسائر الفنية وغير الفنية في شبكة التوزيع.",
    "kashef-701-feature-5-item-2":
      "يوفر رؤى قائمة على البيانات لتقليل هدر الطاقة وتحسين الكفاءة.",
    "kashef-701-feature-6": "تقييم صحة الشبكة",
    "kashef-701-feature-6-item-1":
      "يراقب درجة حرارة المحول، وظروف الحمل، وحالة العزل.",
    "kashef-701-feature-6-item-2":
      "يكتشف العلامات المبكرة للأعطال، مما يتيح الصيانة التنبؤية لتقليل وقت التوقف.",
    "kashef-701-feature-7": "استخدام البيانات والاتصال",
    "kashef-701-feature-7-item-1":
      "ينقل بيانات التشغيل في الوقت الفعلي إلى العدادات الذكية وأنظمة SCADA.",
    "kashef-701-feature-7-item-2":
      "يمكّن من اكتشاف الأعطال، وتحسين الشبكة، والتحليلات المتقدمة لتحسين التحكم التشغيلي.",

    //kashef-81
    "kashef-81-title": "هابس 81",
    "kashef-81-description":
      "مرحلات الحماية هي أجهزة حيوية في أنظمة الطاقة الكهربائية مصممة لاكتشاف الأعطال والظروف غير الطبيعية، مثل التيار الزائد، والجهد الزائد، والدوائر القصيرة. تقوم تلقائيًا بعزل الأقسام المعطلة من الشبكة عن طريق تشغيل قواطع الدائرة، مما يمنع تلف المعدات ويقلل من انقطاع التيار.",
    "kashef-81-feature-1": "ذاتية الطاقة وخالية من الصيانة.",
    "kashef-81-feature-1-item-1":
      "تعمل بدون مصدر طاقة خارجي عن طريق استمداد الطاقة من محول التيار.",
    "kashef-81-feature-1-item-2":
      "تصميم محكم، مضاد للتداخل مناسب للبيئات القاسية.",
    "kashef-81-feature-2": "وظائف حماية متقدمة.",
    "kashef-81-feature-2-item-1":
      "حماية التيار الزائد ثلاثية المراحل مع منحنيات عكسية بمعيار IEC.",
    "kashef-81-feature-2-item-2":
      "حماية التسلسل الصفري (خطأ التأريض) ثنائية المرحلة.",
    "kashef-81-feature-2-item-3": "حظر تيار الاندفاع لمنع التشغيل الخاطئ.",
    "kashef-81-feature-2-item-4":
      "حماية من الحمل الزائد مع إعدادات إنذار أو تشغيل قابلة للتكوين.",
    "kashef-81-feature-3": "معالجة عالية الأداء.",
    "kashef-81-feature-3-item-1":
      "اكتشاف سريع للأعطال مع خوارزميات نافذة بيانات قصيرة للاستجابة السريعة.",
    "kashef-81-feature-3-item-2":
      "يدعم أخذ عينات التيار صفري التسلسل الخارجي والداخلي.",
    "kashef-81-feature-3-item-3": "نطاق قياس واسع مع تدرج ديناميكي تلقائي.",
    "kashef-81-feature-4": "واجهة سهلة الاستخدام.",
    "kashef-81-feature-4-item-1":
      "شاشة LCD 64×128 مع دعم متعدد اللغات (الصينية/الإنجليزية).",
    "kashef-81-feature-4-item-2":
      "تسجيل الأحداث مع تخزين ما يصل إلى 100 سجل في ذاكرة غير متطايرة.",
    "kashef-81-feature-4-item-3": "اتصال RS-485 مع بروتوكولات مفتوحة للتكامل.",
    "kashef-81-feature-5": "تصميم كهربائي وميكانيكي قوي.",
    "kashef-81-feature-5-item-1":
      "نطاق درجة حرارة تشغيل واسع (-30 درجة مئوية إلى 70 درجة مئوية).",
    "kashef-81-feature-5-item-2":
      "حاوية بتصنيف IP54 للوحات الأمامية والجانبية، IP30 للوحة الخلفية.",
    "kashef-81-feature-5-item-3":
      "مقاومة عالية للتداخل الكهرومغناطيسي، والاهتزاز، والصدمات.",

    // ترجمات صفحة أنظمة المنزل الذكي (Smart Home Solutions)
    "section-title-smart-home": "أنظمة المنزل الذكي",
    "wifi-switches-title": "مفاتيح واي فاي",
    "wifi-switches-description":
      "يتيح المفتاح الذكي المزود بتقنية واي فاي التحكم عن بُعد في الأجهزة الكهربائية من خلال شبكة واي فاي، مما يجعل إدارة الأجهزة أسهل ويعزز تجربة المستخدم",
    "wifi-switches-feature-1": "التحكم عن بُعد عبر شبكة واي فاي",
    "wifi-switches-feature-2": "سهولة التركيب والاستخدام",
    "wifi-switches-feature-3": "دعم البرمجة والجدولة اليومية",
    "wifi-rf-switch-title": "مفتاح ذكي بتقنية واي فاي/تردد الراديو",
    "wifi-rf-switch-description":
      "يوفر المفتاح الذكي بتقنية واي فاي-تردد الراديو للمستخدمين تحكمًا لاسلكيًا في الأجهزة الكهربائية باستخدام تقنيتي واي فاي وتردد الراديو، مما يوفر المرونة وسهولة الاستخدام",
    "wifi-rf-switch-feature-1":
      "دعم تقنيتي تردد الراديو وواي فاي لخيارات تحكم متعددة",
    "wifi-rf-switch-feature-2":
      "إمكانية التركيب في الأماكن التي يصعب الوصول إليها",
    "wifi-rf-switch-feature-3": "سهولة التكامل مع تطبيق EECC للمنزل الذكي",
    "wifi-rf-switch-feature-4": "أمان معزز من خلال التحكم اللاسلكي",

    // ترجمات صفحة مؤشرات الخطأ (Fault Indicators)
    "section-title-fault-indicators": "مؤشرات الخطأ",
    "kashef-101-title": "كاشف 101",
    "kashef-101-description":
      "كاشف EECC-SFI هو مؤشر خطأ ذكي مصمم لكابلات الطاقة تحت الأرض في أنظمة RMU. يكتشف أخطاء التأريض وأخطاء التيار الزائد، مما يعزز موثوقية شبكة الطاقة ويقلل من وقت التوقف. يستخدم الجهاز الحث الكهرومغناطيسي ووحدة تحكم ذكية، مع اتصال واي فاي وخلوي (IEC104) للمراقبة عن بُعد.",
    "kashef-101-feature-1": "كشف دقيق للخطأ:",
    "kashef-101-feature-1-item-1": "خطأ التأريض (LED أحمر)",
    "kashef-101-feature-1-item-2": "خطأ الدائرة القصيرة (LED أحمر للمرحلة)",
    "kashef-101-feature-1-item-3": "فقدان الطاقة (LED أصفر)",
    "kashef-101-feature-1-item-4": "بطارية منخفضة (LED أزرق)",
    "kashef-101-feature-2":
      "الاتصال عن بُعد: حامل خارجي للتركيب، مشابك استشعار للكابلات.",
    "kashef-101-feature-3": "خادم ويب واي فاي: يبسط التكوين وإعدادات المعلمات.",
    "kashef-101-feature-4":
      "إعادة ضبط تلقائية: تعيد الضبط بعد إزالة الخطأ عبر استعادة الجهد، أو الأخطاء العابرة.",
    "kashef-101-feature-5":
      "إعادة ضبط المؤقت: يعيد ضبط الخطأ إذا مرت مدة زمنية محددة مسبقًا دون استعادة الطاقة لمنع حلقة إشارة لا نهائية.",
    "kashef-101-feature-6":
      "إعادة ضبط يدوية: إعادة الضبط عبر زر الاختبار/إعادة الضبط.",
    "kashef-101-feature-7": "اختبار/إعادة ضبط عن بُعد: عبر أنظمة SCADA.",
    "kashef-101-feature-8":
      "قياس التيار: مراقبة التيار صفري التسلسل والمرحلة عبر IEC104.",
    "kashef-101-feature-9":
      "عمر بطارية طويل: أكثر من 5 سنوات، قابلة للاستبدال بسهولة دون أدوات.",
    "kashef-101-feature-10":
      "سهولة التركيب: حامل خارجي للتركيب، مشابك استشعار للكابلات.",

    "kashef-002-title": "كاشف 002",
    "kashef-002-description":
      "كاشف EECC-FI هو مؤشر خطأ ثلاثي المراحل مصمم لكابلات الطاقة تحت الأرض في أنظمة RMU. يكتشف ويحدد مواقع أخطاء التأريض وأخطاء التيار الزائد، مما يحسن موثوقية الشبكة ويقلل من وقت التوقف. يستخدم الجهاز الحث الكهرومغناطيسي ووحدة تحكم ذكية مع تكوين قائم على واي فاي لسهولة الإعداد.",
    "kashef-002-feature-1":
      "كشف دقيق للخطأ: أخطاء التأريض (LED أحمر)، الدوائر القصيرة (LED أحمر للمرحلة)، فقدان الطاقة (LED أصفر)، وبطارية منخفضة (LED أزرق).",
    "kashef-002-feature-2": "خادم ويب واي فاي: يبسط التكوين وإعدادات المعلمات.",
    "kashef-002-feature-3":
      "إعادة ضبط تلقائية: تعيد الضبط بعد إزالة الخطأ عبر استعادة الجهد، أو الأخطاء العابرة.",
    "kashef-002-feature-4":
      "إعادة ضبط المؤقت: يعيد ضبط الخطأ إذا مرت مدة زمنية محددة مسبقًا دون استعادة الطاقة لمنع حلقة إشارة لا نهائية.",
    "kashef-002-feature-5":
      "إعادة ضبط يدوية: إعادة الضبط عبر زر الاختبار/إعادة الضبط.",
    "kashef-002-feature-6":
      "قياس التيار: يدعم مراقبة التيار صفري التسلسل والمرحلة عبر MODBUS RTU (RS-485).",
    "kashef-002-feature-7":
      "تصميم موفر للطاقة: بطارية ليثيوم طويلة العمر، قابلة للاستبدال دون أدوات.",
    "kashef-002-feature-8":
      "سهولة التركيب: حامل خارجي للتركيب، مشابك استشعار للكابلات.",

    "kashef-001-title": "كاشف 001",
    "kashef-001-description":
      "كاشف EECC-EFI هو مؤشر خطأ التأريض للشبكة تحت الأرض، مصمم لاكتشاف وتحديد مواقع أخطاء التأريض في الكابلات تحت الأرض، مما يعزز موثوقية توزيع الطاقة ويقلل من وقت التوقف.",
    "kashef-001-feature-1":
      "كشف دقيق للخطأ: يستخدم الحث الكهرومغناطيسي ومعالجة وحدة التحكم الدقيقة.",
    "kashef-001-feature-2":
      "مؤشرات إنذار LED: أحمر لخطأ التأريض، أزرق للبطارية المنخفضة، أصفر لفقدان الطاقة.",
    "kashef-001-feature-3":
      "تصميم منخفض الطاقة: بطارية ليثيوم طويلة الأمد (أكثر من 10 سنوات).",
    "kashef-001-feature-4":
      "إعادة ضبط تلقائية: تعيد الضبط بعد إزالة الخطأ عبر استعادة الجهد، أو الأخطاء العابرة.",
    "kashef-001-feature-5":
      "إعادة ضبط المؤقت: يعيد ضبط الخطأ إذا مرت مدة زمنية محددة مسبقًا دون استعادة الطاقة لمنع حلقة إشارة لا نهائية.",
    "kashef-001-feature-6":
      "إعادة ضبط يدوية: إعادة الضبط عبر زر الاختبار/إعادة الضبط.",
    "kashef-001-feature-7":
      "سهولة التركيب: حامل خارجي للتركيب؛ مشابك استشعار حول كابلات الطاقة.",

    "kashef-201-title": "كاشف 201",
    "kashef-201-description":
      "كاشف EECC-SEFI هو مؤشر ذكي لخطأ التأريض مصمم لكابلات الطاقة تحت الأرض في أنظمة وحدة الحلقة الرئيسية (RMU). يكتشف ويحدد مواقع أخطاء التأريض (أخطاء الأرض)، ويعزز موثوقية شبكة الطاقة ويقلل من وقت التوقف مع القدرة على الاتصال عن بُعد بأنظمة SCADA والرسائل القصيرة.",
    "kashef-201-feature-1": "كشف دقيق للخطأ:",
    "kashef-201-feature-1-item-1": "خطأ التأريض (LED أحمر)",
    "kashef-201-feature-1-item-2": "فقدان الطاقة (LED أصفر)",
    "kashef-201-feature-1-item-3": "بطارية منخفضة (LED أزرق)",
    "kashef-201-feature-2": "واجهة سهلة الاستخدام:",
    "kashef-201-feature-2-item-1":
      "زر اختبار/إعادة ضبط للاختبار اليدوي وإعادة الضبط.",
    "kashef-201-feature-2-item-2": "وقت إعادة ضبط قابل للتعديل عبر مفاتيح DIP.",
    "kashef-201-feature-2-item-3": "إعدادات تيار خطأ متعددة المستويات.",
    "kashef-201-feature-3": "وظائف إعادة الضبط التلقائية:",
    "kashef-201-feature-3-item-1":
      "إعادة ضبط على أساس الوقت: يمسح الإنذار بعد فترة محددة إذا اختفى الخطأ.",
    "kashef-201-feature-3-item-2":
      "إعادة ضبط استعادة الطاقة: يعيد الضبط عند استعادة طاقة التيار المتردد.",
    "kashef-201-feature-3-item-3":
      "إعادة ضبط عابرة: يمسح الأخطاء تلقائيًا في غضون 10 ثوانٍ إذا ظل جهد الإمداد موجودًا.",
    "kashef-201-feature-4": "عمر بطارية طويل وصيانة سهلة:",
    "kashef-201-feature-4-item-1": "عمر بطارية أكثر من 10 سنوات.",
    "kashef-201-feature-4-item-2": "مصدر طاقة احتياطي خالٍ من الصيانة.",
    "kashef-201-feature-4-item-3": "استبدال البطارية بسهولة.",
    "kashef-201-feature-5": "تنبيهات الأعطال:",
    "kashef-201-feature-5-item-1": "مؤشرات LED تشير إلى الأعطال المختلفة.",
    "kashef-201-feature-5-item-2": "إشعارات SMS للتنبيهات في الوقت الفعلي.",
    "kashef-201-feature-5-item-3":
      "إشارات IEC104 يتم الوصول إليها من خلال عنوان IP للشريحة المثبتة.",
    "kashef-201-feature-6": "خيارات إعادة الضبط:",
    "kashef-201-feature-6-item-1": "إعادة ضبط تلقائية بناءً على إزالة الخطأ.",
    "kashef-201-feature-6-item-2": "إعادة ضبط يدوية عبر تطبيق Android، SCADA.",
    "kashef-201-feature-6-item-3":
      "إعادة ضبط المؤقت: يعيد ضبط الخطأ إذا مرت مدة زمنية محددة مسبقًا دون استعادة الطاقة لمنع حلقة إشارة لا نهائية.",

    "kashef-601-title": "كاشف 601",
    "kashef-601-description":
      "كاشف EECC-SFPI هو نظام متقدم لمؤشر الخطأ الهوائي مصمم لخطوط الطاقة حتى 70 كيلوفولت. يستخدم مستشعرات CT ووحدة تحكم دقيقة لاكتشاف الدوائر القصيرة وأخطاء التأريض، مما يحسن أوقات الاستجابة وموثوقية الشبكة.",
    "kashef-601-feature-1":
      "المراقبة في الوقت الفعلي: يتتبع تغيرات الموجة للكشف الدقيق عن الأخطاء.",
    "kashef-601-feature-2":
      "مؤشر خطأ مرئي: LED عالي السطوع بزاوية 360 درجة للرؤية نهارًا وليلًا.",
    "kashef-601-feature-3":
      "التركيب الجماعي: يتم تركيبه عادةً في مجموعات من 3، مع جهاز واحد يتعامل مع اتصال 4G.",
    "kashef-601-feature-4":
      "اتصال البلوتوث: يمكّن الاتصال المحلي بين الأجهزة والمشغلين لتبادل البيانات والتكوين.",
    "kashef-601-feature-5":
      "تعزيز سلامة توزيع الطاقة: يقلل من وقت التوقف، ويحسن كفاءة الصيانة، ويخفض تكاليف التشغيل.",
  },
  en: {
    translate: "العربية",

    //nav section
    "home-link": "Home",
    "about-link": "About",
    "products-link": "Products",
    "contact-link": "Contact us",

    //buttons
    "learn-more-btn": "Learn More",
    "download-data-sheet": "Download Data Sheet",
    "download-operation-manual": "Download Operation Manual",
    "watch-video": "Watch Video",
    "close:": "Close",

    //about us
    "about-title": "About Us",
    "about-text-1":
      "EECC was established to introduce cutting-edge AI and IoT technologies into the Smart Energy Monitoring Equipment sector. Aligned with Saudi Vision 2030’s objectives of technological advancement and innovation, we strive to contribute to the Kingdom’s technological progress.",
    "about-text-2":
      "We are honored to be recognized with the Made in Saudi registration certificate, a mark of our dedication to quality and national pride. Our innovative approach and reliable products have earned the trust of major industry players, including the Saudi Electricity Company (SEC). As a key supplier, we provide SEC with Advanced Smart Monitoring Systems, empowering them to maintain high standards of power distribution.",

    //pdlc section
    "pdlc-title": "Product Development Life Cycle (PDLC)",
    "pdlc-item-1": "Idea Generation",
    "pdlc-item-2": "Research and Opportunity Exploration",
    "pdlc-item-3": "Conceptualization",
    "pdlc-item-4": "Continuous Development",
    "pdlc-item-5": "Testing and Verification",
    "pdlc-item-6": "Launch",

    //products section
    "products-title": "Our Products",
    "product-title-1": "Fault Indicators",
    "product-title-2": "Smart Distribution Equipment",
    "product-title-3": "Smart Home Systems",
    "product-text-1":
      "Fault indicators are essential monitoring devices used in electrical power systems to detect and signal faults such as short circuits, ground faults, or overloads. These devices enhance grid reliability by quickly identifying fault locations, reducing downtime, and improving maintenance efficiency.",
    "product-text-2":
      "Smart distribution equipment enhances power grid efficiency, reliability, and automation by integrating advanced sensors, communication technologies, and AI-driven analytics. These devices enable real-time monitoring, fault detection, and remote control, optimizing energy distribution while reducing downtime and operational costs.",
    "product-text-3":
      "Smart home systems use interconnected devices and automation technology to enhance convenience, security, and energy efficiency. These systems allow remote control of lighting, climate, security, and appliances via mobile apps or voice assistants, creating a more comfortable and intelligent living environment.",

    //video section
    "doctors-section-title": "Product Demonstration",
    "kashef-101-video-author": '"Kashef 101" Smart Fault Indicator',

    //qhse ssection
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

    //contact section
    "contact-section-title": "• Contact Us •",
    "contact-name-label": "Name",
    "contact-email-label": "Email",
    "contact-phone-label": "Phone",
    "contact-message-label": "Message",
    "contact-submit-btn": "Submit",
    "contact-info-title": "Contact Information",
    "join-us-message": "❝ Pioneering Smart Energy Monitoring Solutions",

    //footer section
    "footer-contact-title": "Contact Us",
    "footer-quick-links-title": "Quick Links",
    "footer-quick-link-home": "Home",
    "footer-quick-link-about": "About Us",
    "footer-quick-link-products": "Our Products",
    "footer-quick-link-contact": "Contact Us",
    "footer-copyright": "©2024 Ekhtbarat Engineering. All rights reserved.",

    // Smart Home Solutions page translations
    "section-title-smart-home": "Smart Home Systems",
    "wifi-switches-title": "WIFI SWITCHES",
    "wifi-switches-description":
      "This smart switch with WIFI technology allows remote control of electrical devices through WIFI, making device management easier and enhancing the user experience",
    "wifi-switches-feature-1": "Remote control via WIFI network",
    "wifi-switches-feature-2": "Ease of installation and use",
    "wifi-switches-feature-3": "Support for programming and daily scheduling",
    "wifi-rf-switch-title": "SMART SWITCH WITH WIFI/RF TECHNOLOGY",
    "wifi-rf-switch-description":
      "The smart switch with WIFI-RF technology provides users with wireless control over electrical devices using both WIFI and RF technologies, offering flexibility and ease of use.",
    "wifi-rf-switch-feature-1":
      "Support for both RF and WIFI technologies for multiple control options",
    "wifi-rf-switch-feature-2":
      "Installation capability in hard-to reach locations",
    "wifi-rf-switch-feature-3":
      "Easy integration with home EECC Smart Home App",
    "wifi-rf-switch-feature-4": "Enhanced security through wireless control",

    // Fault Indicators page translations
    //kashef-101
    "section-title-fault-indicators": "Fault Indicators",
    "kashef-101-title": "KASHEF 101",
    "kashef-101-description":
      "The EECC-SFI is a Smart Fault Indicator designed for underground power cables in RMU systems. It detects earth faults and overcurrent faults, enhancing power network reliability and reducing downtime. The device uses electromagnetic induction and an intelligent MCU, with Wi-Fi and cellular communication (IEC104) for remote monitoring.",
    "kashef-101-feature-1": "Accurate Fault Detection:",
    "kashef-101-feature-1-item-1": "Earth Fault (Red LED)",
    "kashef-101-feature-1-item-2": "Short Circuit Fault (Phase Red LED)",
    "kashef-101-feature-1-item-3": "Power Loss (Yellow LED)",
    "kashef-101-feature-1-item-4": "Low Battery (Blue LED)",
    "kashef-101-feature-2":
      "Remote Communication: External bracket for mounting, sensor clamps for cables.",
    "kashef-101-feature-3":
      "Wi-Fi Web Server: Simplifies configuration and parameter settings.",
    "kashef-101-feature-4":
      "Automatic Reset: Resets after fault clearance via voltage restoration, or transient faults.",
    "kashef-101-feature-5":
      "Timer Reset: Resets the fault if a pre-defined time duration has passed without power restored to prevent end-less indication loop.",
    "kashef-101-feature-6": "Manual Reset: Reset via Test/Reset button.",
    "kashef-101-feature-7": "Remote Test/Reset: Via SCADA systems.",
    "kashef-101-feature-8":
      "Current Measurement: Zero-sequence & phase current monitoring via IEC104.",
    "kashef-101-feature-9":
      "Long Battery Life: Over 5 years, easily replaceable without tools.",
    "kashef-101-feature-10":
      "Easy Installation: External bracket for mounting, sensor clamps for cables.",
    //kashef-002
    "kashef-002-title": "KASHEF 002",
    "kashef-002-description":
      "The EECC-FI is a 3 phase Fault Indicator designed for underground power cables in RMU systems. It detects and locates earth faults and overcurrent faults, improving network reliability and reducing downtime. The device utilizes electromagnetic induction and an intelligent MCU with Wi-Fi-based configuration for easy setup.",
    "kashef-002-feature-1":
      "Accurate Fault Detection: Earth faults (Red LED), Short circuits (Phase Red LED), Power loss (Yellow LED), and Low battery (Blue LED).",
    "kashef-002-feature-2":
      "Wi-Fi Web Server: Simplifies configuration and parameter settings.",
    "kashef-002-feature-3":
      "Automatic Reset: Resets after fault clearance via voltage restoration, or transient faults.",
    "kashef-002-feature-4":
      "Timer Reset: Resets the fault if a pre-defined time duration has passed without power restored to prevent end-less indication loop.",
    "kashef-002-feature-5": "Manual Reset: Reset via Test/Reset button.",
    "kashef-002-feature-6":
      "Current Measurement: Supports zero-sequence and phase current monitoring via MODBUS RTU (RS-485).",
    "kashef-002-feature-7":
      "Energy-Efficient Design: Long-life lithium battery, replaceable without tools.",
    "kashef-002-feature-8":
      "Easy Installation: External bracket for mounting, sensor clamps for cables.",

    //kashef-001
    "kashef-001-title": "KASHEF 001",
    "kashef-001-description":
      "The EECC-EFI is an Earth Fault Indicator for underground network, designed to detect and locate earth faults in underground cables, enhancing power distribution reliability and reducing downtime.",
    "kashef-001-feature-1":
      "Accurate Fault Detection: Uses electromagnetic induction and microcontroller processing.",
    "kashef-001-feature-2":
      "LED Alarm Indicators: Red for earth fault, blue for low battery, yellow for power loss.",
    "kashef-001-feature-3":
      "Low Power Design: Long-lasting lithium battery (10+ years).",
    "kashef-001-feature-4":
      "Automatic Reset: Resets after fault clearance via voltage restoration, or transient faults.",
    "kashef-001-feature-5":
      "Timer Reset: Resets the fault if a pre-defined time duration has passed without power restored to prevent end-less indication loop.",
    "kashef-001-feature-6": "Manual Reset: Reset via Test/Reset button.",
    "kashef-001-feature-7":
      "Easy Installation: External bracket for mounting; sensor clamps around power cables.",

    //kashef-201
    "kashef-201-title": "KASHEF 201",
    "kashef-201-description":
      "The EECC-SEFI is a Smart Earth Fault Indicator designed for underground power cables in Ring Main Unit (RMU) systems. It detects and locates earth faults (ground faults), enhances power network reliability and reducing downtime with ability for remote communication to SCADA systems and SMS.",
    "kashef-201-feature-1": "Accurate Fault Detection:",
    "kashef-201-feature-1-item-1": "Earth Fault (Red LED)",
    "kashef-201-feature-1-item-2": "Power Loss (Yellow LED)",
    "kashef-201-feature-1-item-3": "Low Battery (Blue LED)",
    "kashef-201-feature-2": "User-Friendly Interface:",
    "kashef-201-feature-2-item-1":
      "Test/Reset button for manual testing & resetting.",
    "kashef-201-feature-2-item-2": "Adjustable reset time via DIP switches.",
    "kashef-201-feature-2-item-3": "Multi-level fault current settings.",
    "kashef-201-feature-3": "Automatic Reset Functions:",
    "kashef-201-feature-3-item-1":
      "Time-based Reset: Clears alarm after a set period if the fault is gone.",
    "kashef-201-feature-3-item-2":
      "Power Restoration Reset: Resets when AC power is restored.",
    "kashef-201-feature-3-item-3":
      "Transient Reset: Clears faults automatically within 10s if supply voltage remains present.",
    "kashef-201-feature-4": "Long Battery Life & Easy Maintenance:",
    "kashef-201-feature-4-item-1": "10+ years battery life.",
    "kashef-201-feature-4-item-2": "Maintenance-free backup power supply.",
    "kashef-201-feature-4-item-3": "Easy battery replacement.",
    "kashef-201-feature-5": "Fault Alerts:",
    "kashef-201-feature-5-item-1": "LED Indicators signal different faults.",
    "kashef-201-feature-5-item-2": "SMS Notifications for real-time alerts.",
    "kashef-201-feature-5-item-3":
      "IEC104 signals accessed through the installed SIM's IP address.",
    "kashef-201-feature-6": "Reset Options:",
    "kashef-201-feature-6-item-1": "Automatic Reset based on fault clearance.",
    "kashef-201-feature-6-item-2": "Manual Reset via Android App, SCADA.",
    "kashef-201-feature-6-item-3":
      "Timer Reset: Resets the fault if a pre-defined time duration has passed without power restored to prevent end-less indication loop.",

    //kashef-601
    "kashef-601-title": "KASHEF 601",
    "kashef-601-description":
      "The EECC-SFPI is an advanced overhead Fault Indicator system designed for power lines up to 70kV. It utilizes CT sensors and an MCU to detect short circuits and earth faults, improving response times and network reliability.",
    "kashef-601-feature-1":
      "Real-Time Monitoring: Tracks waveform changes for precise fault detection.",
    "kashef-601-feature-2":
      "Visible Fault Indication: 360° high-brightness LED for visibility day & night.",
    "kashef-601-feature-3":
      "Group Installation: Typically installed in sets of 3, with one device handling 4G communication.",
    "kashef-601-feature-4":
      "Bluetooth Connectivity: Enables local communication between devices and operators for data exchange & configuration.",
    "kashef-601-feature-5":
      "Enhanced Power Distribution Safety: Reduces downtime, improves maintenance efficiency, and lowers operational costs.",

    // Smart Distribution Products page translations
    //habes-71
    "section-title-smart-distribution": "Smart Distribution Systems",
    "kashef-701-title": "HABES 71",
    "kashef-701-description":
      "The EECC-DTSMS is an advanced monitoring solution designed to enhance the performance and reliability of distribution transformers. By continuously analyzing critical electrical parameters, it ensures power quality, minimizes losses, and assesses network health.",
    "kashef-701-feature-1":
      "Loss Detection: Identifies technical and non-technical losses, helping utilities reduce energy waste and optimize power distribution.",
    "kashef-701-feature-2":
      "Real-Time Data Processing: A smart MCU processes collected data, providing live analysis of network conditions.",
    "kashef-701-feature-3":
      "SCADA & Smart Meter Integration: Fully compatible with SCADA, enabling remote monitoring and advanced data analytics.",
    "kashef-701-feature-4": "Power Quality Monitoring",
    "kashef-701-feature-4-item-1":
      "Tracks voltage fluctuations, harmonics, power factor, and frequency variations.",
    "kashef-701-feature-4-item-2":
      "Identifies anomalies that could affect connected loads and system efficiency.",
    "kashef-701-feature-5": "Power Loss Analysis",
    "kashef-701-feature-5-item-1":
      "Detects technical & non-technical losses in the distribution network.",
    "kashef-701-feature-5-item-2":
      "Provides data-driven insights to minimize energy wastage and improve efficiency.",
    "kashef-701-feature-6": "Network Health Assessment",
    "kashef-701-feature-6-item-1":
      "Monitors transformer temperature, load conditions, and insulation status.",
    "kashef-701-feature-6-item-2":
      "Detects early signs of failures, enabling predictive maintenance to reduce downtime.",
    "kashef-701-feature-7": "Data Utilization & Communication",
    "kashef-701-feature-7-item-1":
      "Transmits real-time operational data to smart meters & SCADA systems.",
    "kashef-701-feature-7-item-2":
      "Enables fault detection, grid optimization, and advanced analytics for improved operational control.",

    //habes-81
    "kashef-81-title": "HABES 81",
    "kashef-81-description":
      "Protection relays are critical devices in electrical power systems designed to detect faults and abnormal conditions, such as overcurrent, overvoltage, and short circuits. They automatically isolate faulty sections of the network by triggering circuit breakers, preventing damage to equipment and minimizing outages.",
    "kashef-81-feature-1": "Self powered and maintenance free.",
    "kashef-81-feature-1-item-1":
      "Operates without an external power supply by drawing power from CT.",
    "kashef-81-feature-1-item-2":
      "Sealed, anti-interference design suitable for harsh environments.",
    "kashef-81-feature-2": "Advanced Protection Functions.",
    "kashef-81-feature-2-item-1":
      "Three-stage overcurrent protection with IEC-standard inverse curves.",
    "kashef-81-feature-2-item-2":
      "Two-stage zero-sequence (earth fault) protection.",
    "kashef-81-feature-2-item-3":
      "Inrush current blocking to prevent false tripping.",
    "kashef-81-feature-2-item-4":
      "Overload protection with configurable alarms or trip settings.",
    "kashef-81-feature-3": "High perfomance processing.",
    "kashef-81-feature-3-item-1":
      "Fast fault detection with short-data-window algorithms for rapid response.",
    "kashef-81-feature-3-item-2":
      "Supports both external and internal zero-sequence current sampling.",
    "kashef-81-feature-3-item-3":
      "Wide measurement range with auto dynamic scaling.",
    "kashef-81-feature-4": "User Friendly Interface.",
    "kashef-81-feature-4-item-1":
      "64x128 LCD display with multilingual support (Chinese/English).",
    "kashef-81-feature-4-item-2":
      "Event logging with up to 100 records stored in non-volatile memory.",
    "kashef-81-feature-4-item-3":
      "RS-485 communication with open protocols for integration.",
    "kashef-81-feature-5": "Robust Electrical & Mechanical Design.",
    "kashef-81-feature-5-item-1": "Wide operating temperature (-30°C to 70°C).",
    "kashef-81-feature-5-item-2":
      "IP54-rated enclosure for front and side panels, IP30 for the back panel.",
    "kashef-81-feature-5-item-3":
      "High resistance to electromagnetic interference, vibration, and shock.",
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