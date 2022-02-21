import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Container
      maxWidth="false"
      sx={{
        position: "fixed",
        bottom: 0,
        textAlign: "center",
      }}
    >
      <Typography variant="p">PPT</Typography>
    </Container>
  );
};

export default Footer;
