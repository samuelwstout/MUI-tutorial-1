import "./styles.css";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function App() {
  const MyCustomButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2)
  }));

  return (
    <div className="App">
      <Typography variant="myVariant">This is my app</Typography>
      <Typography sx={{ color: "myCustomColor.superDark" }}>
        Hit the like button!
      </Typography>
      <MyCustomButton sx={{ p: 2 }} variant="contained">
        Hello from MUI v5
      </MyCustomButton>
    </div>
  );
}
