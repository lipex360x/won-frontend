import React, { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextfieldProps = {
  onInput?: (value: string) => void
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  label?: string
  labelFor?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  icon,
  iconPosition = 'left',
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
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...props}
        ></S.Input>
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
