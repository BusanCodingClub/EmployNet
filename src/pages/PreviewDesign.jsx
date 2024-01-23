import { PrimaryButton, SecondaryButton } from "../components/Button/Button";
import CenteredContainer from "../components/container";

const PreviewDesign = () => {
  return (
    <CenteredContainer>
      <div>
        <h1>Preview Design</h1>
      </div>
      <div className="grid grid-cols-3 place-items-center">
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </div>
    </CenteredContainer>
  );
};
export default PreviewDesign;
