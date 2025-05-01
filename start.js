(function clickUncompletedLessonThenLetsGo() {
  const lessons = Array.from(document.querySelectorAll('div[data-testid="lesson_card"]'));

  const uncompleted = lessons.find(card => {
    const color = card.getAttribute('color')?.trim();
    const completedIcon = card.querySelector('div[data-testid="completed_check"] svg');
    return color !== '#FFFFFF' && !completedIcon;
  });

  if (!uncompleted) {
    console.warn('⚠️ ไม่พบ lesson ที่ยังไม่เรียน');
    return;
  }

  // คลิก lesson ที่ยังไม่เรียน
  uncompleted.scrollIntoView({ behavior: 'smooth', block: 'center' });
  uncompleted.click();
  console.log('✅ คลิก lesson ที่ยังไม่เรียน:', uncompleted.innerText.trim().split('\n')[0]);

  // รอแล้วคลิก Let's go!
  const waitForLetsGo = setInterval(() => {
    const btn = document.querySelector('button[data-testid="pop-up-card-cta"]');
    if (btn && btn.offsetParent !== null && !btn.disabled) {
      btn.click();
      console.log('🚀 คลิกปุ่ม "Let\'s go!" แล้ว');
      clearInterval(waitForLetsGo);
    }
  }, 300);
})();
