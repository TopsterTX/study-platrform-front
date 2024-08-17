import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Skeleton,
} from '@nextui-org/react'
import cn from 'classnames'
import React from 'react'

export type ArticlePostProps = {
  content?: string
  imageSrc?: string
  headerText?: string
  className?: string
  isLoaded?: boolean
}

export const ArticlePreview = ({ className, isLoaded }: ArticlePostProps) => {
  return (
    <Card className={cn(className, 'px-3 py-3 flex flex-col gap-8')}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex gap-2">
            <div className="w-14 h-14">
              <Skeleton isLoaded={isLoaded} className="rounded-full w-14 h-14">
                <Avatar className="w-14 h-14" />
              </Skeleton>
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <Skeleton isLoaded={isLoaded} className="h-4 w-2/12 rounded-md">
                <h4 className="font-bold">Username</h4>
              </Skeleton>
              <Skeleton isLoaded={isLoaded} className="h-2 w-1/12 rounded-md">
                <p className="text-neutral-400 text-xs">Должность</p>
              </Skeleton>
              <Skeleton isLoaded={isLoaded} className="h-3 w-1/12 rounded-lg">
                <p className="text-neutral-400 text-xs">10.08.2024</p>
              </Skeleton>
            </div>
          </div>
        </div>
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <Button color="primary" size="sm" variant="shadow">
            Подписаться
          </Button>
        </Skeleton>
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton isLoaded={isLoaded} className="w-5/12 rounded-lg">
          <h3>Заголовок</h3>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <div className="h-44 rounded-lg bg-main ">Превью статьи...</div>
        </Skeleton>
      </div>
      <Skeleton isLoaded={isLoaded} className="h-3 w-4/12 rounded-lg">
        <p className="text-neutral-300 text-xs">#хештеги</p>
      </Skeleton>
    </Card>
  )
}
