import Apply from '@/components/Apply'
import ApplyBlogs from '@/components/ApplyBlogs'
import ApplyNow from '@/components/ApplyNow'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function ApplyPage() {
    return (
        <>
            <Header />
            <ApplyNow />
            <ApplyBlogs />
            <Apply />
            <Footer />
        </>
    )
}

export default ApplyPage