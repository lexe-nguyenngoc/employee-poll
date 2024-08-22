const transformQuestionToType = (questions, userId) => {
  if (!questions > 0)
    return {
      new: [],
      done: []
    };

  const { new: newQuestions, done } = Object.values(questions).reduce(
    (previousValue, currentValue) => {
      if (
        currentValue.optionOne.votes.includes(userId) ||
        currentValue.optionTwo.votes.includes(userId)
      ) {
        return {
          ...previousValue,
          done: [...previousValue.done, currentValue]
        };
      }

      return { ...previousValue, new: [...previousValue.new, currentValue] };
    },
    {
      new: [],
      done: []
    }
  );

  return {
    new: newQuestions.sort((a, b) => b.timestamp - a.timestamp),
    done: done.sort((a, b) => b.timestamp - a.timestamp)
  };
};

export default transformQuestionToType;
