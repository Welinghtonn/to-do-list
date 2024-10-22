import { ThemeProvider } from "styled-components";
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import "../style/home"

import { BiSearchAlt } from "react-icons/bi";
import { IoAddSharp } from 'react-icons/io5';
import { VscDiffAdded } from 'react-icons/vsc';
import { DownOutlined } from '@ant-design/icons';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Dropdown, Space } from 'antd';
import Popup from 'reactjs-popup';

import { GlobalStyles, lightTheme, darkTheme } from "../style/home";
import { Task } from "../components/task";

import Alert from '@mui/material/Alert';
import DesktopDatePicker from "../components/styledDate"


const Body = React.lazy(() => import("../components/bodyData"));

const useDarkMode = () => {

    const [theme, setTheme] = React.useState("light");
    const setMode = (mode) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };
    const toggleTheme = () => {
        theme === "dark" ? setMode("light") : setMode("dark");
    };
    React.useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme ? setTheme(localTheme) : setMode("dark");
    }, []);
    return [theme, toggleTheme];
};

const Home = () => {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    const [search, setSearch] = useState()

    const [task, setTask] = useState([])
    const [input, setInput] = useState()
    const [inputDate, setInputDate] = useState()
    const [filterTask, setFilterTask] = useState('ALL')

    const [error, setError] = useState("");
    const [confirm, setConfirm] = useState(false)
    const [taskToDelete, setTaskToDelete] = useState(null)

    useEffect(() => {
        const data = localStorage.getItem("teste")
        if (data) {
            setTask(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    function onChangeValue(e) {
        const value = e.target.value;
        setSearch(value);
        const valueLocalStorage = JSON.parse(localStorage.getItem("teste")) || [];
        const newValue = valueLocalStorage.filter((item) => item.title.includes(value));
        setTask(newValue);
    }

    function deleteTask(id) {
        setConfirm("Vc tem certeza que quer excluir?")
        setTaskToDelete(id);
    }

    // Confirma a exclusão da tarefa
    function confirmDelete() {
        if (taskToDelete) {
            const escluir = task.filter(item => item.id !== taskToDelete);
            localStorage.setItem('teste', JSON.stringify(escluir));
            setTask(escluir);
            setTaskToDelete(null)
        }
        setConfirm("")
    }

    function addTask() {
        if (input && inputDate) {
            setTask((t) => {
                const newValue = [...t, {
                    id: crypto.randomUUID(),
                    title: input,
                    date: inputDate,
                    completed: false
                }]

                localStorage.setItem("teste", JSON.stringify(newValue))
                setInput("");
                setInputDate("")
                return newValue
            })

        } else {
            setError("Existem campos vazios")
        }
    }

    function all() {
        const tasks = JSON.parse(localStorage.getItem("teste"))
        setTask(tasks)
        setFilterTask('All')
    }

    function completed() {
        const tasks = JSON.parse(localStorage.getItem("teste"))
        const completedTask = tasks.filter((item) => item.completed === true)
        setTask(completedTask)
        setFilterTask('Completed')
    }

    function incomplet() {
        const tasks = JSON.parse(localStorage.getItem("teste"))
        const incomplet = tasks.filter((item) => item.completed === false)
        setTask(incomplet)
        setFilterTask("Incomplete")
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="main">

            <div className="top">
                <p className='Title'>To Do List</p>
                <div className="container">
                    <div className="pop-up">
                        <Popup
                            trigger={<button className="button"><IoAddSharp />Adicionar Task</button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal">
                                    <div className="headerClose">
                                        <button className="close" onClick={close}>
                                            &times;
                                        </button>
                                    </div>
                                    <div className="header">Create tasks</div>
                                    <div className="content-modal">
                                        <div className="container-add">
                                            <input value={input} onChange={handleChange} placeholder='Create Task...' type="text" />
                                        </div>

                                        <form action="">
                                            <label htmlFor="">
                                                <p>Data de conclusão</p>
                                                <DesktopDatePicker inputDate={inputDate} setInputDate={setInputDate} />
                                            </label>
                                        </form>
                                        <div className="containerAddTask">
                                            <button onClick={addTask} className='addTask'><VscDiffAdded fontSize={20}/>Create</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                    <div className="container-search">

                        <input value={search} onChange={onChangeValue} type="text" placeholder='Search Task...' />
                        <BiSearchAlt className='search' />
                    </div>
                    <div className="container-options">
                        <Dropdown className="dropDown" menu={{
                            items: [
                                {
                                    label: <button className="buttonDropdown" onClick={all} >All</button>,
                                    key: '0',
                                },
                                {
                                    label: <button className="buttonDropdown" onClick={completed}>Complete</button>,
                                    key: '1',
                                },
                                {
                                    label: <button className="buttonDropdown" onClick={incomplet}>Incomplete</button>,
                                    key: '2',
                                },
                            ],
                        }} trigger={['click']}>
                            <a onClick={(e) => {
                                e.preventDefault()
                            }}>
                                <Space>
                                    {filterTask}
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <div className="container-sun">
                            <ThemeProvider theme={themeMode}>
                                <GlobalStyles />
                                <Body theme={theme} toggleTheme={toggleTheme} />
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>

            {/*Content*/}
            <div className="content">
                {[...task].reverse().map((item, idx) =>
                    <Task item={item} idx={idx} deleteTask={deleteTask} task={task} />
                )}
            </div>

            {/* Popup */}


            {confirm && (
                <Alert style={{ position: "absolute", top: "30px" }} variant="filled" severity="warning">
                    <div className="alertButton">
                        {confirm}
                        <button onClick={confirmDelete}>EXCLUIR</button>
                        <button onClick={() => setConfirm("")}>CANCELAR</button>
                    </div>
                </Alert>
            )}

            {error && (
                <Alert style={{ position: "absolute", top: "30px" }} variant="filled" severity="error">
                    {error}
                </Alert>
            )}
        </div>
    );
}

export default Home;