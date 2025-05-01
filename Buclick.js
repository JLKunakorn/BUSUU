function clickExBtnsInOrder(onComplete) {
  const exBtns = Array.from(document.querySelectorAll('.fillgap-dragdrop__options .ex-btn.ex-btn--default'));

  if (exBtns.length === 0) {
    console.warn('❌ ไม่พบ ex-btn ที่จะคลิก');
    return;
  }

  const sorted = exBtns
    .map(el => ({
      el,
      val: parseInt(el.getAttribute('data-qa-pass'), 10)
    }))
    .filter(item => !isNaN(item.val))
    .sort((a, b) => a.val - b.val);

  console.log(`📋 พบ ${sorted.length} ปุ่ม ex-btn และจะเริ่มคลิกเรียงตาม data-qa-pass`);

  sorted.forEach((item, index) => {
    setTimeout(() => {
      item.el.click();
      console.log(`✅ คลิก ex-btn (data-qa-pass=${item.val}) — "${item.el.innerText.trim()}"`);

      if (index === sorted.length - 1 && typeof onComplete === 'function') {
        setTimeout(onComplete, 300);
      }
    }, index * 300);
  });
}

function clickContinueButton() {
  const continueBtn = document.querySelector('button.ex-feedback-bar__button');
  if (continueBtn) {
    continueBtn.click();
    console.log('🟢 คลิกปุ่ม Continue แล้ว');
  } else {
    console.warn('❌ ไม่พบปุ่ม Continue');
  }
}

// เริ่มทำงาน
clickExBtnsInOrder(clickContinueButton);
