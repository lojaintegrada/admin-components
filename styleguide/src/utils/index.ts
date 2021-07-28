import { MutableRefObject, Ref } from 'react'

export const safeCSSId = function (string: string) {
  return encodeURIComponent(string)
    .toLowerCase()
    .replace(/\.|%[0-9a-z]{2}/gi, '')
}

export function composeRefs<T>(...refs: Array<Ref<T>>) {
  return (value: T) => refs.forEach((ref) => setRef(ref, value))
}
export function setRef<T>(ref: Ref<T>, value: any) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    const mutableRef = ref as MutableRefObject<T>
    mutableRef.current = value
  }
}
