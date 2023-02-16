package DB

import (
	
	"log"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"deps/Server/Models"
	//"os"
  )

  var db *gorm.DB

func DBconnect(){
	var err error;

	dsn := "host=mahmud.db.elephantsql.com user=dcdgubry password=gpmuDY2lu01owW7RBHBIh3sq1TDkbBL6 dbname=dcdgubry port=5432 sslmode=disable"
db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
db.AutoMigrate(&Models.Reserve{});

if err != nil{ 
	log.Fatal("Failded to connect to database")
}

}