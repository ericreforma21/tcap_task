import { styled } from '@mui/system';
import { Grid, TextField as Input, FormControlLabel } from "@mui/material"
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';

export const BGContainer = styled('div') (({url}) => ({
  backgroundImage: `url('https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN')`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
}));

export const Container = styled('div')(({ activePage, theme }) => ({
  backgroundColor: '#FFF',
  borderRadius: '10px',
  maxWidth: activePage === '/login' ? 500 : 1000,
  margin: 'auto',
  padding: '20px 0',
  overflow: 'hidden',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  left: '50%',
  top: '50%',
  transition: 'max-width 0.2s ease-in-out',
  [theme.breakpoints.down("sm")]: {
    width: '100vw',
    position: 'relative',
    transform: 'none',
    left: 'auto',
    top: 'auto',
    marginTop: 50
  },
}));

export const TCAPlogo = styled('img') ({
  maxWidth: 300,
  height: 'auto',
  margin: 'auto',
  display: 'block',
  marginBottom: 25
});

export const Item = (props)=> <Grid item xs={12} sm={12} md={6}>{props.children}</Grid>
export const ItemFull = (props, {...rest})=> <Grid item xs={12} sm={12} md={12} {...rest}>{props.children}</Grid>

const InputField = ({...rest}) => <Input id="standard-basic" variant="standard" {...rest}/>

export const TextField = styled(InputField) ({
  width: '100%',
});

export const ErrorMsg = styled("p") ({
  color: 'red',
  fontSize: 12,
  margin: 0,
  height: 12,
})
export const OpenLinkIcon = styled(OpenInNewSharpIcon) ({
  fontSize: 18,
  position: 'relative',
  top: '5px',
});

export const TermsAndConditionContainer = styled(FormControlLabel) ({
  border: '1px dashed #a0aec0',
  borderRadius: 5,
  padding: 10,
  margin:'20px 0',
});

export const Wrapper = styled('div') (({activePage, height, theme}) => ({
  width: 1500,
  height: height,
  left: activePage === '/login' ? 0 : -500,
  position: 'relative',
  transition: 'all 0.2s ease-in-out',
  [theme.breakpoints.down("sm")]: {
    width: '200vw',
    left: activePage === '/login' ? 0 : '-100vw',
  },
}));

export const LoginContainer = styled('div') (({ theme }) => ({
  maxWidth: 500,
  display: 'inline-block',
  padding: '0 60px',
  [theme.breakpoints.down("sm")]: {
    width: '100vw',
    padding: '0 20px',
  },
}));

export const RegisterContainer = styled('div') (({ theme }) => ({
  width: 1000,
  display: 'inline-block',
  padding: '0 60px',
  [theme.breakpoints.down("sm")]: {
    width: '100vw',
    padding: '0 20px',
  },
}));