function clickLettersThenContinue() {
  // 1. หา div.ex-btn ที่มี class "ex-btn--space"
  const letters = Array.from(document.querySelectorAll('.ex-btn.ex-btn--space'));

  // 2. แม็ปและเรียงลำดับตาม data-qa-pass
  const sorted = letters
    .map(el => ({
      el,
      val: parseInt(el.getAttribute('data-qa-pass'), 10)
    }))
    .filter(item => !isNaN(item.val))
    .sort((a, b) => a.val - b.val);

  // 3. คลิกทีละตัวแบบเรียงลำดับ
  sorted.forEach((item, index) => {
    setTimeout(() => {
      item.el.click();
      console.log(`✅ คลิกตัว: ${item.el.innerText.trim()} (pass=${item.val})`);

      // หลังคลิกตัวสุดท้าย → คลิก Continue
      if (index === sorted.length - 1) {
        setTimeout(() => {
          const continueBtn = document.querySelector('button.ex-feedback-bar__button');
          if (continueBtn) {
            continueBtn.click();
            console.log('✅ คลิกปุ่ม Continue แล้ว');
          } else {
            console.warn('⚠️ ไม่พบปุ่ม Continue');
          }
        }, 300);
      }
    }, index * 300);
  });
}

clickLettersThenContinue();
