import { Typography, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Toolbar style={{ justifyContent: 'space-between' }}>
      <Typography
        variant="h4"
        color="primary"
        style={{
          textShadow: '1px 1px black, 2px 2px #fff',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        ‽&nbsp;
        <i>Q&A World</i>
      </Typography>
      <div>
        <Button
          onClick={() => navigate('/create-question')}
          variant="contained"
        >Ask Question</Button>
      </div>
    </Toolbar>
  );
}
