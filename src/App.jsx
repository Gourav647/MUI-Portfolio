import React, { useContext } from 'react'
import './App.css'
import { Container, createTheme, CssBaseline, Stack, Table, ThemeProvider } from '@mui/material'
import './assets/Css/All.css'
import Navbar from './Components/Layout/Navbar/Navbar'
import { blue, grey } from '@mui/material/colors'
import LeftNav from './Components/Layout/LeftNav/LeftNav'
import TabPanel from '@mui/lab/TabPanel'
import { Context } from './Context/Context'
import { TabContext } from '@mui/lab'
import Home from './Components/Layout/Home/Home'

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0277bd",
      dark: blue[500]
    },
    secondary: {
      main: "#4a148c"
    },
    success: {
      main: "#00c853"
    },
    text: {
      main: "#ffffff"
    },
    error: {
      main: "#FF0033"
    },
    text: {
      dark: grey[900],
      main: grey[600]
    },
    button: {
      dark: grey.A400,
      main: grey[300]
    }
  }
})
const App = () => {
  const { value } = useContext(Context)
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='App'>
        <Stack direction='column' width="100%">
          <Navbar />
          <Stack direction='row'>
            <TabContext value={value}>

              <Container maxWidth="sm">
                <TabPanel value={0} >
                  <LeftNav />
                  <Home />
                </TabPanel>
                <TabPanel value={1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum deserunt impedit. Assumenda, mollitia ipsam asperiores ea explicabo accusamus incidunt doloribus perspiciatis alias recusandae eius, nam iste ex quod quo?
                </TabPanel>
                <TabPanel value={2}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis atque quod eligendi voluptatum fugiat qui commodi modi, ipsam, vitae consequatur nulla id amet rem reiciendis nesciunt suscipit architecto perferendis ullam.
                  Dolor eos architecto alias temporibus iste obcaecati odio aliquam! Quos sequi illum officiis aliquid molestiae, quae cumque amet dolorem est iure doloremque totam, illo veniam voluptas culpa ea? Vel, ullam.
                </TabPanel>
              </Container>
            </TabContext>
          </Stack>
        </Stack>
      </div>
    </ThemeProvider>
  )
}

export default App
