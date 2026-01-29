import React from 'react'
import './projects.css'
import perfume from '../../assets/perfume.png'
import todo from '../../assets/todo.png'
import simon from '../../assets/simon.png'
import product from '../../assets/product.png'
import bank from '../../assets/bank.webp'
import backend from '../../assets/backend.png'
import admin from '../../assets/admin.png'

const projects = [
  {
    id: 1,
    image: perfume,
    alt: 'Perfume E-commerce',
    title: 'Perfume E-commerce',
    description: 'My first real full-stack e-commerce web application for purchasing perfumes.',
    code:'https://github.com/yasso2006/2M_perfume_store_frontend',
    demo: 'https://2-m-perfume-store-frontend.vercel.app/',
  },
  {
    id: 2,
    image: backend,
    alt: 'Perfume E-commerce Backend',
    title: 'Perfume E-commerce Backend',
    description: 'The backend code of perfume store',
    code: 'https://github.com/yasso2006/2M_perfume_store_backend',
    demo: false,
  },
  {
    id: 3,
    image: admin,
    alt: 'Admin Dashboard',
    title: 'Admin Dashboard',
    description: 'An admin dashboard for managing products, orders, and users in the perfume e-commerce application.',
    code: 'https://github.com/yasso2006/2M_perfume_store_admin',
    demo: false,
  },
  {
    id: 4,
    image: todo,
    alt: 'To-Do List',
    title: 'To-Do List',
    description: 'A simple and effective to-do list application to manage daily tasks.',
    code: 'https://github.com/yasso2006/To-Do-List_frontend',
    demo: 'https://to-do-list-frontend-gamma-khaki.vercel.app/',
  },
  {
    id: 5,
    image: backend,
    alt: 'To-Do List Backend',
    title: 'To-Do List Backend',
    description: 'The backend code of To-Do List',
    code: 'https://github.com/yasso2006/To-Do-List_backend',
    demo: false,
  },
  {
    id: 6,
    image: simon,
    alt: 'Simon Game',
    title: 'Simon Game',
    description: 'A fun and interactive Simon game that tests memory skills.',
    code: 'https://github.com/yasso2006/Simon-game',
    demo: 'https://yasso2006.github.io/Simon-game/',
  },
  {
    id: 7,
    image: product,
    alt: 'Product Landing Page',
    title: 'Product Landing Page',
    description: 'A product mangment landing page designed to manage your store',
    code: 'https://github.com/yasso2006/Product-Mangment',
    demo: 'https://yasso2006.github.io/Product-Mangment/',
  },
  {
    id: 8,
    image: bank,
    alt: 'Banking App',
    title: 'Banking App',
    description: 'A banking system by C language that allows users to manage their accounts.',
    code: 'https://github.com/yasso2006/Bank_System',
    demo: false,
  }
];

function Projects() {
  return (
    <section className="projects" id='projects'>
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container container_projects">
        {projects.map((project) => (
          <article key={product.id} className="card_project">
            <div className="image">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
            <div className="projects_btns">
              <a href={project.code} className='btn' target='_blank'>Github Code</a>
              {project.demo && <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects