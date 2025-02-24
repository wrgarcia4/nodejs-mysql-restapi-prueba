import {pool} from '../db.js'

export const getEmployee = async (req,res)=> {
    try { 
        throw new Error('Algo ha salido Mal....')
        const [rows] = await pool.query('select * from employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ha salido Mal....'
        })  
    }
    
}

export const getEmployeeById = async (req,res)=> {
    try {
       
        console.log(req.params.id)
        const [rows]= await pool.query('select * from employee where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message: 'Empleado no se encontro'
        })
         
    
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ha salido Mal....'
        })
    }
    
}
export const createEmployee=async (req,res)=> {
    const {name,salary}= (req.body)
    try {
        
        const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name, salary])

        res.send({
        id:rows.insertId,
        name,
        salary,
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ha salido Mal....'
            
        })
    }
}

export const deleteEmployee=async(req,res)=> {
    try {
        const [result]  =  await pool.query('delete from employee where id=?',[req.params.id])
        console.log(result)

        if (result.affectedRows<=0) return res.status(404).json({
        message: 'Empleado no se encontro'
        })


        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ha salido Mal....'
        })
    } 
}

export const updateEmployee= async (req,res)=> {
    const {id} = req.params
    const {name,salary}= (req.body)

    try {

        
        const [result] = await pool.query('update employee set name=IFNULL(?,name), salary=IFNULL(?,salary) where id=?',[name,salary,id])
    
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Empleado no se encontro'
        })
    
    
        const [rows] = await pool.query('select * from employee where id=?',[id])
    
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ha salido Mal....'
        })
    }

}

