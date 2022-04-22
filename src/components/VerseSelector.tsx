import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface Props {
  verses: number;
  updateVerses: (arg: number[]) => void;
  isChapterChosen: boolean;
  isLoadingVerses: boolean;
}

function valuetext(value: number) {
  return `${value}°C`;
}

const VerseSelector: React.FC<Props> = ({
  verses,
  updateVerses,
  isChapterChosen,
  isLoadingVerses,
}) => {
  const [value, setValue] = React.useState<number[]>([1, 2]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  // useEffect(() => {
  //   updateVerses(value);
  // }, [value]);

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" style={{ fontWeight: 600 }} gutterBottom>
        Verses &nbsp;&nbsp;{value[0]} - {value[1]}
      </Typography>
      
      {isLoadingVerses ? (
        <Slider
          getAriaLabel={() => "Verses range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disabled={!isChapterChosen}
          getAriaValueText={valuetext}
          max={verses}
          min={1}
          color="primary"
        />
      ) : (
        <p>Loading...</p>
      )}

      <Button
        sx={{ mt: 1 }}
        variant="contained"
        disabled={!isChapterChosen}
        onClick={() => {
          console.log("setVerses->", value[0], " - ", value[1]);
          updateVerses(value);
        }}
      >
        Set Verses
      </Button>
    </Box>
  );
};

export default VerseSelector;
