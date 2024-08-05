package service

import (
	"api/pkg/model"
	repository "api/pkg/repository/project"
)

type ProjectService interface {
	GetAll(projects *[]model.Projects) error
	Create(body *repository.PostProjectStruct) error
}

type projectService struct {
	repo repository.ProjectRepository
}

func NewProjectService(repo repository.ProjectRepository) ProjectService {
	return &projectService{repo: repo}
}

func (s *projectService) GetAll(projects *[]model.Projects) error {
	return s.repo.GetAllProjects(projects)
}

func (s *projectService) Create(body *repository.PostProjectStruct) error {
	return s.repo.CreateProject(body)
}
