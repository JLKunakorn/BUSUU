// 1. หาและคลิก span ที่มี data-qa-pass น้อยที่สุด
const wrapper = document.querySelector('.fillgap-dragdrop__options_wrapper');

if (wrapper) {
  const options = Array.from(wrapper.querySelectorAll('.ex-btn.ex-btn--default'));
  const sorted = options
    .map(el => ({
      el,
      val: parseInt(el.getAttribute('data-qa-pass'), 10)
    }))
    .filter(item => !isNaN(item.val))
    .sort((a, b) => a.val - b.val);

  if (sorted.length > 0) {
    sorted[0].el.click();
    console.log('✅ Clicked the option with lowest data-qa-pass:', sorted[0].val);

    // 2. คลิกปุ่ม Continue หลังจากคลิก span
    setTimeout(() => {
      const continueBtn = document.querySelector('button.ex-feedback-bar__button');
      if (continueBtn) {
        continueBtn.click();
        console.log('✅ Clicked Continue button.');
      } else {
        console.warn('⚠️ Continue button not found.');
      }
    }, 300); // รอ 300 มิลลิวินาทีก่อนคลิกปุ่ม
  } else {
    console.warn('⚠️ No spans with valid data-qa-pass found.');
  }
} else {
  console.warn('⚠️ Wrapper .fillgap-dragdrop__options_wrapper not found.');
}
