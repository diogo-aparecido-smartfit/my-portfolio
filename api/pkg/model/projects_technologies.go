package model

import "gorm.io/gorm"

type ProjectsTechnologies struct {
	gorm.Model
	ProjectID    string       `gorm:"primaryKey"`
	TechnologyID string       `gorm:"primaryKey"`
	Project      Projects     `gorm:"foreignKey:ProjectID" json:"project"`
	Technology   Technologies `gorm:"foreignKey:TechnologyID" json:"technology"`
}
