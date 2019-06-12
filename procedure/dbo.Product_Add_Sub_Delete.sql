CREATE PROCEDURE [dbo].Product_Add_Sub_Delete
(@UserName varchar(50),
@srno int,
@ParamType varchar(20)
)
AS begin
	Declare @Quentity int,@price int
if(@ParamType='Add')
begin
	if exists(select 1 from SavedCartDetail where sno=@srno and username=@UserName)
	begin
		
		select @Quentity=quantity,@price=price from SavedCartDetail where sno=@srno
		update SavedCartDetail set quantity=@Quentity+1 ,totalcost=(@Quentity+1)*@price where sno=@srno
	end	
end

if(@ParamType='Sub')
begin
	if exists(select 1 from SavedCartDetail where sno=@srno and username=@UserName)
	begin
		
		select @Quentity=quantity,@price=price from SavedCartDetail where sno=@srno
		update SavedCartDetail set quantity=@Quentity-1 ,totalcost=(@Quentity-1)*@price where sno=@srno
	end	
end

if(@ParamType='Delete')
begin
	if exists(select 1 from SavedCartDetail where sno=@srno and username=@UserName)
	begin
		
		delete from SavedCartDetail where sno=@srno
	end	
end


end