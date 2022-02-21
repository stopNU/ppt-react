import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Welcome = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        <Typography variant="h2">Welcome</Typography>
      </Box>
    </Container>
  );
};

export default Welcome;
