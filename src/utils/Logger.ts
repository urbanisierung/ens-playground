import * as dotenv from 'dotenv'
import pino from 'pino'

dotenv.config()

// locally using pretty config: https://github.com/pinojs/pino-pretty
const localConfig = {
  name: 'ens-playground',
  level: 'debug',
  transport: {
    target: 'pino-pretty',
  },
}

const config = {
  name: 'ens-playground',
  level: 'debug',
}

export const logger =
  process.env.NODE_ENV === 'local' ? pino(localConfig) : pino(config)
