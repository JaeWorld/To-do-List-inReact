import React, {Component} from 'react';

class Add extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    state = {
    }

    handleClick = () => {
        console.log('this is', this.state.value)
    }

    handlechange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    render() {
        return (
            <form>
                <input
                type="text"
                placeholder="할 일"
                value={this.state.task}
                onChange={this.handleChange}
                task="task"
                />
                <br/><br/>
                <button  onClick={this.handleClick}>등록</button>
                <hr/>
            </form>
        )
    }
}

export default Add;