// // import { Grid, TextField, Typography } from '@mui/material'
// // import React, { useState } from 'react';
// // import CloseIcon from '@mui/icons-material/Close';

// // export default function ModalPopUp({ setShowpopUp }) {

// //     const [amount, setAmount] = useState();
// //     const [interest, setInterest] = useState();
// //     const [duration, setDuraion] = useState();




// //     return (
// //         <Grid container sx={{
// //             position: 'absolute',
// //             top: 0,
// //             left: 0,
// //             zIndex: 2000,
// //             bgcolor: 'red',
// //             height: '100%',
// //             justifyContent: 'center',
// //             alignItems: 'center'
// //         }}>
// //             <Grid container lg={4} md={4} sm={11} xs={11} sx={{
// //                 bgcolor: 'green'
// //             }}>

// //                 <Grid container sx={{ justifyContent: 'end' }}>
// //                     <CloseIcon onClick={() => setShowpopUp(false)} sx={{ m: 1.5 }} />
// //                 </Grid>

// //                 <Grid container sx={{ bgcolor: '#FFF' }}>
// //                     <TextField
// //                         id="standard-textarea"
// //                         label="amount"
// //                         // placeholder="Placeholder"
// //                         multiline
// //                         variant="standard"
// //                         onChange={(e) => setAmount(e.target.value)}
// //                         sx={{
// //                             ml: 3,
// //                             my: 2
// //                         }}
// //                     />

// //                     <TextField
// //                         id="standard-textarea"
// //                         label="interest"
// //                         // placeholder="Placeholder"
// //                         multiline
// //                         variant="standard"
// //                         onChange={(e) => setInterest(e.target.value)}
// //                         sx={{
// //                             ml: 3,
// //                             my: 2
// //                         }}
// //                     />

// //                     <TextField
// //                         id="standard-textarea"
// //                         label="duration"
// //                         // placeholder="Placeholder"
// //                         multiline
// //                         variant="standard"
// //                         onChange={(e) => setDuraion(e.target.value)}
// //                         sx={{
// //                             ml: 3,
// //                             my: 2
// //                         }}
// //                     />

// //                     <Grid container sx={{
// //                         my: 2
// //                     }}>
// //                         <Typography
// //                             // onClick={() => setShowpopUp(!shoWPopUp)}
// //                             sx={{
// //                                 fontSize: { xs: 11, sm: 11, md: 15, lg: 15 },
// //                                 color: '#FFF',
// //                                 bgcolor: 'rgba(31, 108, 171, 1)', fontFamily: "outfit",
// //                                 height: 'fit-content', fontWeight: 'bold',
// //                                 py: { xs: .6, sm: .6, md: 1, lg: 1 },
// //                                 mt: { xs: 1, sm: 1, md: 'auto', lg: 'auto' },
// //                                 px: { xs: 2, sm: 2, md: 4, lg: 4 }, cursor: 'pointer',
// //                                 ml: 3,
// //                                 borderRadius: 1
// //                             }}>EMI</Typography>
// //                     </Grid>
// //                 </Grid>

// //             </Grid>
// //         </Grid>
// //     )
// // }



// import { Grid, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';

// export default function ModalPopUp({ setShowpopUp }) {
//     const [amount, setAmount] = useState('');
//     const [interest, setInterest] = useState('');
//     const [duration, setDuration] = useState('');
//     const [emi, setEmi] = useState(null);

//     const [loans, setLoans] = useState([]);

//     console.log("loansloansloansloansloans", loans);




//     const calculateEMI = (principal, annualInterestRate, tenureYears) => {
//         let monthlyInterestRate = annualInterestRate / (12 * 100);
//         let numberOfInstallments = tenureYears * 12;
//         let emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfInstallments)) /
//             (Math.pow(1 + monthlyInterestRate, numberOfInstallments) - 1);
//         return emi;
//     };

//     const handleCalculate = () => {
//         if (amount && interest && duration) {
//             const principal = parseFloat(amount);
//             const annualInterestRate = parseFloat(interest);
//             const tenureYears = parseFloat(duration);

//             const calculatedEMI = calculateEMI(principal, annualInterestRate, tenureYears);
//             setEmi(calculatedEMI.toFixed(2));

//             setLoans([{ ...loans, emi: calculatedEMI.toFixed(2), amount: amount, interest: interest, duration: duration }])



//         }
//     };

//     return (
//         <Grid container sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             zIndex: 2000,
//             bgcolor: 'rgba(0, 0, 0, 0.5)',
//             height: '100%',
//             justifyContent: 'center',
//             alignItems: 'center'
//         }}>
//             <Grid container lg={4} md={4} sm={11} xs={11} sx={{
//                 bgcolor: 'green'
//             }}>
//                 <Grid container sx={{ justifyContent: 'end' }}>
//                     <CloseIcon onClick={() => setShowpopUp(false)} sx={{ m: 1.5, cursor: 'pointer' }} />
//                 </Grid>
//                 <Grid container sx={{ bgcolor: '#FFF', p: 3 }}>
//                     <TextField
//                         id="standard-textarea"
//                         label="Amount"
//                         multiline
//                         variant="standard"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         sx={{ mb: 2 }}
//                     />
//                     <TextField
//                         id="standard-textarea"
//                         label="Interest"
//                         multiline
//                         variant="standard"
//                         value={interest}
//                         onChange={(e) => setInterest(e.target.value)}
//                         sx={{ mb: 2, ml: 2 }}
//                     />
//                     <TextField
//                         id="standard-textarea"
//                         label="Duration (Years)"
//                         multiline
//                         variant="standard"
//                         value={duration}
//                         onChange={(e) => setDuration(e.target.value)}
//                         sx={{ mb: 2 }}
//                     />
//                     <Grid container sx={{ justifyContent: 'center', my: 2 }}>
//                         <Typography
//                             onClick={handleCalculate}
//                             sx={{
//                                 fontSize: { xs: 11, sm: 11, md: 15, lg: 15 },
//                                 color: '#FFF',
//                                 bgcolor: 'rgba(31, 108, 171, 1)',
//                                 fontFamily: "outfit",
//                                 height: 'fit-content',
//                                 fontWeight: 'bold',
//                                 py: { xs: .6, sm: .6, md: 1, lg: 1 },
//                                 px: { xs: 2, sm: 2, md: 4, lg: 4 },
//                                 cursor: 'pointer',
//                                 borderRadius: 1
//                             }}
//                         >
//                             Calculate EMI
//                         </Typography>
//                     </Grid>
//                     {emi && (
//                         <Grid container sx={{ justifyContent: 'center', my: 2 }}>
//                             <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
//                                 Monthly EMI: ₹{emi}
//                             </Typography>
//                         </Grid>
//                     )}

//                     {loans.length > 0 && (
//                         <Grid container sx={{ justifyContent: 'center', my: 2 }}>
//                             {
//                                 loans?.map((data, index) =>
//                                     <Typography sx={{ fontSize: 18, fontWeight: 'bold', width: '100%' }}>
//                                         Monthly EMI: ₹{data}
//                                     </Typography>
//                                 )

//                             }

//                         </Grid>
//                     )}


//                 </Grid>
//             </Grid>
//         </Grid>
//     );
// }



import { Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function ModalPopUp({ setShowpopUp, emiData, setemiData }) {
    const [amount, setAmount] = useState('');
    const [interest, setInterest] = useState('');
    const [duration, setDuration] = useState('');
    const [emi, setEmi] = useState(null);
    // const [loans, setLoans] = useState([]);

    const calculateEMI = (principal, annualInterestRate, tenureYears) => {
        let monthlyInterestRate = annualInterestRate / (12 * 100);
        let numberOfInstallments = tenureYears * 12;
        let emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfInstallments)) /
            (Math.pow(1 + monthlyInterestRate, numberOfInstallments) - 1);
        return emi;
    };

    const handleCalculate = () => {
        if (amount && interest && duration) {
            const principal = parseFloat(amount);
            const annualInterestRate = parseFloat(interest);
            const tenureYears = parseFloat(duration);

            const calculatedEMI = calculateEMI(principal, annualInterestRate, tenureYears);
            setEmi(calculatedEMI.toFixed(2));

            setemiData([...emiData, { emi: calculatedEMI.toFixed(2), amount, interest, duration }]);

            setShowpopUp(false)
        }
    };

    return (
        <Grid container sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2000,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid container lg={4} md={4} sm={11} xs={11} sx={{
                bgcolor: 'green'
            }}>
                <Grid container sx={{ justifyContent: 'end' }}>
                    <CloseIcon onClick={() => setShowpopUp(false)} sx={{ m: 1.5, cursor: 'pointer' }} />
                </Grid>
                <Grid container sx={{ bgcolor: '#FFF', p: 3 }}>
                    <TextField
                        id="standard-textarea"
                        label="Amount"
                        multiline
                        variant="standard"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="standard-textarea"
                        label="Interest"
                        multiline
                        variant="standard"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        sx={{ mb: 2, ml: 2 }}
                    />
                    <TextField
                        id="standard-textarea"
                        label="Duration (Years)"
                        multiline
                        variant="standard"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Grid container sx={{ justifyContent: 'center', my: 2 }}>
                        <Typography
                            onClick={handleCalculate}
                            sx={{
                                fontSize: { xs: 11, sm: 11, md: 15, lg: 15 },
                                color: '#FFF',
                                bgcolor: 'rgba(31, 108, 171, 1)',
                                fontFamily: "outfit",
                                height: 'fit-content',
                                fontWeight: 'bold',
                                py: { xs: .6, sm: .6, md: 1, lg: 1 },
                                px: { xs: 2, sm: 2, md: 4, lg: 4 },
                                cursor: 'pointer',
                                borderRadius: 1
                            }}
                        >
                            Calculate EMI
                        </Typography>
                    </Grid>
                    {emi && (
                        <Grid container sx={{ justifyContent: 'center', my: 2 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
                                Monthly EMI: ₹{emi}
                            </Typography>
                        </Grid>
                    )}

                </Grid>
            </Grid>
        </Grid>
    );
}
