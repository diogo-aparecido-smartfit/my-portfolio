package service

import (
	"api/pkg/model"
	"api/pkg/repository"
)

type ProjectService interface {
	GetAll(projects *[]model.Projects) error
}

type projectService struct {
	repo repository.ProjectRepository
}

func NewProjectService(repo repository.ProjectRepository) ProjectService {
	return &projectService{repo: repo}
}

func (s *projectService) GetAll(projects *[]model.Projects) error {
	return s.repo.GetAll(projects)
}
