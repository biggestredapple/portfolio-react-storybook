import { BrowserRouter } from 'react-router-dom'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Navbar } from '.'

export default {
    title: 'Layout/Navbar',
    component: Navbar
} as Meta<typeof Navbar>

const Template: StoryFn<typeof Navbar> = (args) => {
  return (
    <BrowserRouter>
      <Navbar {...args} />
    </BrowserRouter>
    )
}

export const Regular: StoryObj<typeof Navbar> = Template.bind({})

Regular.args = {
  positionStyle: {
    width: '90%',
    height: '100px', 
    top: '0',
  },
  userInfo: {
    name: 'Patrick Cole',
    logoAndName: true,
    showLogo: false,
    logoSrc: 'https://gravatar.com/avatar/0049899697a20656c5b24dce5b3d016c?s=400&d=mp&r=pg'
  },
  userInfoNameTextStyle: {
    textTransform: 'uppercase'
  },
  bgColor: '#d4e7fe',

  menuItems: [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Experience',
      link: '/experience'
    },
    {
      name: 'Education',
      link: '/education'
    },
    {
      name: 'Project',
      link: '/project'
    },
    {
      name: 'Contat me',
      link: '/contact'
    }
  ],
  menuItemStyle: {
    padding: '8px 16px',
    borderRadius: '8px',
  }
}

export const Smart: StoryObj<typeof Navbar> = Template.bind({})

Smart.args = {
  positionStyle: {
    width: '600px',
    height: '50px',
    bottom: '50px',
  },
  borderStyle: {
    border: 'none',
    borderRadius: '50px',
  },
  userInfo: {
    name: 'Carlos',
    showLogo: true,
    logoAndName: false
  },
  bgColor: '#1e1',

  menuItems: [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Experience',
      link: '/experience'
    },
    {
      name: 'Education',
      link: '/education'
    },
    {
      name: 'Project',
      link: '/project'
    },
    {
      name: 'Contat me',
      link: '/contact'
    }
  ],
  menuItemStyle: {
    bgColor: '#1e1',
    bgFocusColor: '1e1',
    fontColor: '#000',
    focusFontWeight: '600'
  }
}