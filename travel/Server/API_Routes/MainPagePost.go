package APIS
import (
	"deps/Server/DB"
	"deps/Server/Models"
	"github.com/gin-gonic/gin"
)


func CreateMainReserves(c*gin.Context){
	var reqbody struct{
		Name string
		Email string
		Age int 
		Nationality string
	}
	c.Bind(&reqbody);

MainForm := Models.Postmain{Name:reqbody.Name,Email:reqbody.Email,Age:reqbody.Age,Nationality:reqbody.Nationality};
DB.DBconn.Create(&MainForm);
}