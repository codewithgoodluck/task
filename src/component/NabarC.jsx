import { Grid, item } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import cup from "../../src/component/Assets/cup.svg"
import arrowrbg from "../../src/component/Assets/arrow-rbg.png"
import data from "../../src/db.json"; 


function NabarC() {
    console.log(data)
    
    return (
        <section className='mt-20'>
            <h6 className='text-color text-4xl mb-10 ml-20'>Main metrics</h6>
            <section className='text-center   mx-20' >

                <Grid container spacing={2}>

                    <Grid item xs={6}>

                        <Grid container spacing={2}>

                            <Grid className=' ' item xs={3}>
                                <div className='text-center border w-full'>
                                    Last hour
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className='text-center border w-full'>
                                    Today
                                </div>

                            </Grid>
                            <Grid item xs={3}>
                                <div className='text-center text-white blue border w-full'>
                                    Yesterday
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className='text-center border w-full'>
                                    Last 3 Days
                                </div>
                            </Grid>

                        </Grid>

                    </Grid>


                    <Grid item xs={12}>

                        <Grid container spacing={2}>

                            <Grid className=' ' item xs={4}>
                                <section className=' w-full'>
                                    <div className='text-center flex '>
                                        <div><span class="dot"></span></div>
                                        <div>
                                            <span className='text-color'>Errors: 0,12% </span>
                                            <div>
                                                <span className='light-text text-sm ml-2'>Average: 0,11%</span>
                                            </div>

                                        </div>
                                    </div>
                                </section>

                            </Grid>
                            <Grid item xs={4}>
                                <section className=' w-full'>
                                    <div className='text-center flex '>
                                        <div><span class="dot"></span></div>
                                        <div>
                                            <span className='text-color'>Zeroes: 5,12% </span>
                                            <div>
                                                <span className='light-text text-sm ml-2'>Average: 0,11%</span>
                                            </div>

                                        </div>
                                    </div>
                                </section>

                            </Grid>
                            <Grid item xs={4}>
                                <section className=' w-full'>
                                    <div className='text-center flex '>
                                        <div><span class="dot"></span></div>
                                        <div>
                                            <span className='text-color'>Timeouts: 0,12%  </span>
                                            <div>
                                                <span className='light-text text-sm ml-2'>Average: 0,11%</span>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </Grid>


                        </Grid>

                    </Grid>
                    <Grid item xs={12}>

                        <Grid container spacing={2}>

                            <Grid className=' ' item xs={3}>
                                <div class="rectangle"></div>

                            </Grid>
                            <Grid item xs={3}>
                                <div class="rectangle2"></div>

                            </Grid>
                            <Grid item xs={3}>
                                <div class="rectangle3"></div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="rectangle4"></div>
                            </Grid>


                        </Grid>

                    </Grid>
                    <Grid item xs={12}>

                        <Grid container spacing={2}>

                            <Grid className=' ' item xs={3}>
                                <section className=' w-full'>
                                    <div className='text-center flex '>
                                        <div class="mt-1.5 square"></div>
                                        <div>
                                            <span className='text-color ml-2'>Error 500: 1 256</span>


                                        </div>
                                    </div>
                                </section>

                            </Grid>
                            <Grid item xs={3}>
                                <section className=' w-full'>
                                    <div className='text-center flex '>
                                        <div class="mt-1.5  square2"></div>
                                        <div>
                                            <span className='text-color ml-2'>Error 501: 800 </span>


                                        </div>
                                    </div>
                                </section>

                            </Grid>
                            <Grid item xs={3}>
                                <section className=' w-full'>
                                    <div className='text-center flex '>
                                        <div class="square3 mt-1.5 "></div>
                                        <div>
                                            <span className='text-color ml-2'>Error 502: 650  </span>

                                        </div>
                                    </div>
                                </section>
                            </Grid>
                            <Grid item xs={3}>
                                <section className=' w-full'>
                                    <div className='text-center flex '>
                                        <div class="square4 mt-1.5 "></div>
                                        <div>
                                            <span className='text-color ml-2'>Other: 330  </span>

                                        </div>
                                    </div>
                                </section>
                            </Grid>


                        </Grid>

                    </Grid>

                    <Grid item xs={12}>

                        <Grid container spacing={2}>

                            <Grid className=' ' item xs={6}>
                                <section className='w-60 flex'>
                                    <section class="flex w-full">
                                        <div>
                                            <div className='  relative flex '>
                                                <div class="circle mt-1.5 "></div>
                                                <div className='absolute mt-6 ml-4'>
                                                    <img src={cup} alt="" />

                                                </div>

                                                <div className='absolute mt-3 ml-10'>
                                                    <div ><span class="dot bg-white h-10 rounded-full"></span></div>

                                                </div>

                                            </div>


                                            <div className=''>
                                                <img className='h-20' src={arrowrbg} alt="" />

                                            </div>

                                        </div>

                                        <div className='ml-10 w-full mt-1'>
                                            <div className='flex'>
                                                <div>     <h1 className='text-color'>Searches</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class="circle2 mt-"></div>
                                                    <div className='absolute mt-1 pl-2'>
                                                        <div ><span class=" text-white h-10 font-bold rounded-full">+5%</span></div>

                                                    </div>



                                                </div>
                                                </div>

                                            </div>
                                            <div className='flex '>
                                                <div>     <h1 className='text-color'>29 380</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class="mt-"></div>
                                                    <div className='absolute  pl-2'>
                                                        <div ><span class=" text-color text-sm rounded-full">Yesterday</span></div>

                                                    </div>



                                                </div>
                                                </div>

                                            </div>
                                            <div className='flex '>
                                                <div>     <h1 className='text-color'>27 985</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class="mt-"></div>
                                                    <div className='  '>
                                                        <div ><span class=" text-color pl-2 text-sm rounded-full">Last friday</span></div>

                                                    </div>



                                                </div>
                                                </div>

                                            </div>



                                        </div>

                                    </section>



                                </section>







                            </Grid>
                            <Grid item xs={6}>
                                <section className='text-start '>
                                    <div className='text-color font-bold'>
                                        Mobile traffic: 100%

                                    </div>
                                    <div className='text-color font-bold'> Web traffic: 100% </div>
                                    <div>
                                        <span style={{ color: "#A0B0B9" }} className=''>You get 100% traffic on mobile and desktop devices.</span>
                                    </div>
                                    <div>     <span>Help: <span style={{ color: "#2196F3" }}> Searches, Pessimisation</span></span></div>


                                </section>

                            </Grid>




                        </Grid>

                    </Grid>

                    <Grid item xs={12}>

                        <Grid container spacing={2}>

                            <Grid className=' ' item xs={6}>
                                <section className='w-60 flex'>
                                    <section class="flex w-full">
                                        <div>
                                            <div className='  relative flex '>
                                                <div class="circle mt-1.5 "></div>
                                                <div className='absolute mt-6 ml-4'>
                                                    <img src={cup} alt="" />

                                                </div>

                                                <div className='absolute mt-3 ml-10'>
                                                    <div ><span class="dot2 bg-white h-10 rounded-full"></span></div>

                                                </div>

                                            </div>


                                            <div className=''>
                                                <img className='h-20' src={arrowrbg} alt="" />

                                            </div>

                                        </div>

                                        <div className='ml-10 w-full mt-1'>
                                            <div className='flex'>
                                                <div>     <h1 style={{ color: "#FF6A67" }} className='text-color'>Click</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class="circle3 mt-"></div>
                                                    <div className='absolute mt-1 pl-2'>
                                                        <div ><span class=" text-white h-10 font-bold rounded-full">+5%</span></div>

                                                    </div>



                                                </div>
                                                </div>

                                            </div>
                                            <div className='flex '>
                                                <div>     <h1 className='text-color'>243</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class="mt-"></div>
                                                    <div className='absolute  pl-2'>
                                                        <div ><span class=" text-color text-sm rounded-full">Yesterday</span></div>

                                                    </div>



                                                </div>
                                                </div>

                                            </div>
                                            <div className='flex '>
                                                <div>     <h1 className='text-color'>280</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class="mt-"></div>
                                                    <div className='  '>
                                                        <div ><span class=" text-color pl-2 text-sm rounded-full">Last friday</span></div>

                                                    </div>



                                                </div>
                                                </div>

                                            </div>



                                        </div>

                                    </section>



                                </section>







                            </Grid>
                            <Grid item xs={6}>
                                <section className='text-start '>
                                    <div style={{ color: "#FF6A67" }} className='text-color font-bold'>
                                        CTR: 0,04%
                                    </div>

                                    <div>
                                        <span style={{ color: "#A0B0B9" }} className=''>Conversion from searches  to clicks on all devices.</span>
                                    </div>
                                    <div>     <span>Help: <span style={{ color: "#2196F3" }}> CTR, Clicks</span></span></div>


                                </section>

                            </Grid>




                        </Grid>

                    </Grid>

                    <Grid item xs={12}>

                        <Grid container spacing={2}>

                            <Grid className=' ' item xs={6}>
                                <section className='w-60 flex'>
                                    <section class="flex w-full">
                                        <div>
                                            <div className='  relative flex '>
                                                <div class="circle mt-1.5 "></div>
                                                <div className='absolute mt-6 ml-4'>
                                                    <img src={cup} alt="" />

                                                </div>

                                                <div className='absolute mt-3 ml-10'>
                                                    <div ><span class="dot3 bg-white h-10 rounded-full"></span></div>

                                                </div>

                                            </div>


                                            <div className=''>
                                                <img className='h-20' src={arrowrbg} alt="" />

                                            </div>

                                        </div>

                                        <div className='ml-10 w-full mt-1'>
                                            <div className='flex'>
                                                <div>     <h1 style={{ color: "#FF6A67" }} className='text-color'>Sales</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class=" mt-"></div>
                                                    <div className='absolute mt-1 pl-2'>
                                                       

                                                    </div>



                                                </div>
                                                </div>

                                            </div>
                                            <div className='flex '>
                                                <div>     <h1 className='text-color'>24</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class="mt-"></div>
                                                    <div className='absolute  pl-2'>
                                                        <div ><span class=" text-color text-sm rounded-full">Yesterday</span></div>

                                                    </div>



                                                </div>
                                                </div>

                                            </div>
                                            <div className='flex '>
                                                <div>     <h1 className='text-color'>24</h1></div>

                                                <div className='ml-2'> <div className='  relative m flex '>
                                                    <div class="mt-"></div>
                                                    <div className='  '>
                                                        <div ><span class=" text-color pl-2 text-sm rounded-full">Last friday</span></div>

                                                    </div>



                                                </div>
                                                </div>

                                            </div>



                                        </div>

                                    </section>



                                </section>







                            </Grid>
                            <Grid item xs={6}>
                                <section className='text-start '>
                                    <div className='text-color font-bold'>
                                    STR: 6.2%

                                    </div>
                                    <div  className='text-color font-bold'>
                            
Avg. Check: 8 903₽
                                    </div>

                                    <div>
                                        <span style={{ color: "#A0B0B9" }} className=''>Conversion from searches  to clicks on all devices.</span>
                                    </div>
                                    <div>     <span>Help: <span style={{ color: "#2196F3" }}> STR, Bookings,Avg</span></span></div>


                                </section>

                            </Grid>




                        </Grid>

                    </Grid>

                </Grid>
            </section>
        </section>


    )
}

export default NabarC