CREATE PROCEDURE [dbo].Product_Add_SavedCartDetail
(
@UserName varchar(50),
@quentity int,
@lblProductId int,
@lblProductName varchar(150),
@lblPrice int
)
as begin



insert into SavedCartDetail(productid,quantity,price,totalcost,username,productname,status)
values(@lblProductId,@quentity,@lblPrice,@quentity*@lblPrice,@UserName,@lblProductName,1)

end