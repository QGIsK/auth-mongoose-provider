import mongoose from 'mongoose'
import Hash from '@ioc:Adonis/Core/Hash'

type User = {
  id: string
  email: string
  password: string
  rememberMeToken: string | null
}

const UserSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  rememberMeToken: String,
})

UserSchema.pre('save', async function () {
  if (this.password && this.isModified('password')) {
    this.password = await Hash.make(this.password)
  }
})

export default mongoose.model<User>('User', UserSchema)
