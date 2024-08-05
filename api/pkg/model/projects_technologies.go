package model

type ProjectsTechnologies struct {
	ProjectID    string       `gorm:"primaryKey"`
	TechnologyID uint         `gorm:"primaryKey"`
	Project      Projects     `gorm:"foreignKey:ProjectID" json:"project"`
	Technology   Technologies `gorm:"foreignKey:TechnologyID" json:"technology"`
}
