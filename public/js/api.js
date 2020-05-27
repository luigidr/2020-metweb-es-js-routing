import Exam from './exam.js';

class Api {
    /**
     * Get the list of my exams
     */
    static getPassedExams = async () => {
        let response = await fetch('/api/exams');
        const examsJson = await response.json();
        if (response.ok) {
            return examsJson.map((ex) => Exam.from(ex));
        } else {
            throw examsJson;  // an object with the error coming from the server
        }
    }

    /**
     * Get the list of courses
     */
    static getCourses = async () => {
        let response = await fetch('/api/courses');
        const courseJson = await response.json();
        if (response.ok) {
            return courseJson;
        } else {
            throw courseJson;  // an object with the error coming from the server
        }
    }
}


export default Api;
