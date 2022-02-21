import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../store/auth/auth-actions";
import Form from "./Form";

// MUI
import { styled } from "@mui/material/styles";
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
  const [loading, setLoading] = useState(false);
  const authState = useSelector((state) => state.auth);

  const handleSubmit = async (formProps) => {
    setLoading(true);
    await dispatch(
      signup(formProps, () => {
        navigate("/dashboard", { replace: true });
      })
    );
    setLoading(false);
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
        <Form onSubmit={handleSubmit} loading={loading} label="Register" />

        {authState.errorMessage !== "" && (
          <p>Error: {authState.errorMessage}</p>
        )}
      </StyledBox>
    </Container>
  );
};

export default Signup;
