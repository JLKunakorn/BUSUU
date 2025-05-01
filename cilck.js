// 1. หา .ex-btn ทั้งหมดที่อยู่ใน .fillgap-dragdrop__options
const exBtns = Array.from(document.querySelectorAll('.fillgap-dragdrop__options .ex-btn.ex-btn--default'));

// 2. เรียงตามค่า data-qa-pass
const sorted = exBtns
  .map(el => ({
    el,
    val: parseInt(el.getAttribute('data-qa-pass'), 10)
  }))
  .filter(item => !isNaN(item.val))
  .sort((a, b) => a.val - b.val);

// 3. คลิกทีละปุ่มแบบเรียงลำดับ
sorted.forEach((item, index) => {
  setTimeout(() => {
    item.el.click();
    console.log(`✅ Clicked ex-btn with data-qa-pass=${item.val} | Text: "${item.el.innerText}"`);
  }, index * 300); // หน่วงเวลาระหว่างคลิก
});
