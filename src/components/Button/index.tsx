import { ButtonHTMLAttributes } from "react"

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?:boolean
}; // permite receber as mesmas propriedades que o button do html pode receber
  // com o & comercial, pode-se adicionar mais propriedades a serem utilizadas

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} 
    {...props} />
  )  
}