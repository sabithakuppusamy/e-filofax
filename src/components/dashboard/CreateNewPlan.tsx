import React, { Component } from 'react'

class CreateNewPlan extends Component {
    state={
        title: '',
        content:''
    }
    handleChange = (e:any)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e: any)=>{
        e.preventDefault();
        console.log(this.state);

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-2">Create New Plan</h5>
                    <div className="input-field">
                        <label htmlFor="title">Plan Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="content">Schedules</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>                        
                    </div> 
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>


                </form>
            </div>
            )
    }
}

export default CreateNewPlan
