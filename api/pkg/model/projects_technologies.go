package model

import "gorm.io/gorm"

type ProjectsTechnologies struct {
	gorm.Model
	ProjectID    string       `gorm:"primaryKey"`
	TechnologyID string       `gorm:"primaryKey"`
	Projects     Projects     `gorm:"foreignKey:ProjectID" json:"projects"`
	Technology   Technologies `gorm:"foreignKey:TechnologyID" json:"technologies"`
}
