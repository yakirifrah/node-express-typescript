import 'reflect-metadata'
import express, { Express } from 'express'
import cors from 'cors'
import { getCorsConfig } from './config/Cors'
const app: Express = express()

//------------------------------------//
//  Middleware                        //
//------------------------------------//
app.use(cors(getCorsConfig('localdev')))
app.use(express.json())

//------------------------------------//
//  Routes                            //
//------------------------------------//
app.use('/api', (req, res, next)=>{
  return res.json('test')
})
export default app
