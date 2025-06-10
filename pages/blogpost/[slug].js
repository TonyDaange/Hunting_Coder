import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
    const router = useRouter()
    const { slug } = router.query;
    return (
        <>
            <main className={styles.main}>
                <h1>Title of the page {slug}</h1>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia aspernatur, quasi ipsum unde molestias alias porro deleniti sunt quisquam officia. Fugit, voluptate! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nulla quaerat, laboriosam voluptates ab facilis omnis ducimus et iure recusandae aliquam officiis porro excepturi vitae tempore, error debitis maxime maiores, delectus cupiditate! Facere incidunt minima dolor mollitia omnis, quidem officiis nihil, facilis delectus quisquam animi est quibusdam, explicabo cupiditate corporis dolores. Minima aperiam soluta nihil, repellat optio fugit velit vero quaerat veritatis porro. Itaque delectus eius a reiciendis quam harum aliquid eos deserunt odio inventore placeat maxime doloribus facere fugiat labore facilis ad, impedit est asperiores debitis cum voluptatum illum excepturi ipsum? Consectetur dolore doloremque, incidunt iusto mollitia enim labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sunt nesciunt, sit placeat ullam nulla obcaecati asperiores doloremque non veritatis soluta, fugit cumque quo? Odit quaerat aliquam officia, sint nobis incidunt. Itaque praesentium deleniti magnam fugiat explicabo eveniet illo. Eos, consectetur in architecto nostrum laboriosam illo necessitatibus accusantium dolorem totam autem eligendi, aliquid ut amet minima eaque eveniet? Ipsam dicta obcaecati eaque error iusto autem laborum ut officia eligendi, ex iure est officiis modi quos quo quasi sapiente nemo non. Cupiditate quasi corporis vel tempore rem temporibus similique veniam, voluptates, repellat harum ipsum nulla necessitatibus consequuntur nisi fugiat, quis voluptas ullam iure enim dolorum assumenda. Voluptates, molestiae dolores perferendis, quos deserunt iusto, adipisci praesentium esse atque eum sunt. Commodi, rerum! Officiis qui perspiciatis minima laudantium ad excepturi. Illum at quos hic voluptate corporis iste deserunt quidem natus, mollitia quaerat. Aliquam ducimus unde debitis culpa quasi accusamus pariatur necessitatibus dolore praesentium! Necessitatibus vitae asperiores, aut nostrum vel, sequi dolore, dolores praesentium quidem id dolorem voluptates exercitationem accusamus tenetur nisi ullam molestiae itaque. Fugiat natus magnam sequi optio hic minima eligendi ratione et maxime. Corporis corrupti, magni, quo nobis, nesciunt natus ullam reprehenderit et aperiam dolorum velit perferendis rerum expedita itaque? Sunt!
                </div>
            </main>
        </>
    )
}

export default slug