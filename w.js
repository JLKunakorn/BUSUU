(function typeAndClickCheckImmediately() {
  const input = document.querySelector('input.ex-typing__input');
  if (!input) return console.warn('⚠️ ไม่พบ input');

  const answer = input.getAttribute('data-qa-pass');
  if (!answer) return console.warn('⚠️ ไม่พบคำตอบใน data-qa-pass');

  input.focus();

  // React-compatible value setter
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  ).set;

  // พิมพ์คำตอบแบบทีเดียว
  nativeInputValueSetter.call(input, answer);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  console.log(`✅ พิมพ์คำตอบแล้ว: "${answer}"`);

  // รอให้ปุ่ม Check เปิด แล้วคลิก
  const checkBtn = document.querySelector('button[data-testid="check_button"]');
  if (!checkBtn) return console.warn('⚠️ ไม่พบปุ่ม Check');

  const waitAndClick = setInterval(() => {
    if (!checkBtn.disabled) {
      checkBtn.click();
      console.log('✅ คลิกปุ่ม Check แล้ว');
      clearInterval(waitAndClick);
    } else {
      console.log('⏳ รอให้ปุ่ม Check เปิด...');
    }
  }, 200);
})();
