import {useEffect, useState} from 'react'
import Head from 'next/head'
import HomeContext, {HomeContextValue} from '@/context/HomeContext'
import ProductGallery from '@/features/products/product_gallery/ProductGallery'
import About from '@/components/Home/about/About'
import Banner from '@/components/Home/banner/Banner'
import Blogs from '@/components/Home/blogs/Blogs'
import CommunityEvents from '@/components/Home/community_events/CommunityEvents'
import Navbar from '@/components/Home/navbar/Navbar'
import Footer from '@/components/shared/footer/Footer'

export default function Home() {
  const [className, setClassName] = useState<string>('')

  useEffect(() => {
    setClassName('active')
  }, [])

  const homeContextValue: HomeContextValue = {
    className: className,
  }

  return (
    <HomeContext.Provider value={homeContextValue}>
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
