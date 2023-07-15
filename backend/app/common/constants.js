module.exports = {
  DEFAULT_EXPIRE_TIME: 4.5 * 60 * 1000,
  TRIGGER_REFRESH_TIME: 1 * 60 * 1000,
  TRIGGER_CRON_JOB: "*/30 * * * * *",
  TRIGGER_BACKUP_DB: 5 * 60 * 1000,
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
    CHECKED_IN: "checked_in",
  },
  SEAT_TYPE: {
    EARLY_BIRD: { key: "early_bird", price: 50000 },
    ECO: { key: "eco", price: 70000 },
    STANDARD: { key: "standard", price: 90000 },
    PREMIUM: { key: "premium", price: 120000 },
  },
  DB_KEY: {
    BANK_CREDENTIAL: "bank_credential",
    BANK_TRANSACTION: "bank_transaction",
    SYSTEM: "server_system",
  },
};
