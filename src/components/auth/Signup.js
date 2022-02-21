import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../store/auth-actions";
import Form from "./Form";

// MUI
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)`
  background-color: #343434;
  padding: 30px 40px;
  border-radius: 8px;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Signup = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmit = (formProps) => {
    dispatch(
      signup(formProps, () => {
        navigate("/dashboard", { replace: true });
      })
    );
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "85vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyledBox maxWidth="sm">
        <Typography
          variant="h5"
          sx={{
            marginBottom: "20px",
          }}
        >
          Sign up
        </Typography>
        <Form onSubmit={handleSubmit} label="Register" />

        {authState.errorMessage !== "" && (
          <p>Error: {authState.errorMessage}</p>
        )}
      </StyledBox>
    </Container>
  );
};

export default Signup;
