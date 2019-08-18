import React, { Component } from 'react'

export default class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImg:[],
            loading:false,
            topText:"",
            bottomText:""

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event){
       const {name,value} = event.target
       this.setState({
           [name]:value
       })

    }
    handleClick(e){
        e.preventDefault();
        let item = this.state.allMemeImg;
        let meme = item[Math.floor(Math.random()*item.length)]
        this.setState({
            randomImg:meme.url
        })

    }
    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response=>{
            const{memes} = response.data
            console.log(memes[0])
        this.setState({allMemeImg:memes})})
        

    }
    render() {
       

        
        return (
            <div>
                <form className = "meme-form">
                    
                    <input placeholder="Top Text" onChange={this.handleChange} type="textarea" name="topText" value={this.state.topText}/>
                    <input placeholder="Bottom Text"onChange={this.handleChange} type="textarea" name="bottomText" value={this.state.bottomText}/>
                    <button onClick={this.handleClick}>Generate</button>
                    </form>
                    <div  className="meme" >
                        <img src={this.state.randomImg} alt=""/>
                        <h2 align="center" className="top"> {this.state.topText} </h2>
                        <h2 align="center"className="bot"> {this.state.bottomText} </h2>



                    </div>





                
            </div>
        )
    }
}
