import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'
import * as S from './styles'

import Button from 'components/atoms/Button'
import TextField from 'components/atoms/TextField'

export type FormsigninProps = {
  title?: string
}

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="password"
        type="password"
        icon={<Lock />}
      />

      <S.ForgetPassword href="#">Forgot your password</S.ForgetPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <S.FormLink>
        <span>
          Don't have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </span>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
