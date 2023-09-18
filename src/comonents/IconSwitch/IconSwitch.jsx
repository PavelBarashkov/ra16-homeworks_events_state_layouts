/* eslint-disable react/prop-types */

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <span 
        className="material-icons"
        onClick={onSwitch}
    >
        {icon}
    </span>
  )
}
