import React from 'react';
import { Box, Button, Grid, styled, TextField, Tooltip, Typography } from '@mui/material';
import Copyright from '../component/Copyright';

const copy = (text: string) => {
  navigator.clipboard.writeText(text)
}

const ContactBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover img': {
    transform: 'rotate(360deg)',
    transition: 'transform 1s'
  }
});

const submit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const content = formData.get('content') as string;

  fetch('https://enmmmmovo.cloudns.be/contact/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name: name, email: email, content: content })
  }).then((res) => {
    if (res.status === 200) alert('Message Sent Successfully!');
    else throw new Error('Message Sent Failed!');
  }).catch((err) => console.log(err))
}

const ContactPage: React.FC = () => {
  return (
    <Box sx={{
      height: 'calc(100vh - 80px)',
      width: '100%',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Box>
        <Typography sx={{ fontSize: 50, fontFamily: 'Arial', fontWeight: 600, textAlign: 'center' }}>
          Want to get in touch?
        </Typography>
      </Box>
      <Box width='100%'>
        <Grid container mb={4} mt={4}>
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRight: '1px solid white',
            '@media (max-width: 900px)': {
              borderRight: 'none',
            }
          }}>
            <div>
              <Typography sx={{ fontSize: 16, fontFamily: 'Arial', textAlign: 'center', fontWeight: 600  }}>
                Contact me though these...
              </Typography>
              <Tooltip title="Click to jump to my Github Page" placement="top">
                <ContactBox mt={4} onClick={() => window.open('https://github.com/enmmmmovo', '_blank')}>
                  <img src='/static/images/logo/github.svg' style={{ height: '40px' }} alt="github icon"/>
                  <Typography sx={{color: "white", ml: 2}}>EnmmmmOvO</Typography>
                </ContactBox>
              </Tooltip>
              <Tooltip title="Click to Copy Wechat Number to Clipboard" placement="top">
                <ContactBox mt={2} onClick={() => copy('wjh20000218')}>
                  <img src='/static/images/logo/wechat.svg' style={{ height: '40px' }} alt="wechat icon"/>
                  <Typography sx={{color: "white", ml: 2}}>wjh20000218</Typography>
                </ContactBox>
              </Tooltip>
              <Tooltip title="Click to Copy Email Address to Clipboard" placement="top">
                <ContactBox mt={2} onClick={() => copy('wangjinghan0218@gmail.com')}>
                  <img src='/static/images/logo/email.svg' style={{ height: '40px' }} alt="email icon"/>
                  <Typography sx={{color: "white", ml: 2}}>wangjinghan0218@gmail.com</Typography>
                </ContactBox>
              </Tooltip>
              <Tooltip title="Not available at the moment ~ " placement="top">
                <ContactBox mt={2}>
                  <img src='/static/images/logo/linkedin.svg' style={{ height: '40px' }} alt="linkedin icon"/>
                  <Typography sx={{color: "white", ml: 2}}></Typography>
                </ContactBox>
              </Tooltip>
            </div>
          </Grid>
          <Grid item xs={12} md={6} p={3}>
             <Typography sx={{ fontSize: 16, fontFamily: 'Arial', textAlign: 'center', fontWeight: 600  }}>
               Or leave me a message here...
             </Typography>
            <form onSubmit={submit}>
              <TextField
                variant="outlined"
                fullWidth
                label="Your Perferred Name"
                name='name'
                InputLabelProps={{
                  style: {color: '#fff'},
                }}
                inputProps={{
                  style: {
                    color: '#fff',
                    borderColor: 'rgba(255, 255, 255, 1)',
                  }
                }}
                sx={{
                  mt: 4,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 1)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff',
                    },
                  },
                }}
              />
              <TextField
                variant="outlined"
                fullWidth
                name='email'
                label="Your Email"
                InputLabelProps={{
                  style: {color: '#fff'},
                }}
                inputProps={{
                  style: {
                    color: '#fff',
                    borderColor: 'rgba(255, 255, 255, 1)',
                  }
                }}
                sx={{
                  mt: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 1)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff',
                    },
                  },
                }}
              />
              <TextField
                variant="outlined"
                fullWidth
                rows={5}
                multiline
                name='content'
                label="Content"
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                inputProps={{
                  style: {
                    color: '#fff',
                    borderColor: 'rgb(255, 255, 255)',
                  }
                }}
                sx={{
                  mt: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgb(255, 255, 255)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgb(255, 255, 255)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff',
                    },
                    '& textarea': {
                      color: '#fff',
                    },
                  },
                }}
              />
              <Button variant="contained" sx={{ mt: 2, width: '100%' }} type="submit">Send</Button>
            </form>
          </Grid>
        </Grid>
      </Box>
      <Copyright/>
    </Box>
  );
}

export default ContactPage;