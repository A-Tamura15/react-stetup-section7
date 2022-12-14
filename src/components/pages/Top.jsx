import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  return (
    <Scontainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>登録者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
