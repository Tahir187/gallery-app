"use client"
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Gallery app</h1>
      <CldUploadButton uploadPreset="iaeymlgr" />
    </main>
  )
}
