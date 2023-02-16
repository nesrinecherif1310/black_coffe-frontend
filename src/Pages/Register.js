import React from 'react';


const Register = ()=>{

return(
    <div className='register'>
        <div className='register-cover '>

        </div>

        <div className='register-content'>
            <div>
                <h1>DARK SPACE</h1>
                <p> dark  space coffe  application </p>
            </div>
               <div>
                <from>
                    <div>
                        <label> Firstname</label>
                        <input type ="text" /> 
                    </div>

                    <div>
                        <label> Lastname</label>
                        <input type ="text" />
                    </div>
                    <div>
                        <label> Email</label>
                        <input type ="email" />
                    </div>
                    <div>
                        <label> Password</label>
                        <input type ="password" />
                    </div>
                    <div>
                        <label> Bio</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <label> Picture</label>
                        <input type ="file" />
                    </div>
                    <div>
                        <label> </label>
                        <input type ="text" />
                    </div>
                    <div>
                        <label> birthdate</label>
                        <input type ="date" />
                    </div>
                   
                </from>
               </div>




        </div>
    


        


    </div>
)

}


export default Register; 