package repository

import (
	"api/pkg/model"

	"gorm.io/gorm"
)

type ProjectRepository interface {
	GetAll(projects *[]model.Projects) error
}

type projectRepository struct {
	db *gorm.DB
}

func NewProjectRepository(db *gorm.DB) ProjectRepository {
	return &projectRepository{db: db}
}

func (r *projectRepository) GetAll(projects *[]model.Projects) error {
	return r.db.Find(&projects).Error
}
