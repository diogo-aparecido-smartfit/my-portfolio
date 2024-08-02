package repository

import "api/pkg/model"

func (r *projectRepository) GetAll(projects *[]model.Projects) error {
	return r.db.Preload("Technologies").Find(&projects).Error
}
