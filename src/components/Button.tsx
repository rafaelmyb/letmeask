import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; // permite receber as mesmas propriedades que o button do html pode receber

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props} />
  )  
}