function matchAndClickPairs(onComplete) {
  const allItems = Array.from(document.querySelectorAll('.ex-btn.ex-btn--default'));

  const answers = allItems.filter(el => el.getAttribute('data-qa-type') === 'answer');
  const assets  = allItems.filter(el => el.getAttribute('data-qa-type') === 'asset');

  const assetMap = new Map();
  assets.forEach(el => {
    const val = el.getAttribute('data-qa-pass');
    if (val !== null) {
      assetMap.set(val, el);
    }
  });

  let pairIndex = 0;
  answers.forEach((el) => {
    const val = el.getAttribute('data-qa-pass');
    const match = assetMap.get(val);
    if (match) {
      setTimeout(() => {
        el.click();
        match.click();
        console.log(`✅ Matched & clicked pair with data-qa-pass=${val}`);

        if (pairIndex === answers.length - 1 && typeof onComplete === 'function') {
          setTimeout(onComplete, 300);
        }
      }, pairIndex * 500);
      pairIndex++;
    }
  });
}

function clickContinueButton() {
  const btn = document.querySelector('button.ex-feedback-bar__button');
  if (btn) {
    btn.click();
    console.log('✅ Clicked Continue button.');
  } else {
    console.warn('⚠️ Continue button not found.');
  }
}

// 🔁 รันจับคู่ และคลิกปุ่มต่อท้าย
matchAndClickPairs(clickContinueButton);
