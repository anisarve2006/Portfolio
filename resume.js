  const resumeBtn = document.getElementById("resumeBtn");

  resumeBtn.addEventListener("click", () => {
      const link = document.createElement('a');
      link.href = '/resume/AGS_Resume.pdf';
      link.download = 'AGS_Resume.pdf';
      link.click();
  });
