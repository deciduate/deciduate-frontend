import React from 'react';

function FileDownloader() {
  const handleDownload = () => {
    // 파일 다운로드를 위한 서버 URL
    const fileUrl = 'http://haksa.hufs.ac.kr/manual/H2/H2_2024-1-manual.xls';

    // AJAX 요청 또는 fetch API를 사용하여 파일 다운로드
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        // Blob을 URL로 변환
        const url = window.URL.createObjectURL(blob);

        // 가상의 링크 생성
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '수강유의과목.xls');

        // 클릭 이벤트 발생시키고 링크 제거
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('파일 다운로드 중 오류가 발생했습니다:', error);
      });
  };

  return (
    <div>
      <button onClick={handleDownload}>수강유의과목 엑셀 다운로드</button>
    </div>
  );
}

export default App;
