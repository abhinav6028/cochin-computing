import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BannerImage from '../LandingPage/BannerImage'

export default function About() {
    return (
        <Grid container sx={{
            mt: { xs: 7, sm: 8, md: 10, lg: 10 },
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Grid container lg={10} md={10} sm={11} xs={11} sx={{ justifyContent: 'space-evenly' }}>

                <Grid container lg={5} md={5} sm={10} xs={10} sx={{ bgcolor: 'red' }}>
                    <Grid container
                        component="img"
                        src='https://img.freepik.com/free-photo/closeup-business-woman-doing-online-banking_1262-2255.jpg?size=626&ext=jpg'
                    >

                    </Grid>

                </Grid>
                <Grid container lg={6} md={6} sm={10} xs={10} sx={{ bgcolor: '',alignItems:'center' }}>

                    <Grid container>
                        <Box sx={{
                            width: { xs: '80%', md: "60%", lg: '70%' },
                        }}>
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 20, md: 22, lg: 18 },
                                color: '', fontFamily: 'outfit',
                                lineHeight: 1.3,
                                my: { xs: 1.5, sm: 1, md: 2, lg: 2.5 },
                                // textShadow: '0 0 25px rgba(0, 0, 0, 1)'
                            }}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque senectus massa lobortis, scelerisque maecenas sagittis faucibus integer
                                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque senectus massa lobortis, scelerisque maecenas sagittis faucibus integer
                                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quis
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}
