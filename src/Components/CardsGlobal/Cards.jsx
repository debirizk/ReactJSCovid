import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import {fetchDailyData} from "../../api";
import axios from 'axios';

const Cards = ({
  data: { confirmed, recovered, deaths},
  country,
}) => {
  const [latest, setLatest] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      setLatest(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  if (!confirmed) {
    return "Loading...";
  }
  let carddetails = [
    {
      style: styles.infected,
      text: "Confirmed",
      value: confirmed.value,
      bottomText: "Angka Orang Terinfeksi Covid-19",
    },
    {
      style: styles.recovered,
      text: "Recovered",
      value: recovered.value,
      bottomText: "Angka Orang Sembuh dari Covid-19",
    },
    {
      style: styles.deaths,
      text: "Deaths",
      value: deaths.value,
      bottomText: "Angka Orang Meninggal karena Covid-19",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {carddetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={2}
            className={cx(styles.Card, detail.style)}
            key={index}
            style={{ margin: "0px 23.675px", padding: "12px" }}
          >
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                <b>{detail.text}</b>
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="body2">{detail.bottomText}</Typography>
              <Typography color="textPrimary"> {country} </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Cards;
