package handler

import (
	"api/pkg/model"
	"api/pkg/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

type handler struct {
	service service.ProjectService
}

type ProjectsHandler interface {
	GetAll(g *gin.Context) error
}

func NewProjectHandler(service service.ProjectService) ProjectsHandler {
	return &handler{service: service}
}

func (h *handler) GetAll(c *gin.Context) error {
	var projects []model.Projects
	if err := h.service.GetAll(&projects); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return err
	}
	c.JSON(http.StatusOK, projects)
	return nil
}
