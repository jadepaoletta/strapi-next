module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac10ac79180cd253312bf43877e05106'),
  },
});
