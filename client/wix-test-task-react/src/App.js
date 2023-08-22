import './App.css';
import {useEffect} from "react";
import Board from "./components/Board";
import {useDispatch, useSelector} from "react-redux";
import LoginScreen from "./components/LoginScreen";
import {setUserName} from "./slices/userSlice";

function App() {
    // const renderNodes = (node) => {
    //     console.log(node)
    //     if (!node.children.length) return
    //     for (let i = 0; i < node.children.length; i++) {
    //         renderNodes(node.children[i])
    //     }
    // }
    // useEffect(() => {
    //     renderNodes(document.getElementById('root'))
    // }, [])

    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('userName')) {
            dispatch(setUserName(localStorage.getItem('userName')))
        }
    }, [])

    const userName = useSelector(state => state.user.name)

    return (
        <div className="App">
            {userName
                ? <Board size={10}/>
                : <LoginScreen/>
            }
        </div>
    );
}

export default App;
