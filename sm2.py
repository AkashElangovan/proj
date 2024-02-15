import datetime

class SM2Item:
    def __init__(self, ease=2.5, interval=1, repetitions=0, next_review=None):
        self.ease = ease
        self.interval = interval
        self.repetitions = repetitions
        self.next_review = next_review or datetime.datetime.now()

    def update(self, grade):
        if grade >= 3:
            if self.repetitions == 0:
                self.interval = 1
            elif self.repetitions == 1:
                self.interval = 6
            else:
                self.interval *= self.ease

            self.repetitions += 1
            self.ease = self.ease + 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)
        else:
            self.repetitions = 0
            self.interval = 1
            self.ease = self.ease - 0.2

        self.next_review = datetime.datetime.now() + datetime.timedelta(days=self.interval)

    def __repr__(self):
        return f"SM2Item(ease={self.ease}, interval={self.interval}, repetitions={self.repetitions}, next_review={self.next_review})"

# Example usage:
item = SM2Item()
print("Initial state:", item)

# Simulate reviewing the item with a grade (1 to 5)
grade = int(input("Enter your grade (1 to 5): "))
item.update(grade)

print("Updated state after reviewing:", item)
