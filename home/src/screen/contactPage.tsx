import React, { useContext, useState } from 'react';
import { Box, Button, Grid, styled, TextField, Tooltip, Typography } from '@mui/material';
import Copyright from '../component/Copyright';
import { LanguageContext } from '../context/LanguageContext';
import { SERVER_URL } from '../webConfig';

const ContactBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover img': {
    transform: 'rotate(360deg)',
    transition: 'transform 1s'
  }
});

const ContactPage: React.FC = () => {
  const { content } = useContext(LanguageContext);
  const [email, setEmail] = useState<boolean>(false);
  const [emailAddress, setEmailAddress] = useState<string>(content.copyEmail as string);
  const [wechat, setWechat] = useState<string>(content.copyWechat as string);

  const wechatSuccess = () => {
    navigator.clipboard.writeText('wjh20000218')
      .then(() => setWechat(content.copyWechatSuccess as string))
      .catch((err) => console.log(err));
  }

  const emailSuccess = () => {
    navigator.clipboard.writeText('wangjinghan0218@gmail.com')
      .then(() => setEmailAddress(content.copyEmailSuccess as string))
      .catch((err) => console.log(err));
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const content = formData.get('content') as string;

    fetch(`${SERVER_URL}contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name: name, email: email, content: content })
    }).then((res) => {
      if (res.status === 200) {
        setEmail(true);
        setTimeout(() => setEmail(false), 5000)
      }
      else throw new Error('Message Sent Failed!');
    }).catch((err) => console.log(err))

    e.currentTarget.reset();
  }

  return (
    <Box sx={{
      height: 'calc(100vh - 80px)',
      width: '100%',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      overflowY: 'auto',
    }}>
      <Box>
        <Typography sx={{
          fontSize: 50,
          fontFamily: 'Arial',
          fontWeight: 600,
          textAlign: 'center',
          '@media (max-width: 959px)': {
            marginTop: '300px',
          }
        }}>
          {content.wtgit}
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
                {content.ctmt}
              </Typography>
              <Tooltip title={content.jumpGithub} placement="top">
                <ContactBox mt={4} onClick={() => window.open('https://github.com/enmmmmovo', '_blank')}>
                  <img src='/static/images/logo/github.svg' style={{ height: '40px' }} alt="github icon"/>
                  <Typography sx={{color: "white", ml: 2}}>EnmmmmOvO</Typography>
                </ContactBox>
              </Tooltip>
              <Tooltip title={wechat} placement="top" onMouseLeave={() => setWechat(content.copyWechat as string)}>
                <ContactBox mt={2} onClick={wechatSuccess}>
                  <img src='/static/images/logo/wechat.svg' style={{ height: '40px' }} alt="wechat icon"/>
                  <Typography sx={{color: "white", ml: 2}}>wjh20000218</Typography>
                </ContactBox>
              </Tooltip>
              <Tooltip title={emailAddress} placement="top" onMouseLeave={() => setEmailAddress(content.copyEmail as string)}>
                <ContactBox mt={2} onClick={emailSuccess}>
                  <img src='/static/images/logo/email.svg' style={{ height: '40px' }} alt="email icon"/>
                  <Typography sx={{color: "white", ml: 2}}>wangjinghan0218@gmail.com</Typography>
                </ContactBox>
              </Tooltip>
              <Tooltip title={content.jumpLinkedin} placement="top">
                <ContactBox mt={2} onClick={() => window.open('https://www.linkedin.com/in/wang-jinghan-722144309/')}>
                  <img src='/static/images/logo/linkedin.svg' style={{ height: '40px' }} alt="linkedin icon"/>
                  <Typography sx={{color: "white", ml: 2}}>Jinghan Wang</Typography>
                </ContactBox>
              </Tooltip>
            </div>
          </Grid>
          <Grid item xs={12} md={6} p={3}>
             <Typography sx={{ fontSize: 16, fontFamily: 'Arial', textAlign: 'center', fontWeight: 600  }}>
               {content.leaveMessage}
             </Typography>
            <form onSubmit={submit}>
              <TextField
                variant="outlined"
                fullWidth
                label={content.preferredName}
                name='name'
                InputLabelProps={{
                  style: {color: '#fff'},
                }}
                inputProps={{
                  maxLength: 200,
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
                label={content.email}
                InputLabelProps={{
                  style: {color: '#fff'},
                }}
                inputProps={{
                  maxLength: 200,
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
                label={content.content}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                inputProps={{
                  maxLength: 10000,
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
              <Button variant="contained" sx={{ mt: 2, width: '100%' }} type="submit">{content.send}</Button>
              {email && <Typography sx={{ mt: 1, textAlign: 'center' }}>{content.messageSuccess}</Typography>}
            </form>
          </Grid>
        </Grid>
      </Box>
      <Copyright/>
    </Box>
  );
}

export default ContactPage;