
import React from 'react'
import Ipad from "./Ipad"
import ImageB from "./ImageB"
import ImageA from './ImageA'
import ImageC from './ImageC'

export default function SalesPage() {
  return (
    <div class="flex w-full">
      <div class="flex flex-col pt-10 w-1/3">
        <ImageA />
        <ImageB />
        <ImageC />
      </div>
      <div class="flex w-1/3">
        <Ipad />
      </div>
      <div class="flex w-1/3">
        <p> Blah text </p>
      </div>
      
      
    </div>
  )
}
