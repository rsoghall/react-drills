import React, {Component} from 'react'

class Image extends Component(props){
    render (){
        return(

            <div>
                <img src={props.myImage} alt='whatever'/>
            </div>
        )
}
}
export default Image