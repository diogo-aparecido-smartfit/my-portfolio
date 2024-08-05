package model

import (
	"time"

	"github.com/lib/pq"
)

type Projects struct {
	Id             string          `json:"id" gorm:"primarykey;type:uuid;default:uuid_generate_v4()"`
	Title          string          `json:"title" gorm:"type:text"`
	Subtitle       string          `json:"subtitle" gorm:"type:text"`
	CreatedAt      time.Time       `json:"created_at" gorm:"type:time;default:CURRENT_TIMESTAMP()"`
	Period         time.Time       `json:"period" gorm:"type:time;default:CURRENT_TIMESTAMP()"`
	JobType        string          `json:"job_type" gorm:"type:text"`
	Technologies   *[]Technologies `gorm:"many2many:projects_technologies;foreignkey:Id;joinForeignKey:ProjectId;references:Id;joinReferences:TechnologyId" json:"technologies"`
	GithubLink     string          `json:"github_link" gorm:"type:text"`
	DeployLink     string          `json:"deploy_link" gorm:"type:text"`
	Overview       string          `json:"overview" gorm:"type:text"`
	Specifications pq.StringArray  `json:"specifications" gorm:"type:text" `
}
