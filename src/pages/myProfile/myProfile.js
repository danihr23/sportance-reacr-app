
import Nav from '../../containers/CreatePostNav/createPostNav'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';


const infoArr = [];
export default function MyProfile(params) {

    

    let user = JSON.parse(localStorage.getItem('user'));
    const currUserId = user.uid;
    console.log(user.uid)
    
    const [dataStor, setDataStor] = useState([]);
    const dataInfo= [{id:'',info:''}];

    
    let category =["basketball","tennis","football",]
//     const fetchData = () => {

//         for (let index = 0; index < category.length; index++) {
            
//             let currCategory = category[index];
            
        
//         db.collection(currCategory).get()
//             .then((data) => {
//                  data.docs.map(doc =>  
  
                    
//                     dataInfo.push({id:doc.id, info:doc.data()}));
                
//                 setDataStor(dataInfo)
//             })
//             .catch(err=>console.log(err));
//     }
// }
    useEffect(() => {
        for (let index = 0; index < category.length; index++) {
            
                        var currCategory = category[index];
                        
                    
                    db.collection(currCategory).get()
                        .then((data) => {
                             data.docs.map(doc =>  
              
                                
                                dataInfo.push({id:doc.id, info:doc.data()}));
                                if(index== category.length-1){
                                    dataInfo.forEach(res =>{

                                        // console.log(res);
                                        
                                         if(res.info.userId == currUserId){
                                              //console.log(res);
                                              //setDataStor(res)  
    
                                              infoArr.push(res)
                                          }
                                     }) 
                                }
                                //console.log(dataInfo);
                                
                            //setDataStor(dataInfo)
                        })
                        .catch(err=>console.log(err));

                        
                }

             
                

                
    }, [])

    

    // dataStor.forEach(res =>{

    //     //console.log(res);
       
    //      if(res.info.userId == currUserId){
    //        // console.log(res);
    //        infoArr.push(res)  
    //      }
    // })

    
    console.log(infoArr.length);


    
    return (
        <div>
            <Nav />

            <h1> Welcome {user.email} </h1>
        </div>


    )

}