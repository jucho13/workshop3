export default class CoursesRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getAll = () =>{
        return this.dao.getAll();
    }
    getBy = (params) => {
        return this.dao.getById(params);
    }
    createStudent = (course) =>{
        return this.dao.saveCourse(course);
    }
    update = (id,data) =>{
        return this.dao.updateCourse(id,data);
    }
    
};