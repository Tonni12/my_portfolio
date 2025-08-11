import "./login.css";

const export default Login(){
	<section className="login-form">
		<div>
			<form id="form" action="/submit" method="POST">
				<label for="name">Username</label>
				<input type="text" name="username" required>
				<label for="email">Email</label>
				<input type="text" name="email" required>
				<label for="password">Password</label>
				<input type="text" name="password" required>
				<label for="age">Age</label>
				<input type="number" name="age" required>
				<input type="submit" value="Submit">

			</form>
		</div>
	</section>
};