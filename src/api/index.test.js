import { _saveQuestion, _saveQuestionAnswer } from ".";

describe("_saveQuestion", () => {
  test("should return correctly formatted data", async () => {
    const response = await _saveQuestion({
      optionOneText: "value a",
      optionTwoText: "value b",
      author: "zoshikanlu"
    });
    expect(response).toBeTruthy();
  });

  test("should return error when param miss author", async () => {
    await expect(
      _saveQuestion({
        optionOneText: "value a",
        optionTwoText: "value b"
      })
    ).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  test("should return correctly formatted data", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "zoshikanlu",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne"
    });
    expect(response).toBeTruthy();
  });

  test("should return error when param miss answer", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "zoshikanlu",
        qid: "8xf0y6ziyjabvozdd253nd"
      })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
