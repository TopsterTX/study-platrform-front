'use client'

import { Card, Input, Listbox, ListboxItem } from '@nextui-org/react'
import React, { useEffect, useLayoutEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { useUnit } from 'effector-react'
import {
  $getCurrentUserData,
  $getCurrentUserDataFxPending,
  getUserDataEvent,
} from '@/features'
import { ArticlePreview, Header, useBreakpoints } from '@/shared'

const HomePage = () => {
  const [pending, userData, getUserData] = useUnit([
    $getCurrentUserDataFxPending,
    $getCurrentUserData,
    getUserDataEvent,
  ])

  // const { sm, md, xl, lg } = useBreakpoints()

  useLayoutEffect(() => {
    getUserData()
  }, [getUserData])

  return (
    <>
      <Header />
      <div className="max-w-7xl m-auto h-full px-4 md:px-8 xl:px-12 flex flex-col gap-8">
        <div className="grid grid-cols-8 gap-4 grid-rows-2">
          <Card className="h-[300px] row-span-1 col-span-3 hidden md:block" />
          <ArticlePreview
            className="row-span-1 col-span-8 md:col-span-5"
            isLoaded={!pending}
          />
          <ArticlePreview
            className="row-span-1 col-span-8 md:col-span-5 md:col-start-4"
            isLoaded={!pending}
          />
          <ArticlePreview
            className="row-span-1 col-span-8 md:col-span-5 md:col-start-4"
            isLoaded={!pending}
          />
          <ArticlePreview
            className="row-span-1 col-span-8 md:col-span-5 md:col-start-4"
            isLoaded={!pending}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage
