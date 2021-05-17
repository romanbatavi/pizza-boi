import React from 'react'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar