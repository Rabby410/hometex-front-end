import React from "react";
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Homepage from './allPages/Index'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hometex Bangladesh Manufactory</title>
        <meta name="description" content="Developed By Shahadath Hossain for Hometex Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hometex-logo.ico" />
      </Head>
      <Homepage />
    </>
  )
}
