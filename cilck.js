// 1. หา .ex-btn และเรียงตาม data-qa-pass
const exBtns = Array.from(document.querySelectorAll('.fillgap-dragdrop__options .ex-btn.ex-btn--default'));

const sorted = exBtns
  .map(el => ({
    el,
    val: parseInt(el.getAttribute('data-qa-pass'), 10)
  }))
  .filter(item => !isNaN(item.val))
  .sort((a, b) => a.val - b.val);

// 2. คลิกทีละอัน และคลิก Continue ตอนท้าย
sorted.forEach((item, index) => {
  setTimeout(() => {
    item.el.click();
    console.log(`✅ Clicked ex-btn with data-qa-pass=${item.val}`);
    
    // ถ้าเป็นตัวสุดท้าย → คลิกปุ่ม Continue
    if (index === sorted.length - 1) {
      setTimeout(() => {
        const continueBtn = document.querySelector('button.ex-feedback-bar__button');
        if (continueBtn) {
          continueBtn.click();
          console.log('✅ Clicked Continue button.');
        } else {
          console.warn('⚠️ Continue button not found.');
        }
      }, 300); // รอหลังจากคลิกสุดท้ายอีกนิด
    }
  }, index * 300); // หน่วงระหว่างคลิกแต่ละปุ่ม
});
