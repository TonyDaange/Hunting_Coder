import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <main className={styles.main}>
      <div>
        <Link href={'/blogpost/how-to-learn-js'}>
          <h2 >How to Learn JavaScript in 2025?</h2>
        </Link>
        <p>JavaScript is the language used to logic for the web</p>
      </div>
      <div className="blogItem">
        <h2>How to Learn JavaScript in 2025?</h2>
        <p>JavaScript is the language used to logic for the web</p>
      </div>
      <div className="blogItem">
        <h2>How to Learn JavaScript in 2025?</h2>
        <p>JavaScript is the language used to logic for the web</p>
      </div>
    </main>
  )
}

export default Blog