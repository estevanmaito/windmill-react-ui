// used in ThemeContext
export type Mode = string | null

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare type ListenerMap = {
  [k: string]: any
}
