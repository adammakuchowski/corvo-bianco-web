import {useState} from 'react'
import Head from 'next/head'

import HomeContext, {HomeContextValue} from '@/context/HomeContext'
import ProductGallery from '@/features/products/product_gallery/ProductGallery'
import About from '@/components/pages/home/about/About'
import Banner from '@/components/pages/home/banner/Banner'
import Blogs from '@/components/pages/home/blogs/Blogs'
import CommunityEvents from '@/components/pages/home/community_events/CommunityEvents'
import Navbar from '@/components/pages/home/navbar/Navbar'
import Footer from '@/components/shared/footer/Footer'
import {PreLoader} from '@/components/pages/home/pre-loader/PreLoader'

export default function Home (): JSX.Element {
  const [className, setClassName] = useState<string>('')

  const homeContextValue: HomeContextValue = {
    className
  }

  return (
    <HomeContext.Provider value={homeContextValue}>
      <PreLoader setClassName={setClassName} />
      <Head>
        <title>Corvo Bianco Premium Wines</title>
        <meta name="description" content="High quality premium wine shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <About />
      <ProductGallery />
      <CommunityEvents />
      <Blogs />
      <Footer />
    </HomeContext.Provider>
  )
}
