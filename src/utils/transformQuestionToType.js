const transformQuestionToType = (questions, userId) => {
  if (!questions > 0)
    return {
      new: [],
      done: []
    };

  return Object.values(questions).reduce(
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
};

export default transformQuestionToType;
