import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const JoinBox = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
`;

const JoinTitle = styled.h2`
  color: #232323;
  font-size: 25px;
`;

const JoinForm = styled.form`
  width: 100px;
  height: 50px;
  margin-bottom: 40px;
  border-radius: 11px;
  border: 1px solid #b4b9c9;
  color: #343434;
  font-size: 20px;
  padding-left: 70px;
  box-sizing: border-box;
`;

const JoinInput = styled.input`
  width: 100px;
  height: 50px;
  margin-bottom: 40px;
  border-radius: 11px;
  border: 1px solid #b4b9c9;
  color: #343434;
  font-size: 20px;
  padding-left: 70px;
`;

function SignUp() {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form>
        <input
          type="text"
          placeholder="아이디"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          minLength={4}
          maxLength={10}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={4}
          maxLength={15}
          required
        />
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          minLength={1}
          maxLength={10}
          required
        />
      </form>
      <button onClick={() => navigate("/login")}>로그인</button>
    </div>
  );
}

export default SignUp;
