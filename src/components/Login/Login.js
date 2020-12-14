import React, { useState,useEffect } from 'react';
import './Login.scss';
import 'antd/dist/antd.css';
import { Form, Input, Button, message } from 'antd';


const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	}
};

const Login = (props) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		console.log("LoginPROPS", props);
	},[props])

	const login = () => {
		if (userName !== '' && password !== '') {
			console.log("USER DATA", userName  + " " + password)
		}
		else {
			message.error("Please enter UserName and Password");
		}
	}
	const onInputChange = (value, name) => {
		if (name === "userName") {
			setUserName(value);
		}
		if (name === "password") {
			setPassword(value);
		}
	}

	return (
		<div className="login-page">
			<div className="login-page-box">

				<div className="login-header">Login	</div>

				<Form {...layout} name="login" initialValues={{ remember: true }} onFinish={login}>
					<Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter your username!', }]}>
						<Input value={userName} onChange={(e) => onInputChange(e.target.value, "userName")} />
					</Form.Item>

					<Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
						<Input.Password value={password} onChange={(e) => onInputChange(e.target.value, "password")} />
					</Form.Item>

					<Form.Item {...tailLayout} className="login-btn">
						<Button type="primary" htmlType="submit">Login</Button>
					</Form.Item>

				</Form>

			</div>
		</div>
	)
}

export default Login
