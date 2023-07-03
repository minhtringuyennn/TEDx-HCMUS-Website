import React, { Component } from 'react';
import styled from 'styled-components';

interface State {
  readonly days: number;
  readonly hours: number;
  readonly min: number;
  readonly sec: number;
}

interface Props {
  date: string;
}

class Countdown extends React.Component<Props, State> {
  private date: Date;

  interval!: number;

  constructor(props: Props) {
    super(props);
    this.calculateCountdown = this.calculateCountdown.bind(this);
    this.stop = this.stop.bind(this);
    this.date = new Date(props.date);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    // update every second
    this.interval = window.setInterval(() => {
      const date = this.calculateCountdown();
      if (
        date.days === 0 &&
        date.hours === 0 &&
        date.min === 0 &&
        date.sec === 0
      ) {
        this.stop();
      } else this.setState(date);
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown() {
    let diff =
      (Date.parse(String(new Date(this.date))) -
        Date.parse(String(new Date()))) /
      1000;

    // clear countdown when date is reached
    if (diff <= 0)
      return {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
      };

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  render() {
    const countDown = this.state;

    return (
      <Styles>
        <div className="Countdown">
          <div className="Countdown-col">
            <strong>{addLeadingZeros(countDown.days)}</strong>
            <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </div>

          <div className="Countdown-col">
            <strong>{addLeadingZeros(countDown.hours)}</strong>
            <span>{countDown.hours === 1 ? 'Hour' : 'Hours'}</span>
          </div>

          <div className="Countdown-col">
            <strong>{addLeadingZeros(countDown.min)}</strong>
            <span>Min</span>
          </div>

          <div className="Countdown-col">
            <strong>{addLeadingZeros(countDown.sec)}</strong>
            <span>Sec</span>
          </div>
        </div>
      </Styles>
    );
  }
}

function addLeadingZeros(value: number) {
  let str = String(value);
  while (str.length < 2) {
    str = `0${str}`;
  }
  return str;
}

const Styles = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  .Countdown {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .Countdown-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 6rem;
  }

  .Countdown-col strong {
    font-size: 3rem;
    line-height: 4.5rem;
    color: ${({ theme }) => theme.colors.primary.default};
    font-weight: 700;
  }

  @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
    .Countdown-col {
      width: 3rem;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
    .Countdown-col strong {
      font-size: 1.25rem;
      line-height: 2.25rem;
    }
  }
`;

export default Countdown;
