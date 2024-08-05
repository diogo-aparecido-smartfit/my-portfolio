package handler

import (
	repository "api/pkg/repository/project"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

func (h *handler) Create(c *gin.Context) error {
	var body repository.PostProjectStruct

	if err := c.ShouldBindBodyWith(&body, binding.JSON); err != nil {
		c.String(http.StatusInternalServerError, "The body should be Project{}: %v", err)
		c.AbortWithStatus(http.StatusBadRequest)
		return err
	}

	if err := h.service.Create(&body); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return err
	}
	c.JSON(http.StatusOK, body)
	return nil
}
