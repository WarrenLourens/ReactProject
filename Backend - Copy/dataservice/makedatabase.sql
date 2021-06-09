use warren;

/*drop table if exists Event;
drop table if exists Person;
create table Person(
    ID int auto_increment primary key,
    Name varchar(30),
    Password varchar(30)
);

create table Event(
    ID int auto_increment primary key,
    PersonID int ,
    Value varchar(255),
    foreign key (PersonID) references Person(ID)
);

insert into Person(Name, Password) 
values ('Todd','P@ssword1'), 
       ('Trent','P@ssword2'),
       ('Tamisin','P@ssword3'),
       ('Trisha','P@ssword4');
insert into Event(PersonID, Value)
values (1, 'Todd said this'),
       (2, 'Trent said this');

drop procedure if exists GetUsers;
delimiter //
create procedure GetUsers()
begin
      select * from Person;
end //
delimiter ;
*/
drop procedure if exists CheckPassword;
delimiter//
create procedure CheckPassword(pUser varchar(50), pPassword varchar(50))
begin
    DECLARE vResult int ;
    select -- this is the same as a switch 
        case 
            when Name = pUses and Password  = pPassword then 1 -- If the user name and password are correct set the bool to true
            when Name - pUser and Password <> pPassword then 0 -- sets the bool to false
        end as vResult
    from 
         Person 
    where 
        pUser = Name
    Into vResult;

    if  ISNULL(vResult) then 
        set vResult = -1;
        end if;
    
    SELECT vResult as result;

end //
delimiter ;
 call CheckPassword('Warren', 'WarrenPassword'); -- call the CheckPassword procedure with values

 drop procedure StoreComment (pUser varchar(50),pComment varchar(100))
 begin 
    insert into Event (PersonID, Value)
    values ((select ID from Person where name = pUser LIMIT 1), pComment);

    SELECT 'Stored a comment ' As Result;

    end//
    delimiter;
    call StoreComment('Warren', ' This is my first comment');
