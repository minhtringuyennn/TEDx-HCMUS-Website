const db = require("../models");
const axios = require("axios");

const { DEFAULT_EXPIRE_TIME } = require("./constants.js");

const BankCredential = db.bank_credential;

exports.setCredentialIntoDB = function (credential) {
  const { refresh_token, access_token, expire_time } = credential;

  if (!refresh_token || !access_token) {
    return Promise.reject({ message: "Content can not be empty!" });
  }

  return BankCredential.findOne()
    .sort({ _id: -1 })
    .then((latestRecord) => {
      if (
        latestRecord &&
        (refresh_token === latestRecord.refresh_token || access_token === latestRecord.access_token)
      ) {
        return Promise.reject({ message: "Content existed!" });
      }

      const credentials = new BankCredential({
        refresh_token: refresh_token,
        access_token: access_token,
        expire_time: expire_time,
      });

      return credentials.save();
    });
};

exports.refreshCredential = async function (refresh_token) {
  const request_refresh_token_data = new URLSearchParams();
  request_refresh_token_data.append("grant_type", "refresh_token");
  request_refresh_token_data.append("refresh_token", refresh_token);
  request_refresh_token_data.append("client_id", "tcb-web-client");

  const response = await axios.post(
    "https://identity-tcb.techcombank.com.vn/auth/realms/backbase/protocol/openid-connect/token",
    request_refresh_token_data.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
    expire_time: Date.now() + DEFAULT_EXPIRE_TIME,
  };
};
