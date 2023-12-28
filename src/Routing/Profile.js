import {useState, useRef} from "react";
import "./Profile.css"

function Profile(){
    let checkboxref = useRef(null);
    let [theme,setTheme]= useState({
        bgColor:"white",
        textColor:"black",
    })
    const changetheme = ()=>{
        if(checkboxref.current.checked)
        {
            setTheme({

                bgColor:"black",
                textColor:"white",
            });
            
        }
        else{
            setTheme({

                bgColor:" white",
                textColor:"black",
            });
        }
    }

    return(
        
        <div className="profilecon">

        <div className="imagess">
            <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg "
            width="100%"
            height="100%"/>


        </div>

        <div className="contents"
        style={{backgroundColor:theme.bgColor,color:theme.textColor}}
        
        >
            <dl>
                <dt> 
                    <b>User Name</b>
                </dt>
                <dd>Monika Vishwakarma</dd>
                <dt> <b>Email-id</b></dt>
                <dd>monikavishwa9@gmail.com</dd>
                <dt><b>Gender</b></dt>
                <dd>Female</dd>
                <dt><b>Description</b></dt>
                <dd>In the world of app and web development, whether you're a front-end developer or a back-end developer, your mindset and approach can greatly influence the success of your projects.
                </dd>
            </dl>
            <button>More details</button><br></br>
            <input type="checkbox" ref={checkboxref} onClick={changetheme}/>
               <label> Check To Switch DarkMode</label> 
        </div>    
        </div>
    );
}
export  default Profile;