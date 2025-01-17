export const generateUUID = (): string | undefined => {
  try {
    if ((globalThis?.crypto as any)?.randomUUID) {
      return (globalThis.crypto as any).randomUUID()
    } else if (isNode) {
      return randomUUID()
    }
    // eslint-disable-next-line no-empty
  } catch {}
  return undefined
}
