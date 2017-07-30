/**
 * Created by tushar on 30/07/17.
 */

import * as ReactDOM from 'react-dom'

export interface VNode {
}

export const patch: PatchFunction<VNode, void> = (node: HTMLElement, vNode: VNode) => {
  ReactDOM.render(vNode, node)
}
