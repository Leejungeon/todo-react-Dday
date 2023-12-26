
import { useEffect, useState } from "react";
import styled from "styled-components";

const Body = styled.div`
`;

const Container = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: #333;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const DateContainer = styled.div`
  display:flex;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
  margin-right: 22px;
  margin-bottom: 10px;
`;

const DateInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const DateMessage = styled.p`
  color: #333;
  margin: 0;
`;

const ErrorMessage = styled.p`
  color: #f44336;
  margin: 0;
`;

const RemoveButton = styled(Button)`
  background-color: #f44336;
`;

const DDayCounter = () => {
  const [targetDates, setTargetDates] = useState([]);
  const [daysLefts, setDaysLefts] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    const calculateDaysLefts = () => {
      const currentDate = new Date();
      const newDaysLefts = targetDates.map((targetDate) => {
        const targetDateTime = new Date(targetDate);
        const differenceInMs = targetDateTime - currentDate;
        return Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
      });
      setDaysLefts(newDaysLefts);
    };

    calculateDaysLefts();
  }, [targetDates]);

  const addTargetDate = () => {
    setErrorMessages([]);
    setTargetDates([...targetDates, ""]);
  };

  const updateTargetDate = (index, value) => {
    const currentDate = new Date();
    const selectedDate = new Date(value);
    if (selectedDate < currentDate) {
      setErrorMessages(["지난 날짜는 입력 불가능합니다."]);
    } else {
      setErrorMessages([]);
      const newTargetDates = [...targetDates];
      newTargetDates[index] = value;
      setTargetDates(newTargetDates);
    }
  };

  const removeTargetDate = (index) => {
    const newTargetDates = [...targetDates];
    newTargetDates.splice(index, 1);
    setTargetDates(newTargetDates);
  };

  return (
    <Body>
      <Container>
        <Button type="button" onClick={addTargetDate}>
          D-day 추가
        </Button>
        {targetDates.map((targetDate, index) => (
          <div key={index}>
            <DateContainer>
              <DateWrapper>
                <label>
                  목표 날짜:
                  <DateInput
                    type="date"
                    value={targetDate}
                    onChange={(e) => updateTargetDate(index, e.target.value)}
                  />
                </label>
                {errorMessages[index] && (
                  <ErrorMessage>{errorMessages[index]}</ErrorMessage>
                )}
                <DateMessage>
                  {targetDate && daysLefts[index] >= 0
                    ? `D-day까지 ${daysLefts[index]}일 남았습니다.`
                    : ""}
                </DateMessage>
              </DateWrapper>
              <RemoveButton
                type="button"
                onClick={() => removeTargetDate(index)}
              >
                D-day 삭제
              </RemoveButton>
            </DateContainer>
          </div>
        ))}
      </Container>
    </Body>
  );
};

export default DDayCounter;