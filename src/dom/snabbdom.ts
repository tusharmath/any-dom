/**
 * Created by tushar on 30/07/17.
 */


import snabbdom = require('snabbdom')
import Class from 'snabbdom/modules/class'
import EventListeners from 'snabbdom/modules/eventlisteners'
import Props from 'snabbdom/modules/props'
import Style from 'snabbdom/modules/style'
import {VNode} from 'snabbdom/vnode'


const patcher = snabbdom.init([
  Class,
  Props,
  Style,
  EventListeners,
])

export const patch: PatchFunction<VNode, void> = (node: HTMLElement, vNode: VNode) => {
  patch(node, vNode)
}