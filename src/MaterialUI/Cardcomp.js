import React from "react";
import { Card, CardContent } from "@mui/material";

function Cardcomp(){

    return(
        <div>
            <h2> Card Component</h2>

        <Card sx={{ minWidth: 275 }}>   
        <CardContent>
            <p>Mahendra Singh Dhoni is an Indian professional cricketer, who plays as a wicket-keeper-batsman. Widely regarded as one of the world's greatest wicketkeeper batsmen and captains in the
                 history of the sport, he is known for his explosive batting, wicket-keeping and leadership skills He was the captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He plays for and captains Chennai Super Kings franchise in the Indian Premier League.
            </p>
            
            
        </CardContent> 

        <CardContent>
            <img src="  https://qph.cf2.quoracdn.net/main-qimg-e9a847db7d61c69b0f017cf0f1b4f7a2-lq "
            height={"300px"}
            width={"280px"}


            /><br/>
           <b>M.S Dhoni</b> 
        </CardContent>
        
        </Card>
        
        </div>



    );
}

export default Cardcomp;