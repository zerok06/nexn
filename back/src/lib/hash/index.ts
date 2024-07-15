import { compareSync, genSaltSync, hashSync } from 'bcrypt'

export const encryptPassword = (password: string): string => {
  const saltRounds = 10
  const salt = genSaltSync(saltRounds)
  const hash = hashSync(password, salt)

  return hash
}
export const comparePassword = (password: string, hash: string): boolean =>
  compareSync(password, hash)
