// 지선

const CreateMessagePage = () => {
  return (
    <div>
      <label htmlFor="sender">From.</label>
      <input type="text" id="sender" />
      <br />
      <br />

      <label htmlFor="profileImgURL">프로필 이미지</label>
      <input type="file" id="profileImgURL" />
      <br />
      <br />

      <label htmlFor="relationship">상대와의 관계</label>
      <select id="relationship">
        <option value="friend">친구</option>
        <option value="acquaintance">지인</option>
        <option value="coworker">동료</option>
        <option value="family">가족</option>
      </select>
      <br />
      <br />

      <label htmlFor="content">내용을 입력해 주세요</label>
      <textarea id="content" />
      <br />
      <br />

      <label htmlFor="font">폰트 선택</label>
      <select id="font">
        <option value="noto-sans">Noto Sans</option>
        <option value="pretendard">Pretendard</option>
        <option value="나눔명조">나눔명조</option>
        <option value="나눔손글씨-손편지체">나눔손글씨 손편지체</option>
      </select>
      <br />
      <br />

      <input type="submit" />
    </div>
  );
};

export default CreateMessagePage;
