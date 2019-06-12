CREATE TABLE [dbo].[OrderAddress] (
    [orderid]      VARCHAR(MAX)          NOT NULL,
    [address]      VARCHAR (MAX) NOT NULL,
    [mobilenumber] VARCHAR(50)          NOT NULL,
    PRIMARY KEY CLUSTERED ([orderid] ASC)
);

