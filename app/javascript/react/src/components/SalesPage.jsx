
import React from 'react'
import Ipad from "./Ipad"
import Images from "./Images"

export default function SalesPage() {
  return (
    <div class="flex w-full">
      <div class="flex w-1/3">
        <Images />
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
