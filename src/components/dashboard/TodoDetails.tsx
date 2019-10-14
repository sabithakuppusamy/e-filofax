import React from 'react'

const TodoDetails = (props: any)=> {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Daily Plan - {id}
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum cumque maxime, error iure soluta hic, dolore quos earum id vitae. Qui voluptatum voluptatibus eum repudiandae quisquam, deserunt veritatis eligendi.

                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>28th July-2018</div>
                </div>
            </div>
        </div>
    )
}

export default TodoDetails
