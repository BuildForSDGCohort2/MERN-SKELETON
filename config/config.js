const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || "i need someone to walk with",
  mongoUri: process.env.MONGO_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}
export default config
