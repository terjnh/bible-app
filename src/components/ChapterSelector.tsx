import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import MuiInput from "@mui/material/Input";
import MenuBookIcon from "@mui/icons-material/MenuBook";

interface Props {
  maxChapter: number;
  updateChapter: (arg: number) => void;
  isBookChosen: boolean;
  chapterChanged: () => void;
}

const Input = styled(MuiInput)`
  width: 42px;
`;

const ChapterSelector: React.FC<Props> = ({
  maxChapter,
  updateChapter,
  isBookChosen,
  chapterChanged,
}) => {
  const [chapter, setChapter] = useState(1);

  const handleSliderChange = (event: Event, newValue: any) => {
    setChapter(newValue);
    chapterChanged();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setChapter(event.target.value === "" ? "" : Number(event.target.value));
    setChapter(event.target.value as any);
  };

  const handleBlur = () => {
    if (chapter < 0) {
      setChapter(0);
    } else if (chapter > 100) {
      setChapter(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" style={{ fontWeight: 600 }} gutterBottom>
        <b>Chapter</b>
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <MenuBookIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof chapter === "number" ? chapter : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            disabled={!isBookChosen}
            min={1}
            max={maxChapter}
          />
        </Grid>
        <Grid item>
          <Input
            value={chapter}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: { maxChapter },
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        disabled={!isBookChosen}
        onClick={() => {
          updateChapter(chapter);
        }}
      >
        Set Chapter
      </Button>
    </Box>
  );
};

export default ChapterSelector;
