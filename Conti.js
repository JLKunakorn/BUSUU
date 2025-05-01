const continueBtn = document.querySelector('button.ex-feedback-bar__button');

if (continueBtn) {
  continueBtn.click();
  console.log('✅ Clicked Continue button.');
} else {
  console.warn('⚠️ Continue button not found.');
}
