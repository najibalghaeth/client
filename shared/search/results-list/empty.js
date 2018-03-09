// @flow
import * as React from 'react'
import {Box, Text, TextMixed} from '../../common-adapters'
import {globalStyles, isMobile} from '../../styles'

const owl = `
 ,___,
 [O.o]
 /)__)
 -"--"-`

function EmptyResults({style}: {style?: Object}) {
  return (
    <Box style={{...globalStyles.flexBoxCenter, ...globalStyles.flexBoxColumn, height: 256, ...style}}>
      <Text type="BodySmallSemibold">Sorry, no humans match this.</Text>
      <TextMixed type="BodySmallSemibold" style={owlStyle}>
        {owl}
      </TextMixed>
    </Box>
  )
}

const owlStyle = {
  textAlign: 'center',
  ...(isMobile ? {} : {whiteSpace: 'pre'}),
}

export default EmptyResults
