import React from "react"

const Calendar = props => (
  <svg width={22} height={22} viewBox="0 0 22 22" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h22v22H0z" />
      <path
        d="M18 3.5a.96.96 0 0 1 .71.29.96.96 0 0 1 .29.71V17a.97.97 0 0 1-.29.703A.953.953 0 0 1 18 18H4a.953.953 0 0 1-.71-.297A.974.974 0 0 1 3 17V4.5a.96.96 0 0 1 .29-.71A.966.966 0 0 1 4 3.5h4v-1a.48.48 0 0 1 .148-.352A.48.48 0 0 1 8.5 2a.48.48 0 0 1 .352.148A.48.48 0 0 1 9 2.5v1h4v-1a.48.48 0 0 1 .148-.352A.48.48 0 0 1 13.5 2a.48.48 0 0 1 .352.148A.48.48 0 0 1 14 2.5v1h4zM18 17V4.5h-4V5a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148.48.48 0 0 1-.352-.148A.48.48 0 0 1 13 5v-.5H9V5a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148.48.48 0 0 1-.352-.148A.48.48 0 0 1 8 5v-.5H4V17h14zm-3.5-7a.48.48 0 0 1-.352-.148A.48.48 0 0 1 14 9.5v-1a.48.48 0 0 1 .148-.352A.48.48 0 0 1 14.5 8h1a.48.48 0 0 1 .352.148A.48.48 0 0 1 16 8.5v1a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148h-1zm0 4a.48.48 0 0 1-.352-.148A.48.48 0 0 1 14 13.5v-1a.48.48 0 0 1 .148-.352A.48.48 0 0 1 14.5 12h1a.48.48 0 0 1 .352.148.48.48 0 0 1 .148.352v1a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148h-1zm-3-2a.48.48 0 0 1 .352.148.48.48 0 0 1 .148.352v1a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148h-1a.48.48 0 0 1-.352-.148A.48.48 0 0 1 10 13.5v-1a.48.48 0 0 1 .148-.352A.48.48 0 0 1 10.5 12h1zm0-4a.48.48 0 0 1 .352.148A.48.48 0 0 1 12 8.5v1a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148h-1a.48.48 0 0 1-.352-.148A.48.48 0 0 1 10 9.5v-1a.48.48 0 0 1 .148-.352A.48.48 0 0 1 10.5 8h1zm-4 0a.48.48 0 0 1 .352.148A.48.48 0 0 1 8 8.5v1a.48.48 0 0 1-.148.352A.48.48 0 0 1 7.5 10h-1a.48.48 0 0 1-.352-.148A.48.48 0 0 1 6 9.5v-1a.48.48 0 0 1 .148-.352A.48.48 0 0 1 6.5 8h1zm0 4a.48.48 0 0 1 .352.148A.48.48 0 0 1 8 12.5v1a.48.48 0 0 1-.148.352A.48.48 0 0 1 7.5 14h-1a.48.48 0 0 1-.352-.148A.48.48 0 0 1 6 13.5v-1a.48.48 0 0 1 .148-.352A.48.48 0 0 1 6.5 12h1z"
        fill="currentColor"
      />
    </g>
  </svg>
)

export default Calendar