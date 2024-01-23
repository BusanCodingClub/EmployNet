import { PrimaryButton, SecondaryButton } from "../components/Button/Button";
import CenteredContainer from "../components/container";

const PreviewDesign = () => {
  return (
    <CenteredContainer>
      <h1>Preview Design</h1>
      <div>
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </div>
    </CenteredContainer>
  );
};
export default PreviewDesign;
