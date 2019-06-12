CREATE PROCEDURE [dbo].Get_Product_CheckOuts
(@UserName varchar(50))
as begin
select sno,productid,productimage,quantity,totalcost from SavedCartDetail where username=@UserName

select SUM(cast(totalcost as int)) from SavedCartDetail where username=@UserName

end