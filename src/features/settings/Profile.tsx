import Image from 'next/image'
import React from 'react'

import { Heading } from './Heading'

export const Profile = () => {
  const [value, setValue] = React.useState('')
  const onSubmit = React.useCallback(() => {
    console.log('submit')
  }, [])

  const handleClickUploadAvatar = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const url = URL.createObjectURL(e.target?.files?.[0] as Blob)
      setValue(url)
    },
    []
  )

  return (
    <div className="px-9 mx-auto max-w-2xl">
      <form onSubmit={onSubmit}>
        <div className="space-y-6">
          <div>
            <Heading as="label">アイコン</Heading>
            <div className="flex items-center mt-2 space-x-4">
              <Image
                src={value ? value : '/mypage.png'}
                width="100"
                height="100"
              />
              <label
                htmlFor="avatar"
                className="flex justify-center items-center w-20 h-9 text-xs font-bold bg-slate-100 rounded-full cursor-pointer"
              >
                変更する
                <input
                  className="hidden"
                  type="file"
                  id="avatar"
                  accept="image/jpeg, image/png"
                  onChange={e => handleClickUploadAvatar(e)}
                />
              </label>
            </div>
          </div>
          <div>
            <Heading as="label">名前</Heading>
            <input
              className="px-4 mt-2 w-full h-11 text-sm bg-slate-100 rounded-full"
              name="username"
            />
          </div>
        </div>
        <div className="mt-9">
          <button
            className="w-full h-14 text-sm font-bold text-white bg-blue-500 rounded-full"
            type="submit"
          >
            保存する
          </button>
        </div>
      </form>
    </div>
  )
}
