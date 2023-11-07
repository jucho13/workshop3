//import del service repository:
import StudentRepository from '../services/repository/students.repository.js';

// const studentService= new StudentRepository();
export const getStudent = (async(req,res)=>{
        try {
            let students = await StudentRepository.getAll();
            res.send(students);
        } catch (error) {
            console.error(error);
            res.status(500).send({error:  error, message: "No se pudo obtener los estudiantes."});
        }
    }
)

export const postStudent = (async(req,res)=>{
    try {
        let result = await studentService.createStudent(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo guardar el estudiante."});
    }
})