// ฟังก์ชัน 1: คลิก ex-btn ตาม data-qa-pass
function clickExBtnsInOrder(onComplete) {
  const exBtns = Array.from(document.querySelectorAll('.fillgap-dragdrop__options .ex-btn.ex-btn--default'));

  const sorted = exBtns
    .map(el => ({
      el,
      val: parseInt(el.getAttribute('data-qa-pass'), 10)
    }))
    .filter(item => !isNaN(item.val))
    .sort((a, b) => a.val - b.val);

  sorted.forEach((item, index) => {
    setTimeout(() => {
      item.el.click();
      console.log(`✅ Clicked ex-btn with data-qa-pass=${item.val}`);

      // ถ้าคลิกตัวสุดท้ายแล้ว ให้เรียกฟังก์ชัน onComplete
      if (index === sorted.length - 1 && typeof onComplete === 'function') {
        setTimeout(onComplete, 300);
      }
    }, index * 300);
  });
}

// ฟังก์ชัน 2: คลิกปุ่ม Continue
function clickContinueButton() {
  const continueBtn = document.querySelector('button.ex-feedback-bar__button');
  if (continueBtn) {
    continueBtn.click();
    console.log('✅ Clicked Continue button.');
  } else {
    console.warn('⚠️ Continue button not found.');
  }
}

// เรียกใช้งาน: คลิก ex-btn แล้วตามด้วย Continue
clickExBtnsInOrder(clickContinueButton);
