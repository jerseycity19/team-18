
class Survey:

    def __init__(self, question_list):

        self.result = 100
        self.question_list = question_list

    def ask_question_list(self):
        for question in self.question_list:
            question.ask_question()
            self.result *= question.answer.multiplier
            print("User value: {}".format(self.result))
            print("--------------------------------")


class Question:

    def __init__(self, question, choice_list):

        self.question = question
        self.choice_list = choice_list

        self.choice_dict = self.get_choice_dict()

        self.answer = None

    def get_choice_dict(self):
        choice_dict = {}
        for i, choice in enumerate(self.choice_list):
            choice_dict[i + 1] = choice
        return choice_dict

    def ask_question(self):
        print(self.question)
        for key in self.choice_dict:
            print("\t{}:\t{}".format(key, self.choice_dict[key].choice))

        input_key = int(input("Input: "))
        self.answer = self.choice_dict[input_key]


class Choice:

    def __init__(self, choice, multiplier):

        self.choice = choice
        self.multiplier = multiplier


def main():

    question_list = [Question("How old are you?",
                              [Choice("16 - 29", .80),
                               Choice("30 - 39", .60),
                               Choice("40 - 59", .20),
                               Choice("60+", .10)]),
                     Question("What's your level of education?",
                              [Choice("High School", .80),
                               Choice("College", 1.5),
                               Choice("Graduate/ Ph.D.", 1.1),
                               Choice("Working", 1.2),
                               Choice("Retired", .70)]),
                     Question("What's your area like?",
                              [Choice("Rural", 1.1),
                               Choice("Urban", 1.4),
                               Choice("Suburban", .7)]),
                     Question("What's your income level?",
                              [Choice("0 - 10,000", 0.8),
                               Choice("10,000 - 40,000", 1.2),
                               Choice("40,000 - 80,000", 1.5),
                               Choice("80,000 - 120,000", 1.1),
                               Choice("120,000+", 1.2)]),
                     Question("Do you know someone that misuses narcotics?",
                              [Choice("Yes", 1.4),
                               Choice("No", .5)])
                     ]

    survey = Survey(question_list)
    survey.ask_question_list()


main()
