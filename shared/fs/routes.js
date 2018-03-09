// @flow
import * as I from 'immutable'
import Files from './container'
import SortBarPopupMenu from './sortbar/sort-setting-popup.js'
import BreadcrumbPopupMenu from './header/breadcrumb-popup'
import RelativePopupHoc from '../common-adapters/relative-popup-hoc'
import {makeRouteDefNode, makeLeafTags} from '../route-tree'
import RowPopupMenu from './row/popup'

const _folderRoute = {
  children: {
    folder: () => folderRoute,
    breadcrumbAction: {
      component: RelativePopupHoc(BreadcrumbPopupMenu),
      tags: makeLeafTags({layerOnTop: true}),
    },
    sortbarAction: {
      component: RelativePopupHoc(SortBarPopupMenu),
      tags: makeLeafTags({layerOnTop: true}),
    },
    rowAction: {
      component: RelativePopupHoc(RowPopupMenu),
      tags: makeLeafTags({layerOnTop: true}),
    }
  },
  component: Files,
}

const folderRoute = makeRouteDefNode(_folderRoute)

const routeTree = makeRouteDefNode({
  ..._folderRoute,
  initialState: {expandedSet: I.Set()},
  tags: makeLeafTags({title: 'Files'}),
})

export default routeTree
