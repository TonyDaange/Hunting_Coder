import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <main className={styles.main}>
      <div>
        <Link href={'/blogpost/how to learn javascript'}>
          <h3 >How to Learn JavaScript in 2025?</h3>
        </Link>
        <p>JavaScript is the language used to logic for the web</p>
      </div>
      <div className="blogItem">
        <h3>How to Learn JavaScript in 2025?</h3>
        <p>JavaScript is the language used to logic for the web</p>
      </div>
      <div className="blogItem">
        <h3>How to Learn JavaScript in 2025?</h3>
        <p>JavaScript is the language used to logic for the web</p>
      </div>
    </main>
  )
}

export default Blog