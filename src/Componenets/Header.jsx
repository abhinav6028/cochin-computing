import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
    const headerMenu = [
        {
            name: 'About ',
            path: '/about'
        }

    ]

    // const path = usePathname()

    // <Box
    //     component="img"
    //     src='/Assets/user/userLogo.png'
    // />

    return (
        <Grid container sx={{
            justifyContent: "center", py: 2,
            position: "fixed",
            top: 0,
            left: 0, zIndex: 1000,
            bgcolor: '#FFF',
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }
        }}>
            <Grid container md={11.7} lg={11} sx={{ bgcolor: "", alignItems: 'center' }}>


                <Typography>logo</Typography>

                {
                    headerMenu?.map((data, index) =>

                        <Typography sx={{
                            px: { md: 2, lg: 4 },
                            fontSize: 17,
                            // color: data?.path == path ? PRIMARY_COLOR : 'rgba(128, 128, 128, 1)',
                            fontWeight: 'bold', fontFamily: 'outfit',
                            borderRight: '2px solid rgba(128, 128, 128, 1)', cursor: 'pointer'
                        }}>{data?.name}</Typography>

                    )
                }

                <Typography sx={{
                    px: { md: 2, lg: 4 },
                    fontSize: 17,
                    color: 'rgba(128, 128, 128, 1)',
                    fontWeight: 'bold', fontFamily: 'outfit',
                    borderRight: '2px solid rgba(128, 128, 128, 1)', cursor: 'pointer',
                }}
                // onClick={() => router.push('/dashboard')}
                >Dashboard</Typography>

                <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Typography
                        // onClick={() => router.push('/login')}
                        sx={{
                            color: "#808080",
                            fontSize: 15, fontWeight: 600, fontFamily: 'outfit',
                            mr: 4,
                            cursor: 'pointer'
                        }}>Login/sign up</Typography>

                    <Box
                        component="img"
                        src='/Assets/avatar.png'
                        sx={{ cursor: 'pointer' }}
                    />
                </Box>

            </Grid>
        </Grid >
    )
}
