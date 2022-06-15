import { useEffect, useState } from 'react';
import { UseApi } from '../../services/api'
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [groupId, setGroupId] = useState('');

    const api = UseApi();

    useEffect(() => {
        
        validatetoken();
    },[])

    const validatetoken = async() => {
        try {
            const storageData = localStorage.getItem('x-access-token');

            if(storageData) {
                let resp = false;
                const data = await api.validToken(storageData)
                    .catch(function(error) {
                    if (error.response) {
                        console.log("erro erro no authProvider " + error.response.status);


                    }                       
                }
                );
                
                if(data) {
                    const user = await api.UserGetById(data.id)
                    setUser(user);
                    console.log(data)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
 
    const signin = async(email, password) => {
        
        const data = await api.logIn(email, password);
        if(!data) {
            return false;
        }
        if(data.user && data.token) {
            setUser(data.user);
            console.log(data.token)
            console.log(data.user)
            localStorage.setItem('x-access-token', data.token)
            localStorage.setItem('UserLog', data.user.fullname)                
            localStorage.setItem('email', data.user.email)                
            return true;
        }
        console.log(data)
        return false;
    }

    // recuperando o id do grupo
    const GetGroupId = (id_group) => {
        setGroupId(id_group)

    }
    const setgroupIDselec = () => {
        return groupId;
    }

    const createUser = async(user) => {
        const data =  await api.createUser(user);

        if(data) {
            return true;
        } else {
            return false;
        }
    }


    const signout = async () => {
        await api.logOut();
        setUser(null);
            localStorage.setItem('x-access-token', '')
            localStorage.setItem('UserLog', '')                
            localStorage.setItem('email', '')                
        }




    
    return (
        <AuthContext.Provider value={{ user, signin, signout, createUser, GetGroupId, setgroupIDselec }}>
            {children}
        </AuthContext.Provider>
    )

}