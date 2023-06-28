import React, { useState } from "react";
import { Box, styled } from "@mui/system";

import theme from "../../../theme/index";
import MuiTypography from "../../atoms/RampCardTypography";
import MuiButton from "../../atoms/RampCardButton";
import Plus from "/public/assets/icons/plusInBlueColor.svg";
import MuiIcons from "../../atoms/RampCardIcon";
import Cancel from "../../../../public/assets/icons/cross.svg";
import TextFieldWithLabel from "../../molecules/TextFeildWithLabel";
import {
  RAMP_CATEGORTY_LABEL,
  RAMP_CATEGORTY_PLACEHOLDER,
  ICON_NOT_FOUND,
  RAMP_CATEGORTY_BUTTON,
} from "../../../utils/constants";

export const Stack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "36px",
  order: 1,
  maxWidth: "516px",
  maxHeight: "550px",
  overflowY: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    width: "0.4em",
    height: "0.4em",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
});

export const TextStack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  paddingTop: "16px",
 paddingLeft: "20px",
  maxWidth: "400px",
  paddingRight: "88px",
});

export const ComponentStack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  paddingBottom: "101px",
});

interface RampProps {
  setBool?: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FormValues {
  [key: string]: string;
}
const CreateRampCategoryBody = ({ setBool }: RampProps) => {
  const [formValues, setFormValues] = useState<FormValues>({
    ["Field 1"]: "",
    ["Field 2"]: "",
    ["Field 3"]: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    formValues[name] = value;
    const updatedFormValues = { ...formValues };
    setFormValues(updatedFormValues);
    setBool?.(!Object.values(formValues).some((value) => value !== ""));
    localStorage.setItem("formValues", JSON.stringify(formValues));
  };
  
  const [components, setComponents] = useState<JSX.Element[]>([
    <TextFieldWithLabel
      key={1}
      name="Field 1"
      onChange={handleChange}
      label={RAMP_CATEGORTY_LABEL}
      placeholder={RAMP_CATEGORTY_PLACEHOLDER}
      icon={
        <Box onClick={() => handleClick("Field 1")}>
          <MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />
        </Box>
      }
      sx={{ maxWidth: "360px" }}
    />,
    <TextFieldWithLabel
      key={2}
      name="Field 2"
      onChange={handleChange}
      label={RAMP_CATEGORTY_LABEL}
      placeholder={RAMP_CATEGORTY_PLACEHOLDER}
      icon={
        <Box onClick={() => handleClick("Field 2")}>
          <MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />
        </Box>
      }
      sx={{ maxWidth: "360px" }}
    />,
    <TextFieldWithLabel
      key={3}
      name="Field 3"
      onChange={handleChange}
      label={RAMP_CATEGORTY_LABEL}
      placeholder={RAMP_CATEGORTY_PLACEHOLDER}
      icon={
        <Box onClick={() => handleClick("Field 3")}>
          <MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />
        </Box>
      }
      sx={{ maxWidth: "360px" }}
    />,
  ]);

  const handleClick = (fieldName: string) => {
    const newComponents = components.filter(
      (component) => component.props.name !== fieldName
    );
    const updatedFormValues = { ...formValues };
    delete updatedFormValues[fieldName];
    setComponents(newComponents);
    setFormValues(updatedFormValues);
  };

  const addComponent = () => {
    const newComponents = [
      ...components,
      <TextFieldWithLabel
        key={components.length + 1}
        name={`Field ${components.length + 1}`}
        onChange={handleChange}
        label={RAMP_CATEGORTY_LABEL}
        placeholder={RAMP_CATEGORTY_PLACEHOLDER}
        icon={
          <Box onClick={() => handleClick(`Field ${components.length + 1}`)}>
            <MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />
          </Box>
        }
        sx={{ maxWidth: "360px" }}
      />,
    ];
    setFormValues({ ...formValues, [`Field ${components.length + 1}`]: "" });
    setComponents(newComponents);
  };

  return (
    <Stack>
      <ComponentStack>
        {components.map((component) => (
          <div key={component.key}>{component}</div>
        ))}
        <MuiButton
          text={
            <MuiTypography
              text={RAMP_CATEGORTY_BUTTON}
              sx={{ color: theme.palette.primary[500] }}
            />
          }
          startIcon={<MuiIcons src={Plus} alt={"ICON_NOT_FOUND"} />}
          variant="text"
          onClick={addComponent}
        />
      </ComponentStack>
    </Stack>
  );
};

export default CreateRampCategoryBody;
