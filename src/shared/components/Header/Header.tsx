'use client'

import React from 'react'
import { Space } from '@/shared'
import {
  Popover,
  Avatar,
  PopoverTrigger,
  PopoverContent,
  Listbox,
  ListboxItem,
} from '@nextui-org/react'
import {
  logoutFx,
  $getCurrentUserDataFxPending,
  $getCurrentUserData,
  getUserDataEvent,
} from '@/features'
import { useUnit } from 'effector-react'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()
  const [pending, userData] = useUnit([
    $getCurrentUserDataFxPending,
    $getCurrentUserData,
  ])

  const listBoxActionHandler = async (key: unknown) => {
    if (key === 'logout') {
      await logoutFx()
      router.replace('/signin')
    }
  }

  return (
    <div className="h-14 py-3 px-4 mb-8 shadow-md">
      <div className="max-w-7xl m-auto">
        <Space className="justify-end">
          <Popover placement="right">
            <PopoverTrigger>
              <Avatar />
            </PopoverTrigger>
            <PopoverContent>
              <Listbox
                aria-label="Example with disabled actions"
                onAction={listBoxActionHandler}
              >
                <ListboxItem key="settings">Settings</ListboxItem>
                <ListboxItem
                  key="logout"
                  className="text-danger"
                  color="danger"
                >
                  Logout
                </ListboxItem>
              </Listbox>
            </PopoverContent>
          </Popover>
        </Space>
      </div>
    </div>
  )
}
