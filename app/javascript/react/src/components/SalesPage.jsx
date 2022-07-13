
import React from 'react'
import Ipad from "./Ipad"
import ImageB from "./ImageB"
import ImageA from './ImageA'
import ImageC from './ImageC'
import Buy from './Buy'
import Blurb from './Blurb'

export default function SalesPage() {
  return (
    <div class="flex w-full">
      <div class="flex flex-col p-10 w-1/4">
        <div class="flex">
          <ImageA />
        </div>
        <div class="flex">
          <ImageB />
        </div>
        <div class="flex">
          <ImageC />
        </div>
      </div>
      <div class="flex flex-col justify-between w-1/2">
        <div class="flex justify-center">
          <Logo />
        </div>
        <div class="flex">
          <Ipad />
        </div>
        
      </div>
      <div class="flex flex-col w-full justify-center pr-10 w-1/4">
        <div>
          <Blurb />
        </div>
        <div class="mt-6">
          <Buy />
        </div>
      </div>
    </div>
    </div>
  )
}
