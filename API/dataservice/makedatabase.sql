use warren;

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
