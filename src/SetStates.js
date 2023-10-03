// import React, { useState } from 'react'

// export default function SetStates() {
//     var [name,setName]=useState('');
//     var [email,setEmail]=useState('');
//     var [contact,setContact]=useState('');
//     var [password,setPassword]=useState('');

//     var userData=()=>{
//         setName({name:''});
//         setEmail({email:''});
//         setContact({contact:''});
//         setPassword({password:''});
//         console.log(name,email,contact,password);
//     }

//     const passhandle =(e)=>{
//        setPassword(e.target.value),

//     }
//   return (
//     <div>
//         {/* <!-- Button trigger modal --> */}
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Add user Data
// </button>

// {/* <!-- Modal --> */}
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">User Form...</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//       <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">name</label>
//     <input type="text" value={name} class="form-control" onChange={(e)=>setName(e.target.value)} id="exampleInput"/>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputEmail" class="form-label">email</label>
//     <input type="email" value={email} class="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail"/>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputNumber" class="form-label">Contact</label>
//     <input type="number" value={contact} class="form-control" onChange={(e)=>setContact(e.target.value)} id="exampleInputNumber"/>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword" class="form-label">password</label>
//     <input type="password" value={password} class="form-control" onChange={passhandle} id="exampleInputPassword"/>
//   </div>
// </form>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
//         <button type="button" class="btn btn-primary" onClick={userData}>Submit</button>
//       </div>
//     </div>
//   </div>
// </div>


//     </div>
//   )
// }

//class component form...

import React, { Component } from 'react'

export default class SetStates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            contact: '',
            password: ''
        }
        this.handlefun = this.handlefun.bind(this);
        this.userData = this.userData.bind(this);
    }
    // userData=()=>{this.setState({name:'',email:'',contact:'',password:''})}
    handlefun = (e) => {
        // this.setState({})
        // this.setState({ email: "", contact: "", password: "" })
        // console.log(e.target.value);
        // console.log(e.target.name);
        var name = e.target.name;
        var value = e.target.value;
        this.setState(
            { [e.target.name]: value }
        )
    }
    userData = (e) => {
        // e.target.this.handlefun()
        console.log(this.state.name, this.state.email, this.state.contact, this.state.password);
    }
    // componentDidMount(){
    //     this.userData();
    //     console.log(this.userData);
    // }
    render() {
        return (
            <div>
                {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add user Data
                </button>

                {/* <!-- Modal --> */}
                {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">User Form...</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">name</label>
                                        <input type="text" value={this.state.name} class="form-control" onChange={(e)=>this.setState({name:e.target.value})} id="exampleInput" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail" class="form-label">email</label>
                                        <input type="email" value={this.email} class="form-control" onChange={(e)=>this.setState({email:e.target.value})} id="exampleInputEmail" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputNumber" class="form-label">Contact</label>
                                        <input type="number" value={this.contact} class="form-control" onChange={(e)=>this.setState({contact:e.target.value})} id="exampleInputNumber" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword" class="form-label">password</label>
                                        <input type="password" value={this.password} class="form-control" onChange={(e)=>this.setState({password:e.target.value})} id="exampleInputPassword" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                <button type="button" class="btn btn-primary" onClick={(e)=>this.userData(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">User Form...</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">name</label>
                                        <input type="text" value={this.state.name} name='name' class="form-control" onChange={(e) => this.handlefun(e)} id="exampleInput" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail" class="form-label">email</label>
                                        <input type="email" value={this.state.email} name='email' class="form-control" onChange={(e) => this.handlefun(e)} id="exampleInputEmail" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputNumber" class="form-label">Contact</label>
                                        <input type="number" value={this.state.contact} name='contact' class="form-control" onChange={(e) => this.handlefun(e)} id="exampleInputNumber" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword" class="form-label">password</label>
                                        <input type="password" value={this.state.password} name='password' class="form-control" onChange={(e) => this.handlefun(e)} id="exampleInputPassword" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={(e)=>this.resetData(e)}>Close</button>
                                <button type="button" class="btn btn-primary" onClick={(e) => this.userData(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

