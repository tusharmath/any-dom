/**
 * Created by tushar on 30/07/17.
 */

import {render} from 'preact'
import VNode = preact.VNode

let dom: any = null
export const patch: PatchFunction<VNode, void> = (node: HTMLElement, vNode: VNode) => {
  dom = render(vNode, node, dom)
}
