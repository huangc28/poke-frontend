import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colors from '@poke/styles/colors'
import { size20Mixin } from '@poke/styles/font'

const { Provider, Consumer } = createContext({})

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  ${size20Mixin}
  cursor: pointer;
  padding: 1rem 1rem 0.6875rem 1rem;
  color: ${colors.white};
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  background: ${
    ({ isActive }) => isActive
    ? colors.tickleMePink
    : colors.silver
  };
`

const TabBar = ({ children }) => {
  return (
    <Ul>
      { children }
    </Ul>
  )
}

TabBar.propTypes = {
  children: PropTypes.node,
}

const Tab = ({ children, id, onClick }) => {
  return (
    <Consumer>
      {
        ({ setTab, activeTabID }) => (
          <Li
            onClick={evt => {
              setTab(id)

              onClick(evt)
            }}
            isActive={activeTabID === id}
          >
            { children }
          </Li>
        )
      }
    </Consumer>
  )
}

Tab.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Tab.defaultProps = {
  onClick: () => {},
}

const TabPanel = ({ whenActive, children }) => (
  <Consumer>
    {
      ({ activeTabID }) => whenActive === activeTabID
        ? children
        : null
    }
  </Consumer>
)

TabPanel.propTypes = {
  whenActive: PropTypes.string,
  children: PropTypes.node,
}

const Tabs = ({ children, defaultTab }) => {
  // we need a state to alter the display of tab
  const [ tabID, setTab ] = useState(defaultTab)

  return (
    <Provider value={{
      activeTabID: tabID,
      setTab: tabID => setTab(tabID),
    }}>
      { children }
    </Provider>
  )
}

Tabs.propTypes = {
  children: PropTypes.node,
  defaultTab: PropTypes.string,
}

export { TabBar, Tab, TabPanel }
export default Tabs