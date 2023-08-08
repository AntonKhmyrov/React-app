import React from 'react'
import { Route, Routes } from 'react-router'
import { NavBar } from './components/navBar/NavBar'
import { HomePage, DeletedPage, CompletedPage, ProjectsPage, CreateProjectPage } from "./pages/index"

function App() {
	return (
		<div>
			<NavBar/>
			<Routes>
				<Route path={'/'} element={<HomePage/>}/>
				<Route path={'deleted'} element={<DeletedPage/>}/>
				<Route path={'completed'} element={<CompletedPage/>}/>
				<Route path={'projects'} element={<ProjectsPage/>}/>
				<Route path={'create-project'} element={<CreateProjectPage/>}/>
			</Routes>
		</div>
	)
}

// 1. Залить на GIT
// 2. Подключить редакс
// 3. Сделать создание тасок (реализовать через редакс) 
// 4. Сделать удаленние тасок (через редакс)
// 5. Выводить удаленные таски на странице удаленных
export default App
