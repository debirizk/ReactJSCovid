import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Global.module.css";
import CountUp from "react-countup";
import cx from "classnames";
// import {fetchDailyData} from "../../api";
import axios from 'axios';
import { StylesProvider } from '@material-ui/styles';

export default class Global extends Component {
    constructor(props){
        super(props);
        this.state={
            confirm:null,
            deaths:null,
            recovered:null,
            lastupdate:null,
            country:null
        }
    }
    handleCountryChange=(country)=>{
        axios.get("https://covid19.mathdro.id/api/countries/" + country)
        .then(response=>{
            this.setState({
                confirm:response.data.confirmed.value,
                deaths:response.data.deaths.value,
                recovered:response.data.recovered.value,
                lastupdate:response.data.lastUpdate
            })
        })
    }
    componentDidMount(){
        this.getData();
    }
    getData=()=>{
        axios.get('https://covid19.mathdro.id/api')
       .then(response=>{
           this.setState({
               confirm:response.data.confirmed.value,
               deaths:response.data.deaths.value,
               recovered:response.data.recovered.value,
               lastupdate:response.data.lastUpdate
           })
       })
      .catch(error=>{
          console.log(error.response);
          
      })
    }
    render() {
      return (
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
            <Grid 
              item
              component={Card}
              xs={12}
              md={2}
              key={1}
              className={styles.Card, styles.infected}
              style={{ margin: "0px 453.675px", padding: "1px" }}
            >
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  <b>Confirmed</b>
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={this.state.confirm}
                    duration={2}
                    separator=","
                  />
                </Typography>
                <Typography variant="body2">Angka Orang Terinfeksi Covid-19</Typography>
                <Typography color="textPrimary"> Global </Typography>
              </CardContent>
            </Grid>
          
            <Grid 
              item
              component={Card}
              xs={12}
              md={2}
              key={2}
              className={styles.Card, styles.recovered}
              style={{ margin: "0px 453.675px", padding: "1px"}}
            >
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  <b>Recovered</b>
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={this.state.recovered}
                    duration={2}
                    separator=","
                  />
                </Typography>
                <Typography variant="body2">Angka Orang Sembuh dari Covid-19</Typography>
                <Typography color="textPrimary"> Global </Typography>
              </CardContent>
            </Grid>
          
            <Grid 
              item
              component={Card}
              xs={12}
              md={2}
              key={3}
              className={styles.Card, styles.deaths}
              style={{ margin: "0px 453.675px", padding: "1px" }}
            >
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  <b>Deaths</b>
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={this.state.deaths}
                    duration={2}
                    separator=","
                  />
                </Typography>
                <Typography variant="body2">Angka Orang Meninggal karena Covid-19</Typography>
                <Typography color="textPrimary"> Global </Typography>
              </CardContent>
            </Grid>
          </Grid>            
        </div>
            
        )
    }
}