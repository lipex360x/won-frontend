import React, { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextfieldProps = {
  onInput?: (value: string) => void
  icon?: JSX.Element
  label?: string
  labelFor?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  icon,
  label,
  labelFor = '',
  initialValue = '',
  ...props
}: TextfieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          {...props}
        ></S.Input>
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
