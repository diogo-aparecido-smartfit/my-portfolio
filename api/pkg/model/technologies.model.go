package model

type Technologies struct {
	Id      int8   `gorm:"primarykey"`
	Title   string `json:"title"`
	IconUrl string `json:"icon_url"`
}
