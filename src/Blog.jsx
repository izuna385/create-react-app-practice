import React from 'react';
import Article from './Article';

import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'

const Blog = () => {

    // componentDidMount() {
    //     document.getElementById('counter').addEventListener('click', this.countUp)
    // }

    // componentDidUpdate() {
    //     if (this.state.count>=10){
    //         this.setState({count: 0})
    //     }
    // }

    // componentWillUnmount() {
    //     document.getElementById('counter').removeEventListener('click', this.countUp)
    // }

    // togglePublished = () => {
    //     this.setState({
    //         isPublished: !this.state.isPublished
    //     })
    // };

    // countUp = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    return (
        <>
            <Article 
            title={"Reactの使い方"}
            // count={this.state.count}
            />
            <FooBar.Foo />
            <FooBar.Bar />
            <Hoge />
        </>
    )
    
}

export default Blog