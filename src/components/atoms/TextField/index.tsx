import React, { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextfieldProps = {
  onInput?: (value: string) => void
  icon?: JSX.Element
  label?: string
  error?: string
  iconPosition?: 'left' | 'right'
  labelFor?: string
  initialValue?: string
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  icon,
  label,
  error,
  iconPosition = 'left',
  labelFor = '',
  initialValue = '',
  disabled = false,
  ...props
}: TextfieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper error={!!error}>
      {!!label && (
        <S.Label disabled={disabled} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}

      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        ></S.Input>
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
