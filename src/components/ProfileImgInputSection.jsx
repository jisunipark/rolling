import StyledSection from './StyledSection';

const ProfileImgInputSection = ({ children }) => {
  return (
    <StyledSection>
      <label htmlFor="profileImgURL">{children}</label>
      <input type="file" id="profileImgURL" />
    </StyledSection>
  );
};

export default ProfileImgInputSection;
