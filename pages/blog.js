import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs || [])
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   })
  //     .then((parsed) => {
  //       setBlogs(parsed)
  //     })
  // }, [])

  return (
    <main className={styles.main}>
      {blogs.map((blogitem) => {
        return (
          <div key={blogitem.slug} className={styles.blogitem}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h2 className={styles.blogItemTitle}>{blogitem.title}</h2>
              <p>{blogitem.content.substr(0, 150)}...</p>
            </Link>
          </div>
        )
      })}
    </main>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()

  return {
    props: {allBlogs}, // Will be passed to the page component
  };
}

export default Blog