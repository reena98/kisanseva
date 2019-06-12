create proc get_CategoryDetails
(
@Category varchar(250),
@order varchar(50)='asc'
)
as begin
SELECT * into #temp FROM [productdetail] where category=@Category 

if @order='asc'
begin 
select * from #temp order by price asc
end
else
begin
select * from #temp order by price desc
end
end

exec get_CategoryDetails 'Dal','desc'

select * from [productdetail]