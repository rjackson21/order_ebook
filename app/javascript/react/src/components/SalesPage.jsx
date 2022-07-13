
import React from 'react'
import Ipad from "./Ipad"
import ImageB from "./ImageB"
import ImageA from './ImageA'
import ImageC from './ImageC'
import Buy from './Buy'

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
      <div class="flex flex-col justify-center w-1/2">
        <Ipad />
      </div>
      <div class="flex flex-col justify-center w-1/4">
        <p> Blah text </p>
        <Buy />
      </div>
      
      
    </div>
  )
}
