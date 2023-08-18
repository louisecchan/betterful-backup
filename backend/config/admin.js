module.exports = ({ env }) => ({
  auth: {
    secret: env(
      "ADMIN_JWT_SECRET",
      "GkY5Oyo+SLbrMh4c3SPSNqZoKkNAEw7YwGUWOO5/MF8="
    ),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
