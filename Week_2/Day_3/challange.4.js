class Subject {
    constructor(name, score, maxScore) {
        this.name = name;
        this.score = score;
        this.maxScore = maxScore;
        this.perrcent = 0;
    }

    // 1. Return the percentage score for this subject (score/maxScore * 100)
    getPercentage() {
        return this.score / this.maxScore * 100;
    }

    // 2. Return "Pass" if percentage >= 40, otherwise "Fail"
    getStatus() {
        if (this.getPercentage() >= 40) return "Pass";
        else return "Fail";
    }
}

class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.subjects = []; // array of Subject objects
    }

    // 3. Add a subject to this student
    addSubject(subjectObject) {
        this.subjects.push(subjectObject);
    }

    // 4. Return the average percentage across all subjects
    getAverageGrade() {
        const total = this.subjects.reduce((acc, add) => acc + add.getPercentage() / this.subjects.length, 0);
        return total;
    }

    // 5. Return true if the student is passing ALL subjects
    isPassingAll() {
        return this.subjects.every(n => n.getStatus() === "Pass");
    }

    // 6. Return the subject the student scored highest in
    getBestSubject() {
        let best = this.subjects[0];
        for (let subject of this.subjects) {
            if (subject.score > best.score) {
                best = subject;
            }
        }
        return best;
    }
}

class GradeTracker {
    constructor() {
        this.students = [];
    }

    // 7. Add a student
    addStudent(studentObject) {
        return this.students.push(studentObject);
    }

    // 8. Remove a student by id
    removeStudent(id) {
        this.students = this.students.filter(n => n.id !== id);
    }

    // 9. Find a student by id
    findById(id) {
        return this.students.find(n => n.id === id);
    }

    // 10. Return all students who are failing at least one subject
    getFailingStudents() {
        return this.students.filter(n => !n.isPassingAll());
    }

    // 11. Return the student with the highest average grade
    getTopStudent() {
        let top = this.students[0];
        for (let student of this.students) {
            if (student.getAverageGrade() > top.getAverageGrade()) {
                top = student;
            }
        }
        return top;
    }

    // 12. Return a leaderboard — array of {name, average} sorted highest to lowest
    getLeaderboard() {
        return this.students
            .map(student => ({
                name: student.name,
                average: student.getAverageGrade()
            }))
            .sort((a, b) => b.average - a.average);
    }

    // 13. Update a specific subject's score for a student by student id and subject name
    updateScore(studentId, subjectName, newScore) {
        const student = this.findById(studentId);
        if(!student) return null;
        const subject = student.subjects.find(n => n.name === subjectName);
        if(!subject) return null;
        subject.score = newScore;
        return subject;
    }
}

const tracker = new GradeTracker();

const alice = new Student("Alice", 1);
alice.addSubject(new Subject("Math", 88, 100));
alice.addSubject(new Subject("English", 35, 100));
alice.addSubject(new Subject("Science", 76, 100));

const bob = new Student("Bob", 2);
bob.addSubject(new Subject("Math", 45, 100));
bob.addSubject(new Subject("English", 80, 100));
bob.addSubject(new Subject("Science", 90, 100));

const alicee = new Student("Alicee", 3);
alicee.addSubject(new Subject("Math", 25, 100));
alicee.addSubject(new Subject("English", 60, 100));
alicee.addSubject(new Subject("Science", 80, 100));

tracker.addStudent(alice);
tracker.addStudent(bob);
tracker.addStudent(alicee);

console.log("================= Remove Alice ==========================");
tracker.removeStudent(alice.id);
console.log(tracker.students);

console.log("================== Alice Average =========================");
console.log(alice.getAverageGrade());
console.log("================== Bob Average ===========================");
console.log(bob.getAverageGrade());
console.log("============= Alice passed all subject or not ============");
console.log(alice.isPassingAll());
console.log("=============== Bob passed all subject or not ============");
console.log(bob.isPassingAll());
console.log("================ Alice Best Subject Score ================");
console.log(alice.getBestSubject());
console.log("================== Bob Best Subject Score ================");
console.log(bob.getBestSubject());

console.log("================== Finding Students by id ================");
console.log(tracker.findById(alicee.id));

console.log("================== Finding Students who are failing at least one subject ==================");
console.log(tracker.getFailingStudents());

console.log("================ Student with best Score ==================");
console.log(tracker.getTopStudent());

console.log("================ Student leaderboard — sorted highest to lowest ==================");
console.log(tracker.getLeaderboard());
console.log("================ Changing Student Grade by ID ==================");
console.log(tracker.updateScore(2, "Math", 100));