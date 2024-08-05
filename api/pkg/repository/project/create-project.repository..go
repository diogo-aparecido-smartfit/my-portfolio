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
	Technologies   []uint         `json:"technologies"`
	JobType        string         `json:"job_type"`
	GithubLink     string         `json:"github_link"`
	DeployLink     string         `json:"deploy_link"`
	Overview       string         `json:"overview"`
	Specifications pq.StringArray `json:"specifications"`
}

func (r *projectRepository) CreateProject(body *PostProjectStruct) error {
	project := model.Projects{}

	tx := r.db.Begin()
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
			panic(r)
		}
	}()

	if err := copier.Copy(&project, &body); err != nil {
		return err
	}

	if err := tx.Model(&model.Projects{}).Create(&project).Error; err != nil {
		tx.Rollback()
		return err
	}

	for _, techID := range body.Technologies {
		projectTechnology := model.ProjectsTechnologies{
			ProjectID:    project.Id,
			TechnologyID: techID,
		}
		if err := tx.Model(&model.ProjectsTechnologies{}).Create(&projectTechnology).Error; err != nil {
			tx.Rollback()
			return err
		}
	}

	return tx.Commit().Error
}
