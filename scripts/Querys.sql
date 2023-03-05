USE Tasks_Exact;

-- INSERT values
INSERT INTO 
	task(title) 
VALUES 
	("Read Book"),("Play Football"),
	("Create Website"),("Learn JavaScript");
    
-- COMPLETE tasks
# 0: Task incompleted 
# 1: Task completed
update task set completed=1 where id=2;

-- SHOW active tasks     
select * from task;

# Eliminate completely from table
delete from task where id=4;

