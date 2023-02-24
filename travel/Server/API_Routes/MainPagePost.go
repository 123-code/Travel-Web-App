package APIS
import (
	"deps/Server/DB"
	"deps/Server/Models"
	"github.com/gin-gonic/gin"
	"fmt"
	"os"
	"log"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
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

// send contents as email:

from := mail.NewEmail("Example User", "test@example.com")
	subject := "Sending with SendGrid is Fun"
	to := mail.NewEmail("Example User", "naranjojose256@gmail.com")
	plainTextContent := "and easy to do anywhere, even with Go"
	htmlContent := "<strong>and easy to do anywhere, even with Go</strong>"
	message := mail.NewSingleEmail(from, subject, to, plainTextContent, htmlContent)
	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
	response, err := client.Send(message)
	if err != nil {
		log.Println(err)
	} else {
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
	}
}
