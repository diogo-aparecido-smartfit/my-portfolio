package handler

import (
	service "api/pkg/service/project"

	"github.com/gin-gonic/gin"
)

type handler struct {
	service service.ProjectService
}

type ProjectsHandler interface {
	GetAll(g *gin.Context) error
	Create(g *gin.Context) error
}

func NewProjectHandler(service service.ProjectService) ProjectsHandler {
	return &handler{service: service}
}
