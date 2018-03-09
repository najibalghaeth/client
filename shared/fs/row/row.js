// @flow
import * as React from 'react'
import * as Types from '../../constants/types/fs'
import {globalStyles, globalColors, globalMargins, isMobile} from '../../styles'
import memoize from 'lodash/memoize'
import {Box, ClickableBox, Icon, Text, Divider} from '../../common-adapters'
import PathItemIcon from './path-item-icon'

type RowProps = {
  name: string,
  type: Types.PathType,
  itemStyles: Types.ItemStyles,
  onOpen: () => void,
  openInFileUI: () => void,
  onAction: () => void,
}

export const Row = ({name, type, itemStyles, onOpen, openInFileUI, onAction}: RowProps) => (
  <Box>
    <Box style={stylesCommonRow}>
      <Box style={stylesRowContainer}>
        <ClickableBox onClick={onOpen} style={stylesRowBox}>
          <PathItemIcon spec={itemStyles.iconSpec} />
          <Box style={folderBoxStyle}>
            <Text type={itemStyles.textType} style={rowTextStyles(itemStyles.textColor)}>
              {name}
            </Text>
          </Box>
        </ClickableBox>
        {!isMobile && (
          <Box style={stylesRowRightBox}>
            <Icon type="iconfont-finder" style={rowActionIconStyle} onClick={openInFileUI} />
            <Icon type="iconfont-ellipsis" style={rowActionIconStyle} onClick={onAction} />
          </Box>
        )}
      </Box>
    </Box>
    <Divider style={stylesRowDivider} />
  </Box>
)

export const Placeholder = () => (
  <Box style={stylesCommonRow}>
    <Box style={stylesRowBox}>
      <Icon type={placeholderIcon} style={iconPlaceholderIconStyle} />
      <Box style={folderBoxStyle}>
        <Box style={placeholderTextStyle} />
      </Box>
    </Box>
  </Box>
)

const placeholderIcon = isMobile ? 'iconfont-folder-private' : 'iconfont-folder-private'

const placeholderTextStyle = {
  backgroundColor: globalColors.lightGrey,
  height: 16,
  marginTop: 4,
  width: 256,
}

const folderBoxStyle = {
  ...globalStyles.flexBoxColumn,
  ...globalStyles.flexGrow,
  flex: 1,
  justifyContent: 'space-between',
  minWidth: 0,
}

const rowActionIconStyle = {
  color: globalColors.black_40, // TODO: fix hover
  fontSize: 16,
  marginLeft: globalMargins.small,
  hoverColor: globalColors.black_60,
}

const stylesRowDivider = {
  marginLeft: isMobile ? 48 : 48,
}

const stylesCommonRow = {
  ...globalStyles.flexBoxRow,
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: isMobile ? 64 : 40,
  paddingLeft: globalMargins.small,
}

const stylesRowBox = {
  ...globalStyles.flexBoxRow,
  alignItems: 'center',
  flex: 1,
  minWidth: 0,
}

const stylesRowContainer = {
  ...stylesRowBox,
  justifyContent: 'space-between',
  paddingRight: globalMargins.small,
}

const stylesRowRightBox = {
  ...globalStyles.flexBoxRow,
  flexShrink: 1,
  justifyContent: 'flex-end',
}

const iconPlaceholderIconStyle = {
  fontSize: 32,
  marginRight: globalMargins.small,
}

const rowTextStyles = memoize(color => ({
  color,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}))
