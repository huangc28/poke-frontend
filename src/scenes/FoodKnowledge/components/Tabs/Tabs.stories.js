import React from 'react'
import { storiesOf } from '@storybook/react'

import Tabs, { TabPanel, TabBar, Tab } from './Tabs';

storiesOf('Tabs', module)
  .add('Tabs', () => {
    return (
      <Tabs defaultTab='a'>
        <TabBar>
          <Tab
            onClick={evt => {
              console.log('on click tab a')
            }}
            id='a'
          >
            乾飼料資料庫
          </Tab>

          <Tab id='b'>
            罐罐料資料庫
          </Tab>
        </TabBar>

        <TabPanel whenActive='a'>
          a panel
        </TabPanel>

        <TabPanel whenActive='b'>
          b panel
        </TabPanel>
      </Tabs>
    )
  })