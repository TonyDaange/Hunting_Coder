import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog || {})
    // const router = useRouter()
    // useEffect(() => {
    //     if (!router.isReady) return; // Ensure the router is ready before accessing query parameters
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
    //         return a.json();
    //     })
    //         .then((parsed) => {
    //             setBlog(parsed)
    //         })
    // }, [router.isReady])

    return (
        <>
            <main className={`${styles.main} ${styles.blogitem}`}>
                <h1>{blog && blog.title}</h1>
                <div>
                    <p className=''>{blog && blog.content}</p>
                </div>
            </main>
        </>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query)
    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    let myBlog = await data.json()

    return {
        props: { myBlog }, // Will be passed to the page component
    };
}



export default slug