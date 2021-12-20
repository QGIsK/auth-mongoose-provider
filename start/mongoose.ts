/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import mongoose from 'mongoose'
import Env from '@ioc:Adonis/Core/Env'

mongoose.connect(Env.get('MONGO_URL', 'mongodb://localhost:27017/adonis'))
