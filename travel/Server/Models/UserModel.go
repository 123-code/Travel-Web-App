package Models

import (
    "gorm.io/gorm"
)

type User struct {
    gorm.Model
    ID    string `json:"id"`
    UserName  string `json:"name"`
    Email string `json:"email"`
    Password string `json:"password"`
}