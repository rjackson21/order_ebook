
import React from 'react'
import Logo from "./Logo"
import Ipad from "./Ipad"
import ImageB from "./ImageB"
import ImageA from './ImageA'
import ImageC from './ImageC'
import Buy from './Buy'
import Blurb from './Blurb'

export default function SalesPage() {
  return (
    <div className="flex flex-col">
    <div className="flex w-full justify-center">
      
    </div>
    <div className="flex w-full">
      <div className="flex flex-col p-10 w-1/4">
        <div className="flex">
          <ImageA />
        </div>
        <div class="flex">
          <ImageB />
        </div>
        <div className="flex">
          <ImageC />
        </div>
      </div>
      <div className="flex flex-col justify-between w-1/2">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex">
          <Ipad />
        </div>
        
      </div>
      <div className="flex flex-col w-full justify-center pr-10 w-1/4">
        <div>
          <Blurb />
        </div>
        <div className="mt-6">
          <Buy />
        </div>
      </div>
    </div>
    </div>
  )
}
