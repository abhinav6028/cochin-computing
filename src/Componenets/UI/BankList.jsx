import { Grid, Typography, Box, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModalPopUp from './ModalPopUp';
// import { Table } from 'react-bootstrap';

export default function BankList({ condition }) {
    const [startingItem, setStartingItem] = useState(0)
    const [endingItem, setEndingItem] = useState(4)

    const DATA1 = [
        {
            place: 'Okhla, Delhi',
            itemName: 'Eranamkulam',
            items: '(edapalli,palarivattom)',
            offerPrice: '399',
            oldPrice: '1299',
            rating: '4.3',
            off: "70",
            expiringInDays: 1,
        },
        {
            place: 'Okhla, Delhi',
            itemName: 'Eranamkulam',
            items: '(edapalli,palarivattom)',
            offerPrice: '399',
            oldPrice: '1299',
            rating: '4.3',
            off: "70",
            expiringInDays: 1,
        },

    ]

    const [shoWPopUp, setShowpopUp] = useState(false)

    const [emiData, setemiData] = useState([])

    console.log("ssss..............", emiData);

    const handleDelete = (index) => {
        const updatedData = emiData.filter((_, i) => i !== index);
        setemiData(updatedData);
    };


    return (
        <Grid container sx={{ justifyContent: '', bgcolor: '#f5f7f8' }}>

            {
                shoWPopUp ? <ModalPopUp
                    setemiData={setemiData}
                    emiData={emiData}
                    setShowpopUp={setShowpopUp} /> : ''
            }

            <Grid container justifyContent="center" sx={{ my: 2 }}>

                <Grid container lg={8}>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    <TableCell>Amount</TableCell>
                                    <TableCell align="right">interest</TableCell>
                                    <TableCell align="right">duration</TableCell>
                                    <TableCell align="right">emi</TableCell>
                                    <TableCell align="right">Action</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {emiData.map((data, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{data?.amount} </TableCell>
                                        <TableCell align="right">{data?.interest}</TableCell>
                                        <TableCell align="right">{data?.duration}</TableCell>
                                        <TableCell align="right">{data?.emi}</TableCell>
                                        <TableCell align="right">
                                            <Typography
                                                sx={{ cursor: 'pointer', color: 'red' }}
                                                onClick={() => handleDelete(index)}
                                            >
                                                Delete
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>

            <Grid container xs={11} sm={11} md={10} lg={11} sx={{ my: { xs: 2, sm: 2, md: 3, lg: 3 }, bgcolor: '', ml: 'auto' }}>

                <Typography sx={{ fontWeight: 600, fontSize: 20, fontFamily: 'outfit', width: '100%' }}>Banks</Typography>

                {
                    startingItem > 0 &&

                    <ArrowBackIcon
                        onClick={() => {
                            setStartingItem(startingItem - 4)
                            setEndingItem(endingItem - 4)
                        }}
                        sx={{
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            right: '1rem',
                            bgcolor: '#FFF',
                            zIndex: 200,
                            height: 'fit-content',

                            boxShadow: '0px 0px 48px 0px rgba(31, 108, 171, 0.1)',
                            p: { xs: 1, sm: 1.5, md: 2, lg: 2 },
                            borderRadius: "50%",
                            cursor: 'pointer',
                            color: 'rgba(31, 110, 174, 1)'
                        }}
                    />
                }

                {
                    endingItem < DATA1?.length &&

                    <ArrowForwardIcon
                        onClick={() => {
                            setStartingItem(startingItem + 4)
                            setEndingItem(endingItem + 4)
                        }}
                        sx={{
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            right: '1rem',
                            bgcolor: '#FFF',
                            zIndex: 200,
                            height: 'fit-content',
                            ml: 'auto',
                            boxShadow: '0px 0px 48px 0px rgba(31, 108, 171, 0.1)',
                            p: { xs: 1, sm: 1.5, md: 2, lg: 2 },
                            borderRadius: "50%",
                            cursor: 'pointer',
                            color: 'rgba(31, 110, 174, 1)'
                        }}
                    />
                }

                <Grid container sx={{ width: '100%', flexWrap: 'nowrap', overflowX: 'hidden', mt: -5 }}>

                    {

                        DATA1?.slice(startingItem, endingItem)?.map((data, index) =>

                            <Grid
                                container xs={5.5} sm={3} md={3.4} lg={3.4} style={{ flex: '0 0 auto', background: '', justifyContent: '' }}>

                                <Grid container xs={11} sm={11} md={11} lg={11} sx={{
                                    background: '#FFF', justifyContent: 'center',
                                    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                                    borderRadius: 1,
                                    boxShadow: "0px 0px 15px 0px rgba(62, 193, 208, 0.05)"
                                }}>


                                    <Grid container xs={11} sm={11} md={11} lg={11} sx={{ background: '', justifyContent: 'center', py: 1.5 }}>


                                        <Grid container justifyContent="space-between" sx={{
                                            alignItems: "",
                                            pb: { xs: 1, sm: 1.2, md: 1.5, lg: 1.5 },
                                            bgcolor: '',
                                            borderBottom: '1px solid rgba(242, 242, 242, 1)'
                                        }}>


                                            <Box sx={{
                                                display: 'flex', alignItems: 'center',
                                                bgcolor: 'rgba(0, 116, 5, 1)',
                                                px: { xs: .3, sm: .4, md: .6, lg: .6 },
                                                py: { xs: .1, sm: .1, md: .2, lg: .2 },
                                                color: '#FFF', borderRadius: 1
                                            }}>

                                                <Typography sx={{ fontSize: { xs: 10, sm: 12, md: 13, lg: 15, fontFamily: "outfit" }, }}>{data?.rating}</Typography>


                                            </Box>

                                            <Typography sx={{
                                                width: '',
                                                fontSize: { xs: 11, sm: 11, md: 15, lg: 16, fontFamily: "outfit", width: '100%' }, color: 'rgba(128, 128, 128, 1)'
                                            }}>{data?.place}</Typography>
                                        </Grid>

                                        <Typography sx={{
                                            fontSize: { xs: 12, sm: 12, md: 13, lg: 22 }, fontFamily: "outfit", fontWeight: 'bold', width: '100%',
                                            mt: { xs: 1, sm: 1.2, md: 1.5, lg: 1.5 },
                                        }}>{condition == "package" ? data?.packageName : data?.itemName}</Typography>

                                        {
                                            condition == "package" ? '' :

                                                <Typography sx={{
                                                    width: '100%',
                                                    fontSize: { xs: 11, sm: 11, md: 15, lg: 16, fontFamily: "outfit", width: '100%' }, color: 'rgba(128, 128, 128, 1)'
                                                }}>{data?.items}</Typography>
                                        }

                                        {
                                            condition == "package" &&
                                            <Grid container sx={{ my: 1 }}>
                                                {
                                                    data?.itemsInPackage?.map((item, index) =>
                                                        <Typography sx={{
                                                            width: '100%',
                                                            fontSize: { xs: 11, sm: 11, md: 15, lg: 16, fontFamily: "outfit", width: '100%' }, color: 'rgba(128, 128, 128, 1)'
                                                        }}>{item}</Typography>

                                                    )
                                                }

                                            </Grid>
                                        }



                                        <Grid container sx={{ mt: { xs: .7, sm: 2, md: 3, lg: 3 } }}>
                                            <Grid container lg={6} md={6}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                                    <Typography sx={{ fontSize: { xs: 12, sm: 12, md: 13, lg: 22 }, fontFamily: "outfit", fontWeight: 'bold' }}>{data?.offerPrice}/-</Typography>
                                                    <Typography sx={{ width: '100%', fontSize: { xs: 11, sm: 11, md: 15, lg: 16, fontFamily: "outfit", width: '100%' }, color: 'rgba(128, 128, 128, 1)', ml: 1 }}>{data?.oldPrice}/-</Typography>
                                                </Box>

                                                <Grid container sx={{ mt: { xs: .5, sm: .7, md: 1, lg: 1 } }}>

                                                    <Typography sx={{
                                                        width: '100%',
                                                        fontSize: {
                                                            xs: 7, sm: 10, md: 13, lg: 13, fontFamily: "outfit",
                                                        }, color: 'rgba(0, 116, 5, 1)',
                                                        bgcolor: 'rgba(221, 255, 228, 1)', color: 'rgba(128, 128, 128, 1)',
                                                        width: 'fit-content',
                                                        py: .3, px: .3, border: '2px dashed rgba(0, 116, 5, 1)', height: 'fit-content'
                                                    }}>{data?.off}%OFF</Typography>

                                                </Grid>
                                            </Grid>

                                            <Grid container lg={6} md={6} sx={{ justifyContent: { xs: 'start', sm: 'start', md: 'end', lg: 'end' } }}>
                                                <Typography sx={{
                                                    fontSize: { xs: 11, sm: 11, md: 15, lg: 15 }, fontFamily: "outfit", color: 'rgba(31, 108, 171, 1)'
                                                }}>Expected report in {data?.expiringInDays} Day</Typography>


                                                <Typography
                                                    onClick={() => {
                                                        window.scrollTo(0, 0);
                                                        setShowpopUp(!shoWPopUp)
                                                    }}
                                                    sx={{
                                                        fontSize: { xs: 11, sm: 11, md: 15, lg: 15 },
                                                        color: '#FFF',
                                                        bgcolor: 'rgba(31, 108, 171, 1)', fontFamily: "outfit",
                                                        height: 'fit-content', fontWeight: 'bold',
                                                        py: { xs: .6, sm: .6, md: 1, lg: 1 },
                                                        mt: { xs: 1, sm: 1, md: 'auto', lg: 'auto' },
                                                        px: { xs: 2, sm: 2, md: 4, lg: 4 }, cursor: 'pointer',
                                                        borderRadius: 1
                                                    }}>EMI</Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Grid>

                        )
                    }
                </Grid >

            </Grid>
        </Grid >
    )
}