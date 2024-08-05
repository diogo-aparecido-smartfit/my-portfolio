package repository

import "api/pkg/model"

func (r *projectRepository) GetAllProjects(projects *[]model.Projects) error {
	return r.db.Preload("Technologies").Find(&projects).Error
}
