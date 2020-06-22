import React from 'react';


class SearchCom extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            value: "",
            result: ''
        }
    }

    render(){
         return   (
             <div>
                 <input type="text" placeholder="please enter the province" onKeyDown={this.searchEvent} value={this.state.value} onChange={this.changeEvent} />
                 <div>
                     <h2>Search Result</h2>
                     <div>
                         {this.state.result}
                     </div>
                 </div>
             </div>
         )
    }
    searchEvent=(e)=>{ 
        if(e.keyCode === 13){
            console.log(e.keyCode)
            console.log(e.target.value);
            // console.log(this.props.provinceObj)
            if(this.props.provinceObj[e.target.value] == undefined){
                return this.setState({
                    result :<span>输入省会不正确</span>
                })
            }else{
                this.setState({
                    result: (
                        <div>
                            <span>确诊人数： {this.props.provinceObj[e.target.value].confirm}</span> <br></br>
                            <span>死亡人数： {this.props.provinceObj[e.target.value].dead}</span>   <br></br>
                            <span>治愈人数：{this.props.provinceObj[e.target.value].heal}</span>
                        </div>
                    )
                })
            }
        }
    }
    changeEvent=(e)=>{
       this.setState({
           value:e.target.value
       })
    }
}


export default SearchCom