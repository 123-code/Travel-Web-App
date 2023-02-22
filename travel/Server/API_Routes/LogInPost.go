package APIS

import (
	"deps/Server/DB"
	"deps/Server/Models"
	"github.com/gin-gonic/gin"
)



func LoginPost(c*gin.Context){

	var reqbody struct{
		UserName string
		Password string
	}
	c.Bind(&reqbody);


login := Models.Login{UserName:reqbody.UserName,Password:reqbody.Password};
DB.DBconn.Create(&login);
}