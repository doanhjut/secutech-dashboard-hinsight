/* eslint-disable prettier/prettier */
import { Card, Grid } from '@mui/material'
import React from 'react'
import Logohtsc from 'assets/images/Logo-HTSC.png'

function index() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={10}>
        <Card style={{width:'100%'}}>
          <div style={{width:'100%',  display: 'flex', alignItems: 'center', fontSize: '32px', fontWeight: "bold", color: 'white', justifyContent: 'center'}}>
            <img src={Logohtsc} style={{ width: "140px", height: "60px" ,margin: "5px 0 5px 0" }}></img> <p>HINSIGHT DASHBOARD</p>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Card>
          <img src={Logohtsc} style={{ width: "100px", height: "60px", margin: "5px 0 5px 35%" }}></img>
        </Card>
      </Grid>
    </Grid>
  )
}

export default index