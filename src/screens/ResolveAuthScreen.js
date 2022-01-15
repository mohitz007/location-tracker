import React,{useContext,useEffect} from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {

    const {onLocalSignin} = useContext(AuthContext);

    useEffect(() => {onLocalSignin()},[]);

    return null;
}

export default ResolveAuthScreen;