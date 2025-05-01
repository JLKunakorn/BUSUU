function clickCorrectThenContinue() {
  const correctBtn = document.querySelector('button[data-qa-pass="true"]');

  if (!correctBtn) {
    console.warn('⚠️ ไม่พบปุ่มที่มี data-qa-pass="true"');
    return;
  }

  // คลิกคำตอบที่ถูกต้อง
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  correctBtn.dispatchEvent(clickEvent);
  console.log('✅ คลิกคำตอบที่ถูกต้อง:', correctBtn.innerText.trim());

  // รอ 300ms แล้วคลิกปุ่ม Continue
  setTimeout(() => {
    const continueBtn = document.querySelector('div.sc-fcyAHI button.ex-feedback-bar__button');
    if (continueBtn) {
      continueBtn.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      console.log('✅ คลิกปุ่ม Continue แล้ว');
    } else {
      console.warn('⚠️ ไม่พบปุ่ม Continue');
    }
  }, 300);
}

clickCorrectThenContinue();

