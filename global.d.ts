/**
 * Created by tushar on 30/07/17.
 */

declare module 'react-dom'
interface PatchFunction <T, O> {
  (node: HTMLElement, virtualNode: T, options?: O): void
}
