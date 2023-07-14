module.exports = {
  DEFAULT_EXPIRE_TIME: 4.5 * 60 * 1000,
  TRIGGER_REFRESH_TIME: 1 * 60 * 1000,
  TRIGGER_CRON_JOB: "*/30 * * * * *",
  TICKET_STATUS: {
    PENDING: "pending",
    SUCCESS: "success",
    FAILED: "failed",
  },
  SEAT_STATUS: {
    AVAILABLE: "available",
    RESERVED: "reserved",
    BOOKED: "booked",
    UNAVAILABLE: "unavailable",
  },
  SEAT_TYPE: {
    DEFAULT: { key: "default", price: 50000 },
    EARLY_BIRD: { key: "early_bird", price: 50000 },
  },
  DB_KEY: {
    BANK_CREDENTIAL: "bank_credential",
    BANK_TRANSACTION: "bank_transaction",
    SYSTEM: "server_system",
  },
};
