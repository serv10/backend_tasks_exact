import { pool } from '../database.js';

export const getTasks = async (_req, res) => {
   try {
      const [results] = await pool.query('SELECT * FROM task');
      res.status(200).json(results);
   } catch (error) {
      return res.status(500).json({
         message: `[getTasks]: ${error.message}`,
      });
   }
};

export const saveTask = async (req, res) => {
   const { title } = req.body;

   try {
      await pool.query('INSERT INTO task (title) VALUES (?)', [title]);

      res.sendStatus(201);
   } catch (error) {
      return res.status(500).json({
         message: `[saveTask]: ${error.message}`,
      });
   }
};

export const deleteTask = async (req, res) => {
   const { id } = req.params;

   try {
      const [result] = await pool.query('DELETE FROM task WHERE id=?', [id]);

      if (result.affectedRows === 0)
         return res.status(404).json({
            message: 'Task not found',
         });

      res.status(201).json({
         message: 'Task eliminated successfully',
      });
   } catch (error) {
      return res.status(500).json({
         message: `[deleteTask]: ${error.message}`,
      });
   }
};

export const completeTask = async (req, res) => {
   const { id } = req.params;

   try {
      const [result] = await pool.query(
         'SELECT completed FROM task WHERE id=?',
         [id]
      );

      if (result.affectedRows === 0)
         return res.status(404).json({
            message: 'Task not found',
         });

      const value = result[0].completed;

      if (value === 0)
         await pool.query('UPDATE task SET completed=1 WHERE id=?', [id]);
      else await pool.query('UPDATE task SET completed=0 WHERE id=?', [id]);

      res.status(201).json({
         message: `Task ${value === 0 ? '' : 'in'}completed successfully`,
      });
   } catch (error) {
      return res.status(500).json({
         message: `[completeTask]: ${error.message}`,
      });
   }
};
