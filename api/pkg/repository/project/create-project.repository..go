package repository

import (
	"api/pkg/model"
	"time"

	"github.com/jinzhu/copier"
	"github.com/lib/pq"
)

type PostProjectStruct struct {
	Title          string         `json:"title"`
	Subtitle       string         `json:"subtitle"`
	CreatedAt      time.Time      `json:"created_at"`
	Period         time.Time      `json:"period"`
	JobType        string         `json:"job_type"`
	GithubLink     string         `json:"github_link"`
	DeployLink     string         `json:"deploy_link"`
	Overview       string         `json:"overview"`
	Specifications pq.StringArray `json:"specifications"`
}

func (r *projectRepository) CreateProject(body *PostProjectStruct) error {
	project := model.Projects{}

	if err := copier.Copy(&project, &body); err != nil {
		return err
	}

	// if err := r.db.Model(&model.Projects{}).Create(&project).Error; err != nil {
	// 	return err
	// }

	return r.db.Model(&model.Projects{}).Create(&project).Error
}
