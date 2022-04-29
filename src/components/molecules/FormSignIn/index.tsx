import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/bosons/FormWrapper'
import * as S from './styles'

import Button from 'components/atoms/Button'
import TextField from 'components/atoms/TextField'

const FormSignIn = () => (
  <FormWrapper>
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
      <FormLink>
        <span>
          Don't have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </span>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
