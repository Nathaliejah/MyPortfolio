import { Avatar, Box, Button, Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

// Use a URL for the profile picture
const profilePicUrl = 'Nathalie.png.png'; // Replace with your actual image URL

const ProfileContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const AboutContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ContactContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

function Dashboard() {
  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1">
          My portfolio .
        </Typography>
      </Box>

      <ProfileContainer>
        <Avatar
          alt="Nathalie Juagpao"
          src={profilePicUrl}
          sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
        />
        <Typography variant="h5" component="h2" gutterBottom>
          Nathalie Juagpao
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: Nathaliejuagpao@email.com
        </Typography>
        <Typography variant="body1">
          A passionate developer with experience in USTP.
        </Typography>
      </ProfileContainer>

      <AboutContainer>
        <Typography variant="h5" component="h2" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          I am a software developer with a strong background in web development, particularly in building responsive and user-friendly interfaces using React and Material-UI. I have worked on various projects that involve creating dynamic and interactive web applications.
        </Typography>
      </AboutContainer>

      <ContactContainer>
        <Typography variant="h5" component="h2" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you would like to get in touch, please feel free to reach out to me via email or phone.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: contact@example.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: (123) 456-7890
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Send a Message
        </Button>
      </ContactContainer>
    </Container>
  );
}

export default Dashboard;
