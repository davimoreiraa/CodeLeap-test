/* ------------------ RESOURCES -------------------*/
import { useState, useEffect } from 'react'

export default function useIsFilled(e) {
  const [isFilled, setIsFilled] = useState(false)

  e === '' ? setIsFilled(false) : setIsFilled(true)
  return isFilled
}
