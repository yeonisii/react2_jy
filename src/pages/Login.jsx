import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const LoginBox = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
`;

const LoginTitle = styled.h2`
  color: #232323;
  font-size: 25px;
`;

const LoginForm = styled.form`
  width: 300px;
  height: 50px;
  margin-bottom: 40px;
  border-radius: 11px;
  border: 1px solid #b4b9c9;
  color: #343434;
  font-size: 20px;
  padding-left: 70px;
  box-sizing: border-box;
`;

const LoginInput = styled.input`
  width: 100px;
  height: 50px;
  margin-bottom: 40px;
  border-radius: 11px;
  border: 1px solid #b4b9c9;
  color: #343434;
  font-size: 20px;
  padding-left: 70px;
`;

const LoginButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #898989;
  color: #fff;
`;

const JoinButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #454545;
  color: #fff;
`;

function Login() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    return;
  };

  return (
    <LoginBox>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm>
        <LoginInput
          type="text"
          placeholder="아이디"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          minLength={4}
          maxLength={10}
          required
        />
        <LoginInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={4}
          maxLength={15}
          required
        />
        <LoginButton type="submit">로그인</LoginButton>
      </LoginForm>
      <JoinButton onClick={() => Navigate("/signup")}></JoinButton>
    </LoginBox>
  );
}

export default Login;
