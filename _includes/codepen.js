export default function Codepen(props) {
  return (
    <>
      <div class="cp_embed_wrapper">
        <iframe height="300" scrolling="no" title="Memory" loading="lazy"
          src={"https://codepen.io/beumsk/embed/"+ props.pen +"?default-tab=result"}>
          <a href={"https://codepen.io/beumsk/pen/" + props.pen}>See the Pen</a> by <a href="https://codepen.io/beumsk">Rémy Beumier</a>.
        </iframe>
      </div>
    </>
  )
}