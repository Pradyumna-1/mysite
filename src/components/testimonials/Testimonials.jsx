import React from 'react'
import './testimonials.css'
import AVIR1 from '../../assets/avatar1.jpg'
import AVIR2 from '../../assets/avatar2.jpg'
import AVIR3 from '../../assets/avatar3.jpg'
import AVIR4 from '../../assets/avatar4.jpg'
function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from cliencts </h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
      <article className='testimonial'>
        <div className='client__avatar'>
          <img src={AVIR1} alt='Avatar One'/>
        </div >           
          <h5 className='client__name'> Earnest Archiever</h5>
          <smal className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione a impedit illo libero quibusdam recusandae cupiditate explicabo doloremque excepturi. Voluptates sapiente optio accusamus dolores, saepe totam, alias nam eos dicta voluptatem maiores nobis sit animi id aperiam suscipit itaque quo provident culpa eum natus. Soluta quis laboriosam dolores suscipit?
          </smal>
      </article>


      <article className='testimonial'>
        <div className='client__avatar'>
          <img src={AVIR2} alt='Avatar One'/>
        </div >           
          <h5 className='client__name'> Earnest Archiever</h5>
          <smal className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione a impedit illo libero quibusdam recusandae cupiditate explicabo doloremque excepturi. Voluptates sapiente optio accusamus dolores, saepe totam, alias nam eos dicta voluptatem maiores nobis sit animi id aperiam suscipit itaque quo provident culpa eum natus. Soluta quis laboriosam dolores suscipit?
          </smal>
      </article>

      <article className='testimonial'>
        <div className='client__avatar'>
          <img src={AVIR3} alt='Avatar One'/>
        </div >           
          <h5 className='client__name'> Earnest Archiever</h5>
          <smal className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione a impedit illo libero quibusdam recusandae cupiditate explicabo doloremque excepturi. Voluptates sapiente optio accusamus dolores, saepe totam, alias nam eos dicta voluptatem maiores nobis sit animi id aperiam suscipit itaque quo provident culpa eum natus. Soluta quis laboriosam dolores suscipit?
          </smal>
      </article>


      <article className='testimonial'>
        <div className='client__avatar'>
          <img src={AVIR4} alt='Avatar One'/>
        </div >           
          <h5 className='client__name'> Earnest Archiever</h5>
          <smal className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione a impedit illo libero quibusdam recusandae cupiditate explicabo doloremque excepturi. Voluptates sapiente optio accusamus dolores, saepe totam, alias nam eos dicta voluptatem maiores nobis sit animi id aperiam suscipit itaque quo provident culpa eum natus. Soluta quis laboriosam dolores suscipit?
          </smal>
      </article>

      </div>
    </section>
  )
}

export default Testimonials
