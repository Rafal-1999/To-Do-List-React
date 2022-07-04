function App() {
	return (
		// Homework from the module 6 and 7 Frontend Developer
		<main>
			<section className="list">
				<h1 className="list__title">
					Lista zadań
				</h1>
				<div className="list__block">
					<div className="list__box">
						<h2 className="list__header">
							Dodaj nowe zadanie
						</h2>
					</div>
					<div className="list__box list__box--no-line">
						<form className="list__form">
							<input type="text" className="list__input" placeholder="Co jest do zrobienia?" autofocus />
							<button className="list__button">
								Dodaj zadanie
							</button>
						</form>
					</div>
				</div>
				<div className="list__block">
					<div className="list__box list__box--flex">
						<h2 className="list__header">
							Lista zadań
						</h2>
						<div className="list__options"></div>
					</div>
					<div className="list__tasks-block">
						<ul className="list__tasks"></ul>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
