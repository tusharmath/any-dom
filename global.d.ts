/**
 * Created by tushar on 30/07/17.
 */

interface PatchFunction <T, O> {
  (node: HTMLElement, virtualNode: T, options?: O): void
}
