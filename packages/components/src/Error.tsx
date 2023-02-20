import React, {FC} from 'react'

type ErrorProps = {
    errorMessage: string,
}

export const ErrorComponent: FC<ErrorProps> = (props) => {

  return (
    <div>{props.errorMessage}</div>
  )
}
