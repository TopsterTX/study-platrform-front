'use client'

import { Button } from 'antd'
import { Header, Space, TextPost, useBreakpoints } from '@/shared'
import {
  Card,
  CardFooter,
  CardHeader,
  Image,
  Listbox,
  ListboxItem,
} from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useUnit } from 'effector-react'
import {
  $getCurrentUserData,
  $getCurrentUserDataFxPending,
  getCurrentUserDataFx,
} from '@/features'

const HomePageClient = ({ userData }) => {
  // const [_, userData] = useUnit([
  //   $getCurrentUserDataFxPending,
  //   $getCurrentUserData,
  // ])
  const { sm, md, xl, lg } = useBreakpoints()

  console.log({ userData })

  return (
    <>
      <Header />
      <div className="h-full px-4 md:px-8 xl:px-12 grid grid-cols-4 gap-4 grid-rows-4">
        {md && (
          <Card className="max-w-sm row-span-2">
            <Listbox
              aria-label="Example with disabled actions"
              // onAction={(key) => alert(key)}
            >
              <ListboxItem key="posts">Posts</ListboxItem>
              <ListboxItem key="quizzes">Quizzes</ListboxItem>
              <ListboxItem key="subscriptions">Subscriptions</ListboxItem>
              <ListboxItem key="videos">Videos</ListboxItem>
            </Listbox>
          </Card>
        )}
        <div className="col-span-4 row-span-4 md:col-span-3 gap-2 grid grid-cols-12 grid-rows-2">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Что почитать
              </p>
              <h4 className="text-black font-medium text-large">
                Huawei Pura 70: нативные сервисы Google и все недостающие
                приложения на борту
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/611/c03/dc4/611c03dc435929bf4882dfcb9289a82f.png"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Plant a tree
              </p>
              <h4 className="text-white font-medium text-large">
                Contribute to the planet
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-3.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Supercharged
              </p>
              <h4 className="text-white font-medium text-large">
                Creates beauty like a beast
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button className="text-tiny" color="primary" size="middle">
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good night's sleep.
                  </p>
                </div>
              </div>
              <Button size="middle">Get App</Button>
            </CardFooter>
          </Card>
          <TextPost
            className="col-span-12"
            userProps={{ name: 'Zoey1', description: '@zoeylang1' }}
            content="Frontend developer and UI/UX enthusiast. Join me on this coding adventure!  💻 by @zoeylang"
            hashes="#FrontendWithZoey #CodingWithZoey #UIUXWithZoey #NextjsWithZoey"
          />
        </div>
      </div>
    </>
  )
}

export default HomePageClient
