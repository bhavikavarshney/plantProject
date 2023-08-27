import React from 'react'

const Landing = () => {
  return (
    <div>

<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
  <select className="select select-ghost w-full max-w-xs">
                <option disabled defaultValue>
                  Class
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>

              <select className="select select-ghost w-full max-w-xs">
                <option disabled defaultValue>
                  Section
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
  </form>
</dialog>


     
    </div>
  )
}

export default Landing