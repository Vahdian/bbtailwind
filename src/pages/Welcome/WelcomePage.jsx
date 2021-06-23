import React from 'react';
import myvood from '../../assets/images/voodgreytext.png';
function WelcomePage(props) {
    function cancelData(){
        console.log("CANCELLING")
    }
    function sendData(){
        history.push('landing')
    }
    return (
        <div className="w-full mt-40 flex justify-center items-center">
            <form className="flex flex-col border border-yellow-300 p-8 rounded-md relative">
                <div className="absolute right-12 text-2xl text-gray-500" onClick={()=>cancelData()}>x</div>
                <div className="flex justify-center items-center p-2">
                <img src={myvood} className="w-14" alt="myVood"/>
                </div>
                    <input type="text" id="name" placeholder="Name" className="text-center p-2 border border-black m-2"/>
                <input type="text" id="surname" placeholder="Surname" className="text-center p-2 border border-black m-2"/>
                <input type="text" id="email" placeholder="E-mail" className=" text-center p-2 border border-black m-2"/>
                <input type="submit" id="submit" value="Send" className="p-2 border border-black m-2" onClick={()=>sendData()}/>

                    <div className="flex flex-row p-2">
                <input type="checkbox" id="checkbox"/>
                <p className="text-sm p-2"> I have read and understood MyVood's <a href="www.google.com" className="text-yellow-500">privacy policy</a> </p>
                </div>
                </form>
        </div>
    );
}

export default WelcomePage;