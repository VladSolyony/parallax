import './style.css'

function Description ({
  slide
}) {
  return ( 
    <div
      className={slide > 0 ? "description-hidden" :"description"}
    >
      <div className="logo">Parallax</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, excepturi debitis alias veniam nobis accusantium odio. Eveniet vel rem, odio sed assumenda minima sapiente labore cumque voluptatibus, nihil nemo obcaecati voluptas earum accusamus doloribus rerum deserunt molestias quidem incidunt iste hic saepe. Ratione quia at facere in repellendus. Tempora, delectus.</p>
    </div>
   );
}

export default Description;