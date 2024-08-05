package handler

import (
	"api/pkg/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *handler) GetAll(c *gin.Context) error {
	var projects []model.Projects
	if err := h.service.GetAll(&projects); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return err
	}
	c.JSON(http.StatusOK, projects)
	return nil
}
