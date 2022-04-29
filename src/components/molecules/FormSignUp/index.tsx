import Button from 'components/atoms/Button'
import TextField from 'components/atoms/TextField'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'

import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />

      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <TextField
        name="confirm-password"
        placeholder="Confirm Password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <S.FormLink>
        <span>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </span>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
